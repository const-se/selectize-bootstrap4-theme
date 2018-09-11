# Selectize Theme for Bootstrap 4

Selectize Theme (SCSS) based on the Bootstrap 4 components.

## Table of contents

- [Dependencies](#dependencies)
- [Install](#install)
- [Importing](#importing)
- [Theming](#theming)
- [Examples](#examples)

## Dependencies

- [Selectize](https://selectize.github.io/selectize.js/) 0.12.6 or later
- [Bootstrap](https://getbootstrap.com/) 4.1.3 or later

## Install

- [Download the latest release](https://github.com/const-se/selectize-bootstrap4-theme/archive/v2.0.0.zip)
- Clone the repo: `git clone git@github.com:const-se/selectize-bootstrap4-theme.git`
- Install with [npm](https://www.npmjs.com/): `npm install selectize-bootstrap4-theme`
- Install with [yarn](https://yarnpkg.com/): `yarn add selectize-bootstrap4-theme`
- Install with [composer](https://getcomposer.org/): `composer require const-se/selectize-bootstrap4-theme`

## Importing

Import the theme into your SCSS:

```scss
@import "node_modules/selectize-bootstrap4-theme/scss/selectise.bootstrap4";
```

## Usage

Add class `form-control` to your `<select>` and apply Selectize.

```html
<select id="selectized" class="form-control">
    <option value="1">Some value</option>
    <!-- Other options -->
</select>

<script>
    $('#selectized').selectize();
</script>
```

Selectize Theme styles will be added to `<select>` automatically.

## Theming

Theming is accomplished by Sass variables and custom CSS.
The Bootstrap theme based on built-in Bootstrap variables is used by default.

Every Selectize variable includes the `!default` flag
allowing you to override the variable's default value in your SCSS
without modifying source code of the theme.
Copy and paste variables as needed, modify their values, and remove `!default` flag.
If a variable has already been assigned, then it won't be re-assigned by the default values.

You will find the complete list of Selectize variables in `scss/_variables.scss`.

Variable overrides within the same Sass file can come before or after the default variables.
However, when overriding across Sass files, your overrides must come before you import
Selectize Theme's Sass files.

Here's an example that changes the `background-color` for the Selectize input:

```scss
// Your variable overrides
$selectize-input-bg: #111;

// Selectize Theme and its default variables
@import "node_modules/selectize-bootstrap4-theme/scss/selectise.bootstrap4";
```

## Examples

Clone the repo and open `dist/examples.html` to see examples of Bootstrap 4 Selectize inputs.
