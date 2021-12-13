# Kellerkinder TailwindCSS Config

[![npm version](https://badge.fury.io/js/%40kellerkinder%2Ftailwind-config.svg)](https://badge.fury.io/js/%40kellerkinder%2Ftailwind-config)

This package provides the Kellerkinder [TailwindCSS](https://tailwindcss.com) configuration.

## Requirements
This config has been developed and tested with the following requirements:
* NodeJS >= 12
* TailwindCSS >= 3.0.0
* PostCSS >= 8.0.0
* Autoprefixer >= 10.0.0

## Installation
In order to install this configuration, run the following scripts in your NodeJS project:

```bash
$ npm i tailwindcss postcss autoprefixer @kellerkinder/tailwind-config
```

## Usage
In order to use this configuration, you can implement it as a preset in your `tailwind.config.js`:

```js
// tailwind.config.js
const createK10rPreset = require('@kellerkinder/tailwind-config');

module.exports = {
    presets: [
        createK10rPreset(),
    ],
    // ... rest of your config
};
```

## Features
This preset offers the following features.

### Tailwind Forms
The plugins `@tailwindcss/forms` is included in this configuration to provide out-of-the-box support for [TailwindUI](https://tailwindui.com).

### Corporate Identity Colors
The [Kellerkinder](https://kellerkinder.de) corporate identity colors are provided.

**Primary color**: `#171c21`

* Shades
  * `gray-100`
  * `gray-80`
  * `gray-60`
  * `gray-40`
  * `gray-20`
* Aliases
  * `primary`

**Secondary color**: `#f56600`

* Shades
  * `orange-100`
  * `orange-80`
  * `orange-60`
  * `orange-40`
  * `orange-20`
* Aliases
  * `secondary`
  * `accent`

## Changelog
This project adheres to [Semantic Versioning](https://semver.org/).
Please refer to the [CHANGELOG.md](CHANGELOG.md) for detailed changes and
migration instructions.

## License
MIT
