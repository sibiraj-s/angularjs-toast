# angularjs-toast [![NPM Version](https://img.shields.io/npm/v/angularjs-toast.svg)](https://www.npmjs.com/package/angularjs-toast) [![Build Status](https://travis-ci.com/sibiraj-s/angularjs-toast.svg?branch=master)](https://travis-ci.com/sibiraj-s/angularjs-toast)

angularjs-toast is a simple service for creating toast notification for AngularJS pages

Live demo [here][demo]

## Getting Started

### Installation

You can directly clone/download [here][angularjs-toast]

```bash
git clone git@github.com:sibiraj-s/angularjs-toast.git
```

or use cdn

**Minified:**

```bash
//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.min.js
//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.min.css
```

**Pretty Printed:**

```bash
//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.js
//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.css
```

or

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install angularjs-toast --save
# or
yarn add angularjs-toast
```

### Usage

Import the modules required for angularjs-toast. It is necessary to include [ngSanitize][ngSanitize] and [ngAnimate][ngAnimate] for angularjs-toast to work

 ```html
<-- styles -->
<link rel="stylesheet" href="../angularjs-toast.min.css">

<-- scripts -->
<script src="angular/angular.min.js"></script>
<script src="angular-sanitize/angular-sanitize.min.js"></script>
<script src="angular-animate/angular-animate.min.js"></script>
<script src="../angularjs-toast.min.js"></script>
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
| className     | string                | alert-success | accepted values are alert-(success|danger|primary|info) |
| duration      | number                | 5000          | timeout for each toast messages to disappear |
| position      | string                | right         | position of the element can be 'left', 'center' and 'right' |
| container     | string                | body          | appends alert to the specific class or id or element. inputs should be like '.class' or '#id' |
| masterClass   | string                | "             | adds class to the container for more flexibility in styling |
| message       | html-string or string | Hi there!     | can be HTML or plain string              |
| dismissible   | boolean               | true          | show / hide the close icon. if set to false the toast will hide on timeout |
| maxToast      | number                | 7             | maximum number of toast messages to show. if max reached the element inserted first will be removed |
| insertFromTop | boolean               | false         | setting true will insert new messages on top else inserts at bottom |
| removeFromTop | boolean               | false         | setting true removes first element when maxToast is reached else removes last element |

[ngAnimate]: https://docs.angularjs.org/api/ngAnimate
[ngSanitize]: https://docs.angularjs.org/api/ngSanitize
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://sibiraj-s.github.io/
[ngx-notifier]: https://github.com/sibiraj-s/ngx-notifier
[angularjs-toast]: https://github.com/sibiraj-s/angularjs-toast
[demo]: https://sibiraj-s.github.io/angularjs-toast/
