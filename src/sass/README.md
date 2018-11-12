# Paragon
Styling framework

[![npm version](https://badge.fury.io/js/paragon-framework.svg)](https://badge.fury.io/js/paragon-framework)

## Browser Support

| Chrome | Edge | Firefox | Opera | IE | Safari |
|--------|------|---------|-------|----|--------|
| Latest | Latest | Latest | Latest | IE 11+ | Safari 8+ |


# Getting Started

## Install the Component

The Paragon Framework is delivered as a [npm](https://docs.npmjs.com/cli/install) component.

1. Install the paragon npm component. This will install the Paragon files in your project's node_modules folder.
  ```grunt
  npm i paragon-framework
  ```

## Setting up your project with SASS

Sass is a great way to keep your project clean, organized and easy-to-manage. If you are unfamiliar with the workings of Sass, learn more [here](http://sass-lang.com/guide).

### Including Paragon Styles

Copy and paste the following code snippet into your project. This will pull in normalize, along with Paragon base and module styles.

> Note: If you wish to overwrite Paragon styles to add customization your project, skip through this step and head to the [next section](https://github.com/samaritanministries/paragon/#including-custom-styles).

```scss
@import "node_modules/paragon-framework/sass/vendor/normalize";
@import "node_modules/paragon-framework/sass/base/base";
@import "node_modules/paragon-framework/sass/modules/modules";
```

### Including Custom Styles

While the Paragon Style Framework does provide a lot of core modules for you to utilize, it most likely won't have everything you need. Follow the [SMACSS](https://smacss.com/) syntax in order to add a clean, organized structure to your custom stylesheets.

1. Create five individual folders, named `base`, `layout`, `modules`, `state` and `theme`.

2. Within each folder, create a stylesheet to match. (e.g. You would create a `base.scss` file within your `base` folder).

3. Import everything to your main application folder. When you're all finished, it should look something like this:
  ```scss
  @import "node_modules/paragon-framework/sass/vendor/normalize";
  @import "node_modules/paragon-framework/sass/base/base";
  @import "theme/theme";
  @import "node_modules/paragon-framework/sass/modules/modules";

  @import "base/base";
  @import "layout/layout";
  @import "modules/modules";
  @import "state/state";
  ```

  > Note: By including a theme file, your modules will now look to that for color theming, rather than base.

  ## Setting up your HTML file and importing styles

  We've provided a starter HTML file to help you get running. Paste this code into your `index.html` file.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- These previous two meta tags *must* come first in the head -->
      <title>Paragon Template</title>

      <!-- Working with CSS – Use this link if prefer to use the vanilla css, without any customization -->
      <link rel="stylesheet" href="/node_modules/paragon-framework/paragon.css">

      <!-- Working with SCSS – Use this if you'd like to add any customization to the paragon modules. Note: The path and file name may differ for your project. -->
      <link rel="stylesheet" href="styles/application.css">
    </head>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>
  ```

  ## Found a Bug?

  [Submit an issue](https://github.com/samaritanministries/paragon/issues) if you need help, or [submit a pull request](https://github.com/samaritanministries/paragon/pulls) with your own fixes or changes.

  ## Contributors

  Paragon is a product of Samaritan Ministries International.

  Thanks to the following people who have contributed to this project:

  - [@jrauh](https://github.com/jrauh)
  - [@bjrobertson](https://github.com/bjrobertson)
  - [@coryclubb](https://github.com/coryclubb)
  - [@nevren](https://github.com/Nevren)
  - [@aknobloch3](https://github.com/aknobloch3)

  ## License

  [MIT License](LICENSE.md)
