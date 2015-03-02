'use strict';
var $ = require('jquery');

/**
 * Toggle content container height
 * @param {HTMLElement} el - The DOM element.
 * @param {{
 *   expandedClass: string,
 *   height: number,
 *   maxHeight: number
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
 *   maxHeight: number
 * }}
 */
ExpandToggle.DEFAULTS = {
  expandedClass: 'is-expanded',
  height: 0,
  maxHeight: null
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

  if (!this.parent.hasClass(this.options.expandedClass)) {
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
};

/**
 * Expand container
 */
ExpandToggle.prototype.expand = function() {
  this.parent.addClass(this.options.expandedClass);
  this.container.height(this.maxHeight);
  this.isExpanded = true;
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
