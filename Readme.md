# CardView for DataTables 

This is the distribution package for the [CardView extension](https://datatables.net/extensions/cardview) for [DataTables](https://datatables.net/). Only the core software for this library is contained in this package - to be correctly styled, a styling package for CardView must also be included. Please see the [npm installation documentation on the DataTables site](https://datatables.net/manual/installation#Node.js-/-NPM) for full details.

CardView is an extension for DataTables which can change the display from the regular table that the end user sees, to a card based layout, with complete control over the card display through custom templates. It can also act as a method to have complex tables display gracefully on mobile devices, with full control over the responsive breakpoints and grid display.


## Installation

### Browser

To use DataTables with a simple `<script>` tag, rather than using this package, it is recommended that you use the [DataTables download builder](//datatables.net/download) which can create CDN or locally hosted packages for you, will all dependencies satisfied.

### npm

For installation via npm, yarn and other similar package managers, install this package with your package manager - e.g.:

```js
npm install datatables.net
npm install datatables.net-cardview
```

Then, to load and initialise DataTables and CardView in your code use:

```js
import DataTable from 'datatables.net';
import 'datatables.net-cardview';

// Register DataTables Plus license key
DataTable.key('plus_....');

new DataTable('#myTable', {
    // initialisation options
});
```


## Documentation

Full documentation and examples for CardView can be found [on the DataTables website](https://datatables.net/extensions/cardview).

## Bug / Support

Support for DataTables is available through the [DataTables forums](//datatables.net/forums) and [commercial support options](//datatables.net/support) are available.


## License

This software is released under the [DataTables Plus License](https://datatables.net/license/plus). To use the software a license key must be applied - see [DataTables Plus](https://datatables.net/plus).
