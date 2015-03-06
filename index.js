'use strict';
var $ = require('jquery');

/**
 * Toggle content container height
 * @param {HTMLElement} el - The DOM element.
 * @param {{
 *   expandedClass: string,
 *   height: number,
 *   maxHeight: number,
 *   expanded: boolean
 * }} options - The options.
 */
function ExpandToggle(el, options) {
  this.el = $(el);
  this.options = $.extend({}, ExpandToggle.DEFAULTS, options);
  this.init();
}

/**
 * ExpandToggle Default Settings
 * @type {{
 *   expandedClass: string,
 *   height: number,
 *   maxHeight: number,
 *   expanded: boolean
 * }}
 */
ExpandToggle.DEFAULTS = {
  expandedClass: 'is-expanded',
  height: 0,
  maxHeight: null,
  expanded: false
};

/**
 * Initialize ExpandToggle
 */
ExpandToggle.prototype.init = function() {
  this.parent = this.options.parent ?
                this.el.closest(this.options.parent) :
                this.el.parent();

  this.container = this.options.expandToggle ?
                   this.parent.find(this.options.expandToggle) :
                   this.el.next();

  this.maxHeight = this.options.maxHeight || this.container.outerHeight();

  if (this.options.expandedText) {
    this.collapsedText = this.el.text();
    this.expandedText = this.options.expandedText || this.collapsedText;
  }

  if (this.options.expanded) {
    this.expand();
  } else {
    this.collapse();
  }
  this.el.on('click.aranja', this.handleToggle.bind(this));
};

/**
 * Collapse container
 */
ExpandToggle.prototype.collapse = function() {
  this.parent.removeClass(this.options.expandedClass);
  this.container.height(this.options.height);
  this.isExpanded = false;
  if (this.collapsedText) {
    this.el.html(this.collapsedText);
  }
};

/**
 * Expand container
 */
ExpandToggle.prototype.expand = function() {
  this.parent.addClass(this.options.expandedClass);
  this.container.height(this.maxHeight);
  this.isExpanded = true;
  if (this.options.expandedText) {
    this.el.html(this.expandedText);
  }
};

/**
 * Handle Toggle Event
 */
ExpandToggle.prototype.handleToggle = function(event) {
  event.preventDefault();

  if (this.isExpanded) {
    return this.collapse();
  }

  this.expand();
};

/**
 * Export constructor
 */
module.exports = ExpandToggle;

/**
 * jQuery plugin
 * @param  {object} options - Override default options.
 */
$.fn.expandToggle = function(options) {
  return this.each(function() {
    new ExpandToggle(this, options);
  });
};

/**
 * Data Attribute API
 */
$(window).on('load.aranja', function() {
  $('[data-expand-toggle]').each(function() {
    $(this).expandToggle($(this).data());
  });
});
