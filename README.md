# angularjs-toast [![Build Status](https://travis-ci.org/Sibiraj-S/angularjs-toast.svg?branch=master)](https://travis-ci.org/Sibiraj-S/angularjs-toast)

A Simple notification service for AngularJS pages

## Getting Started

### Installation

You can directly clone/download [here][angularjs-toast]

or

Install via package managers such as [npm][npm], [yarn][yarn] and [bower][bower]

```bash
npm install angularjs-toast --save
# or
yarn add angularjs-toast
# or
bower install angularjs-toast --save
```

 ### Usage
 Import the modules required for angularjs-toast. It is necessary to include [ngSanitize][ngSanitize] and [ngAnimate][ngAnimate] for angularjs-toast to work

 ```html
<-- styles -->
<link rel="stylesheet" href="angularjs-toast/dist/angularjs-toast.min.css">

<-- scripts -->
<script src="angular/angular.min.js"></script>
<script src="angular-sanitize/angular-sanitize.min.js"></script>
<script src="angular-animate/angular-animate.min.js"></script>
 ```

add `angularjsToast` dependency to the module

```js
angular.module('myApp', ['angularjsToast'])
```

and in your controller

```js
angular.controller('toastController', ['toast', function(toast){

   toast({
     duration  : 10000,
     message   : "Hi there!",
     className : "alert-success"
   });

}]);
```

### Options

all options are type sensitive

| Property      | Type                  | Default       | Description                              |
| ------------- | --------------------- | ------------- | ---------------------------------------- |
| class         | string                | alert-success | this applies / overrides the CSS for toast elements |
| duration      | number                | 3000          | timeout for each toast messages to disappear |
| position      | string                | right         | position of the element can be 'left', 'center' and 'right' |
| container     | string                | body          | appends alert to the specific class or id or element. inputs should be like '.class' or '#id' |
| masterClass   | string                | ""            | adds class to the container for more flexibility in styling |
| message       | html-string or string | Hi there!     | can be HTML or plain string              |
| dismissible   | boolean               | true          | show / hide the close icon. if set to false the toast will hide on timeout |
| maxToast      | number                | 7             | maximum number of toast messages to show. if max reached the element inserted first will be removed |
| insertFromTop | boolean               | true          | setting true will insert new messages on top else inserts at bottom |
| removeFromTop | boolean               | false         | setting true removes last element on timeout else removes first element |

## Pull Requests

Send Pull Requests only to `.coffeescript` and `.scss` files only. JS and CSS files are genereted by grunt

* **grunt webserver** - sets up a local server with livereload

* **grunt develop** - converts coffeescript files to js and watches for changes and enables livereload

* **grunt dist** - converts, annotates, minifies coffeescript to js and also converts and minifies scss to css




[ngAnimate]: https://docs.angularjs.org/api/ngAnimate
[ngSanitize]: https://docs.angularjs.org/api/ngSanitize
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[bower]: https://bower.io/
[angularjs-toast]: https://github.com/Sibiraj-S
