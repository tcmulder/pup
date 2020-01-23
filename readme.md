# Pup Popups
_a jQuery plugin_

## Description
This is a very simple, lightweight popup jQuery plugin.

## Demo
Have a look at the [demo](http://tcmulder.github.io/pup/demo/index.html) or play around with the code on [codepen](https://codepen.io/tcmulder/pen/RwwyzgG).

## Usage

### 1. Set up your JavaScript
Load jQuery and include the Pup plugin files.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link rel="stylesheet" href="stickup.css" />
<script src="stickup.js"></script>
```
### 2. Add your popup
Add your popup with a unique ID, using the following markup.

```html
<div class="pup" id="some-id">
    <div class="pup__frame">
        <div class="pup__content">
            Puppies! 🐾
        </div>
        <button class="pup__close js-pup-close" aria-label="Close popup">x</button>
    </div>
</div>
```
## 3. Add one or more triggers anywhere on the page

```html
<button data-pup="some-id">Open the popup!</button>
<p>Or, open it via any <a htef="javascript:void(0)" data-pup="some-id">other clickable elements</a></p>
```

### 4. Call the plugin
Now, just call the plugin on any selectors you'd like to trigger the popup.

```js
jQuery(function($){
  $('[data-pup]').pup();
});
```
### 5. Optionally edit the CSS
Pup is meant to be pretty minimalist, so you can add your own skin on top of it to match your site. The .pup and .pup.active selectors are where you can add any animations you'd like; the default is to simply fade in/out.

##Changelog
1.0.0 - Added plugin to GitHub.