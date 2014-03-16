gau
===

Google Analytics Utils

This is a mini library for including Google Analytics into pages

### Import

```html
<script src="/path/to/libraries/gau.js"></script>
```

### Setup

```javascript
GAU.setup(account:string, useUniversal:boolean, useSSL:boolean);
```

##### Example:

```javascript
GAU.setup('UX-XXXX-Y', false, true);
```

### Track Page

```javascript
GAU.page();
```

### Track Event

```javascript
GAU.event(category:string[150], action:string[500], label:string[500], value:int[non-neg]);
```
