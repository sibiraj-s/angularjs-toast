# angularjs-toast [![NPM Version](https://img.shields.io/npm/v/angularjs-toast.svg)](https://www.npmjs.com/package/angularjs-toast) [![Tests](https://github.com/sibiraj-s/angularjs-toast/workflows/Tests/badge.svg)](https://github.com/sibiraj-s/angularjs-toast/actions) [![Jsdelivr](https://data.jsdelivr.com/v1/package/npm/angularjs-toast/badge?style=rounded)](https://www.jsdelivr.com/package/npm/angularjs-toast)

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

Import the modules required for angularjs-toast. It is necessary to include [ngSanitize][ngsanitize] and [ngAnimate][nganimate] for angularjs-toast to work

```html
<-- styles -->
<link rel="stylesheet" href="../angularjs-toast.min.css" />

<-- scripts -->
<script src="angular/angular.min.js"></script>
<script src="angular-sanitize/angular-sanitize.min.js"></script>
<script src="angular-animate/angular-animate.min.js"></script>
<script src="../angularjs-toast.min.js"></script>
```

add `angularjsToast` dependency to the module

```js
const app = angular.module('myApp', ['angularjsToast']);
```

and in your controller

```js
const toastController = toast => {
  toast.create('Hello World!');
};

toastController.$inject = ['toast'];
app.controller('toastController', toastController);
```

then in HTML

```html
<toast></toast>
```

### Options

```js
toast.create({
  timeout: 5 * 1000,
  message: 'Hi there!',
  className: 'alert-success',
  dismissible: true
});
```

| Property    | Type                  | Default       | Description                                             |
| ----------- | --------------------- | ------------- | ------------------------------------------------------- |
| className   | string                | alert-success | accepted values are alert-(success/danger/primary/info) |
| timeout     | number                | 5000          | timeout for each toast messages to disappear            |
| message     | html-string or string | Hi there!     | can be HTML or plain string                             |
| dismissible | boolean               | true          | show / hide the close icon.                             |

### Configure globally

```js
const config = toastProvider => {
  toastProvider.configure({
    maxToast: 4,
    timeout: 5 * 1000,
    containerClass: 'toast-wrapper',
    defaultToastClass: 'alert-success',
    dismissible: true,
    insertFromTop: true,
    position: 'right'
  });
};

config.$inject = ['toastProvider'];
app.config(config);
```

| Property          | Type    | Default | Description                                                                                         |
| ----------------- | ------- | ------- | --------------------------------------------------------------------------------------------------- |
| maxToast          | number  | 7       | maximum number of toast messages to show. if max reached the element inserted first will be removed |
| timeout           | number  | 5000    | timeout for each toast messages to disappear                                                        |
| containerClass    | string  | "       | adds class to the container for more flexibility in styling                                         |
| defaultToastClass | string  | "       | adds class to the container for more flexibility in styling                                         |
| dismissible       | boolean | true    | show / hide the close icon.                                                                         |
| insertFromTop     | boolean | false   | setting true will insert new messages on top else inserts at bottom                                 |
| position          | string  | right   | position of the element can be 'left', 'center' and 'right'                                         |

### Animations

Default `fadeIn-fadeOut` animation can be overwriten

```scss
.angularjs-toast {
  &.ng-enter {
    opacity: 0;
    transition: 0.5s ease-in;

    &.ng-enter-active {
      opacity: 1;
    }
  }

  &.ng-leave {
    opacity: 1;
    transition: 0.2s ease-in;

    &.ng-leave-active {
      opacity: 0;
    }
  }
}
```

[nganimate]: https://docs.angularjs.org/api/ngAnimate
[ngsanitize]: https://docs.angularjs.org/api/ngSanitize
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://sibiraj-s.github.io/
[ngx-notifier]: https://github.com/sibiraj-s/ngx-notifier
[angularjs-toast]: https://github.com/sibiraj-s/angularjs-toast
[demo]: https://sibiraj-s.github.io/angularjs-toast/
