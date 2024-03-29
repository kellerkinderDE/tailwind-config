# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2021-12-13
### Changed
- Configuration now requires Tailwind 3.x to be installed

### Removed
- Plugin for `empty` variants, since they are included with Tailwind 3

## [1.0.1] - 2021-10-16
### Fixed
- Added the hash sign to the color values to make them valid colors

## [1.0.0] - 2021-10-15
### Added
- Color shades for `gray` and `orange`
  - They reflect the percentage of color intensity (`gray-100`, `gray-80`, ...)
- `@tailwindcss/forms` is not part of the default plugins

### Removed
- **Breaking**: Configuration for using legacy colors and font sizes has been removed

## [0.5.1] - 2021-03-03
### Removed
- `@tailwindcss/ui` dependency

## [0.5.0] - 2021-03-03
### Changed
- Changed legacy defaults to `false`

## [0.4.0] - 2021-03-02
### Breaking Changes
- Converted entrypoint from object to factory function

### Added
- Configuration object for factory function

## [0.3.0] - 2021-03-02
### Added
- Empty variant custom plugin

### Removed
- Unused configuration

## [0.2.1] - 2021-03-01
### Added
- Add `.npmrc` to omit version prefix

## [0.2.0] - 2021-03-01
### Added
- Legacy colors and font sizes to make migration from 1.x easier
- `.npmignore` file

## [0.1.0] - 2021-02-05
### Added
- NPM Publish Workflow via Github Actions

## [0.0.0] - 2021-01-28
### Added
- Initial implementation

[Unreleased]: https://github.com/kellerkinderDE/eslint-config/compare/2.0.0...HEAD
[2.0.0]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.1...2.0.0
[1.0.1]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.5.1...1.0.0
[0.5.1]: https://github.com/kellerkinderDE/eslint-config/compare/0.5.0...0.5.1
[0.5.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.4.0...0.5.0
[0.4.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.3.0...0.4.0
[0.3.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.2.1...0.3.0
[0.2.1]: https://github.com/kellerkinderDE/eslint-config/compare/v0.2.0...0.2.1
[0.2.0]: https://github.com/kellerkinderDE/eslint-config/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/kellerkinderDE/eslint-config/compare/v0.0.0...v0.1.0
[0.0.0]: https://github.com/kellerkinderDE/tailwind-config/releases/tag/v0.0.0
