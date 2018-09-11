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
@import "node_modules/selectize-bootstrap4-theme/scss/selectise.bootstrap4.scss";
```

## Theming

Every Selectize variable includes the `!default` flag
allowing you to override the variable's default value in your SCSS
without modifying source code of the package.
Copy and paste variables as needed, modify their values, and remove `!default` flag.
If a variable has already been assigned, then it won't be re-assigned by the default values.

You will find the complete list of Selectize variables in `scss/_variables.scss`.

Overrides example:

```scss
// Single item select has arrow to down
$selectize-arrow-color: red; // Color of arrow, default $body-color from Bootstrap 4 variables
$selectize-arrow-width: 8px; // Width of arrow, default 0.625rem

// Caret
$selectize-caret-margin: 2px 0; // Caret margin, default 0 2px 0 0

// Selected item of multiple item select
$selectize-item-bg-color: red; // Background color of item, default $primary from Bootstrap 4 variables
$selectize-item-margin: 2px 1px; // Item margin, default 0 3px 0 0

// Dropdown
$selectize-dropdown-max-height: 200px; // Max height of dropdown, default 14.5rem

// Dropdown item
$selectize-dropdown-item-bg-color: red; // Background color of item, default $dropdown-link-active-bg from Bootstrap 4 variables
$selectize-dropdown-item-color: white; // Color of active (hover) item label, default $dropdown-link-active-color from Bootstrap 4 variables
$selectize-dropdown-item-color-disabled: grey; // Color of disabled item label, default $dropdown-link-disabled-color from Bootstrap 4 variables
$selectize-dropdown-item-header-color: black; // Color of option group header, default $dropdown-header-color from Bootstrap 4 variables

// Dropdown divider for option groups
$selectize-dropdown-divider-bg-color: red; // Color of divider, default $dropdown-divider-bg from Bootstrap 4 variables
```

## Examples

Clone the repo and open `dist/examples.html` to see examples of Bootstrap 4 Selectize inputs.
