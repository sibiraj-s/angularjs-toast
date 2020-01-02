# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Enhancements
> - Breaking Changes
> - Documentation
> - Internal

## v4.0.0 (2020-01-02)

#### Breaking Changes

- rename `$toastProvider` to `toastProvider` ([137be4f](https://github.com/sibiraj-s/angularjs-toast/commit/137be4f))

Add `toast` directive to ur HTML

```html
<toast></toast>
```

Before

```js
// before
toast('Hello World!');
// now
toast.create('Hello World!');
```

## v3.0.1 (2020-01-02)

#### Enhancements

- render notification template on app load ([f9c057f](https://github.com/sibiraj-s/angularjs-toast/commit/f9c057f))

## v3.0.0 (2020-01-01)

#### Features

- support dom element in container property ([ae77178](https://github.com/sibiraj-s/angularjs-toast/commit/ae77178))
- support global configuration via `$toastProvider` ([24b939f](https://github.com/sibiraj-s/angularjs-toast/commit/24b939f))
- accept string to create toasts ([e6424ce](https://github.com/sibiraj-s/angularjs-toast/commit/e6424ce))

#### Bug Fixes

- set dismissible property correctly ([86863af](https://github.com/sibiraj-s/angularjs-toast/commit/86863af))

#### Enhancements

- generate more random and uniq id ([f71fc4b](https://github.com/sibiraj-s/angularjs-toast/commit/f71fc4b)), ([67137e0](https://github.com/sibiraj-s/angularjs-toast/commit/67137e0))
- update alert colors ([eaa66fc](https://github.com/sibiraj-s/angularjs-toast/commit/eaa66fc))

#### Breaking Changes

- rename option `masterClass` to `containerClass` ([0b544c2](https://github.com/sibiraj-s/angularjs-toast/commit/0b544c2))
- `containerClass`, `insertFromTop`, `container`, `position` has to be globally configured ([9ead276](https://github.com/sibiraj-s/angularjs-toast/commit/9ead276)), ([9b562f4](https://github.com/sibiraj-s/angularjs-toast/commit/9b562f4)), ([c5d3e9d](https://github.com/sibiraj-s/angularjs-toast/commit/c5d3e9d)), ([0d56b84](https://github.com/sibiraj-s/angularjs-toast/commit/0d56b84))
- `duration` property is renamed to `timeout` ([0392187](https://github.com/sibiraj-s/angularjs-toast/commit/0392187))
- remove option `removeFromTop` ([91414ba](https://github.com/sibiraj-s/angularjs-toast/commit/91414ba))

#### Internal

- use browser-sync for local server ([5e4cccb](https://github.com/sibiraj-s/angularjs-toast/commit/5e4cccb))
- remove grunt-ng-annotate ([53c44b2](https://github.com/sibiraj-s/angularjs-toast/commit/53c44b2))
- update node version requirement ([47c7be2](https://github.com/sibiraj-s/angularjs-toast/commit/47c7be2))
- remove grunt-eslint in favour of eslint ([d9c17f1](https://github.com/sibiraj-s/angularjs-toast/commit/d9c17f1))
- cleanup build tasks ([a6325ba](https://github.com/sibiraj-s/angularjs-toast/commit/a6325ba))
- setup babel compilation ([3ad387c](https://github.com/sibiraj-s/angularjs-toast/commit/3ad387c))
- setup karma-jasmine unit tests ([d416e75](https://github.com/sibiraj-s/angularjs-toast/commit/d416e75))
- migrate to github actions from travis-ci ([26f2471](https://github.com/sibiraj-s/angularjs-toast/commit/26f2471))
- update LICENSE ([a800092](https://github.com/sibiraj-s/angularjs-toast/commit/a800092))

#### Dependency Updates

- bump devDependencies ([9e66b66](https://github.com/sibiraj-s/angularjs-toast/commit/9e66b66)), ([595961b](https://github.com/sibiraj-s/angularjs-toast/commit/595961b))
- update cdn dependencies ([2e1eb14](https://github.com/sibiraj-s/angularjs-toast/commit/2e1eb14))

## v2.0.3 (2018-12-30)

#### Enhancements

- migrate from `unpkg` cdn to `jsdelivr` ([41e42bc](https://github.com/sibiraj-s/angularjs-toast/commit/41e42bc))

#### Internal

- extend package license to 2019 ([db6ee74](https://github.com/sibiraj-s/angularjs-toast/commit/db6ee74))
- replace `eslint-config-standard` with `eslint-config-airbnb-base` ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))
- replace `grunt-contrib-sass` with `grunt-sass` ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))

#### Dependency Updates

- update eslint to v5.11.1 ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))
- update husky to v1.3.1 ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))
- update grunt-coffeelintr to v1.1.2 ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))
- update other angular dependencies ([902e33e](https://github.com/sibiraj-s/angularjs-toast/commit/902e33e))

## v2.0.2 (2018-10-04)

#### Dependency Updates

- update husky to v1.1.0 ([17c7cce](https://github.com/sibiraj-s/angularjs-toast/commit/17c7cce))

#### Internal

- update github username ([05ea495](https://github.com/sibiraj-s/angularjs-toast/commit/05ea495))
- remove vscode settings in favour of editorconfig ([f867985](https://github.com/sibiraj-s/angularjs-toast/commit/f867985))

## v2.0.1 (2018-09-17)

#### Bug Fixes

- 'insertFromTop' is set to `true` when the condition fails, the value is set to `false` by default ([f81fb6d](https://github.com/sibiraj-s/angularjs-toast/commit/f81fb6d))

#### Internal

- documentation updates and UI tweaks in demo page ([deff0e8](https://github.com/sibiraj-s/angularjs-toast/commit/deff0e8))

#### Dependency Updates

- update eslint to v5.6.0 ([65ed8b0](https://github.com/sibiraj-s/angularjs-toast/commit/65ed8b0))
- update grunt-contrib-uglify to v4.0.0 ([8cc3153](https://github.com/sibiraj-s/angularjs-toast/commit/8cc3153))
- update eslint-plugin-promise to v4.0.1 ([65ed8b0](https://github.com/sibiraj-s/angularjs-toast/commit/65ed8b0))
- update grunt-contrib-connect to v2.0.0 ([65ed8b0](https://github.com/sibiraj-s/angularjs-toast/commit/65ed8b0))
- update grunt-contrib-cssmin to v3.0.0 ([65ed8b0](https://github.com/sibiraj-s/angularjs-toast/commit/65ed8b0))

## v2.0.0 (2018-08-26)

#### Internal

- use 2 space indentation instead of 4 space indent ([2c3906b](https://github.com/sibiraj-s/angularjs-toast/commit/2c3906b))

#### Dependency Updates

- update devDependencies ([7878db5](https://github.com/sibiraj-s/angularjs-toast/commit/7878db5))

#### Breaking Changes

- require minimum angular version v1.7 ([5b16c04](https://github.com/sibiraj-s/angularjs-toast/commit/5b16c04))

## v1.0.16 (2018-07-27)

Just a Maintenance Patch

#### Internal

- remove commitizen, cz-conventional-changelog
- prevent running `npm publish` directly
- lint all js files using eslint

## v1.0.15 (2018-07-17)

Just a Maintenance Patch

#### Internal

- remove pullapprove
- migrate to travis-ci.com

#### Dependency Updates

- remove vulnerable dependencies ([1d6759a](https://github.com/sibiraj-s/angularjs-toast/commit/1d6759a))
- update dependencies in demo page ([d8f4dfc](https://github.com/sibiraj-s/angularjs-toast/commit/d8f4dfc))

## v1.0.14 (2018-07-10)

Just a Maintenance Release.

#### Internal

- code-cleanup and update devDependencies ([36e1a8e](https://github.com/sibiraj-s/angularjs-toast/commit/36e1a8e))

## v1.0.13 (2018-04-03)

#### Internal

- code cleanup - removed unused definition ([350e821](https://github.com/sibiraj-s/angularjs-toast/commit/350e821))
- fix live reload error while development in windows ([19741a3](https://github.com/sibiraj-s/angularjs-toast/commit/19741a3))
- replace yarn with npm in package.json ([76a612b](https://github.com/sibiraj-s/angularjs-toast/commit/76a612b))
- travis - do npm install manually ([c4e6bfb](https://github.com/sibiraj-s/angularjs-toast/commit/c4e6bfb))

## v1.0.12 (2018-03-27)

#### Internal

- remove unused devDependency ([eaf52a7](https://github.com/sibiraj-s/angularjs-toast/commit/eaf52a7))
- remove TREE.md ([6f69310](https://github.com/sibiraj-s/angularjs-toast/commit/6f69310))
- remove yarn ([84cc82c](https://github.com/sibiraj-s/angularjs-toast/commit/84cc82c))
- add post build script ([23520c9](https://github.com/sibiraj-s/angularjs-toast/commit/23520c9))

#### Dependency Updates

- update angular to v1.6.9 in docs ([9b8d3b7](https://github.com/sibiraj-s/angularjs-toast/commit/9b8d3b7))
- update devDependencies ([c518367](https://github.com/sibiraj-s/angularjs-toast/commit/c518367))

## v1.0.11 (2017-12-04)

#### Bug Fixes

- fix page navigate on click of close button ([840e07f](https://github.com/sibiraj-s/angularjs-toast/commit/840e07f))

## v1.0.10 (2017-11-28)

#### Documentation

- update README.md

## v1.0.9 (2017-11-28)

#### Internal

- drop bower support
- publish only `dist/` folder to npm
- move dependencies to peerDependencies

#### Dependency Updates

- update cz-conventional-changelog to v2.1.0
- update angular to v1.6.7
- update grunt-contrib-uglify to v3.2.1

#### Breaking Changes

- bower installations will not be supported anymore, use npm or yarn

## v1.0.8 (2017-10-24)

#### Bug Fixes

- allow HTML strings in message ([84b64bd](https://github.com/sibiraj-s/angularjs-toast/commit/84b64bd))

## v1.0.7 (2017-08-10)

#### Bug Fixes

- fix improper timeout of the notification

## v1.0.6 (2017-07-04)

#### Dependency Updates

- update angular.js to v1.6.5

## v1.0.5 (2017-07-04)

#### Documentation

- added cdn links for angularjs-toast in README.md

## v1.0.4 (2017-07-04)

#### Performance Improvements

- reduce transition time for animation

## v1.0.2 (2017-06-30)

#### Bug Fixes

- add missing `<li>`(list) element in default template

## v1.0.3 (2017-06-30)

#### Bug Fixes

- fix toast messages positioned incorrectly when container property isn't defined ([bb6cc4e](https://github.com/sibiraj-s/angularjs-toast/commit/bb6cc4e))

## v1.0.1 (2017-06-30)

#### Internal

- remove unused dependencies

## v1.0.0 (2017-06-30)

#### Features

Initial Release. A simple toast notification service for AngularJS pages
