# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

## Unreleased

#### Dependency Updates

* update eslint to v5.5.0 ([8cc3153](https://github.com/Sibiraj-S/angularjs-toast/commit/8cc3153))
* update grunt-contrib-uglify to v4.0.0 ([8cc3153](https://github.com/Sibiraj-S/angularjs-toast/commit/8cc3153))

## v2.0.0 (2018-08-26)

#### Internal

* use 2 space indentation instead of 4 space indent ([2c3906b](https://github.com/Sibiraj-S/angularjs-toast/commit/2c3906b))

#### Dependency Updates

* update devDependencies ([7878db5](https://github.com/Sibiraj-S/angularjs-toast/commit/7878db5))

#### Breaking Changes

* require minimum angular version v1.7 ([5b16c04](https://github.com/Sibiraj-S/angularjs-toast/commit/5b16c04))

## v1.0.16 (2018-07-27)

Just a Maintenance Patch

#### Internal

* remove commitizen, cz-conventional-changelog
* prevent running `npm publish` directly
* lint all js files using eslint

## v1.0.15 (2018-07-17)

Just a Maintenance Patch

#### Internal

* remove pullapprove
* migrate to travis-ci.com

#### Dependency Updates

* remove vulnerable dependencies ([1d6759a](https://github.com/Sibiraj-S/angularjs-toast/commit/1d6759a))
* update dependencies in demo page ([d8f4dfc](https://github.com/Sibiraj-S/angularjs-toast/commit/d8f4dfc))

## v1.0.14 (2018-07-10)

Just a Maintenance Release.

#### Internal

* code-cleanup and update devDependencies ([36e1a8e](https://github.com/Sibiraj-S/angularjs-toast/commit/36e1a8e))

## v1.0.13 (2018-04-03)

#### Internal

* code cleanup - removed unused definition ([350e821](https://github.com/Sibiraj-S/angularjs-toast/commit/350e821))
* fix live reload error while development in windows ([19741a3](https://github.com/Sibiraj-S/angularjs-toast/commit/19741a3))
* replace yarn with npm in package.json ([76a612b](https://github.com/Sibiraj-S/angularjs-toast/commit/76a612b))
* travis - do npm install manually ([c4e6bfb](https://github.com/Sibiraj-S/angularjs-toast/commit/c4e6bfb))

## v1.0.12 (2018-03-27)

#### INTERNAL

* remove unused devDependency ([eaf52a7](https://github.com/Sibiraj-S/angularjs-toast/commit/eaf52a7))
* remove TREE.md ([6f69310](https://github.com/Sibiraj-S/angularjs-toast/commit/6f69310))
* remove yarn ([84cc82c](https://github.com/Sibiraj-S/angularjs-toast/commit/84cc82c))
* add post build script ([23520c9](https://github.com/Sibiraj-S/angularjs-toast/commit/23520c9))

#### Dependency Updates

* update angular to v1.6.9 in docs ([9b8d3b7](https://github.com/Sibiraj-S/angularjs-toast/commit/9b8d3b7))
* update devDependencies ([c518367](https://github.com/Sibiraj-S/angularjs-toast/commit/c518367))

## v1.0.11 (2017-12-04)

#### Bug Fixes

* fix page navigate on click of close button ([840e07f](https://github.com/Sibiraj-S/angularjs-toast/commit/840e07f))

## v1.0.10 (2017-11-28)

#### Documentation

* update README.md

## v1.0.9 (2017-11-28)

#### Internal

* drop bower support
* publish only `dist/` folder to npm
* move dependencies to peerDependencies

#### Dependency Updates

* update cz-conventional-changelog to v2.1.0
* update angular to v1.6.7
* update grunt-contrib-uglify to v3.2.1

#### Breaking Changes

* bower installations will not be supported anymore, use npm or yarn

## v1.0.8 (2017-10-24)

#### Bug Fixes

* allow HTML strings in message ([84b64bd](https://github.com/Sibiraj-S/angularjs-toast/commit/84b64bd))

## v1.0.7 (2017-08-10)

#### Bug Fixes

* fix improper timeout of the notification

## v1.0.6 (2017-07-04)

#### Dependency Updates

* update angular.js to v1.6.5

## v1.0.5 (2017-07-04)

#### Documentation

* added cdn links for angularjs-toast in README.md

## v1.0.4 (2017-07-04)

#### Performance Improvements

* reduce transition time for animation

## v1.0.2 (2017-06-30)

#### Bug Fixes

* add missing `<li>`(list) element in default template

## v1.0.3 (2017-06-30)

#### Bug Fixes

* fix toast messages positioned incorrectly when container property isn't defined ([bb6cc4e](https://github.com/Sibiraj-S/angularjs-toast/commit/bb6cc4e))

## v1.0.1 (2017-06-30)

#### Internal

* remove unused dependencies

## v1.0.0 (2017-06-30)

#### Features

Initial Release. A simple toast notification service for AngularJS pages
