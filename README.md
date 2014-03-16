gau
===

Google Analytics Utils

This is a mini library for Google Analytics

### Setup

GAU.setup(account:string, useUniversal:boolean, useSSL:boolean);

##### Example:

GAU.setup('UX-XXXX-Y', false, true);

### Track Page

GAU.page();

### Track Event

GAU.event(category:string[150], action:string[500], label:string[500], value:int[non-neg]);

