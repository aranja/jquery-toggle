# ExpandToggle component

Toggle content container height.

## Usage

HTML Markup:

```html
<div class="Toggle">
  <a href="#Toggler" class="Toggle-button">Toggle Content</a>
  <div class="Toggle-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quam officiis dicta totam assumenda facere debitis delectus ea consequuntur blanditiis. Aliquam ducimus delectus aliquid a accusantium soluta, temporibus, sit dolor.</p>
  </div>
</div>
```

Note that the classes `.Toggle*` are optional.

The only requirement for styling is that the content container, in this case `.Toggle-content` has overflow set to hidden.

```css
.Toggle-content {
  overflow: hidden;
}
```


### Options
Options can be passed via data attributes or JavaScript.

| Name | type | default | description |
| ------ | ------- | ----- | ------ |
| expandToggle | string | undefined | Content container selector, defaults to next sibling element. |
| expandedClass | string | `is-expanded` | Set a class to parent element to identify state. |
| height | number | 0 | Initial height of collapsed content container. |
| maxHeight | number | null | Height of expanded content container, if no value is set the plugin defaults to the total height of the content. |
