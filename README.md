# PdfViewer
Simple wrapper over [Mozilla's PDF.js](https://github.com/mozilla/pdf.js/) viewer for ExtJs.

Distributed over the same license as the PDF.js.

**PdfViewer** - distributed with compiled library. Content of [viewer.js](https://github.com/yorl1n/PdfView/blob/master/js/pdfjs/viewer.js) is modified, so replacement with new version from Mozilla's repository will lead to crash of the component. [pdf.js](https://github.com/yorl1n/PdfView/blob/master/js/pdfjs/pdf.js) and [pdf.worker.js](https://github.com/yorl1n/PdfView/blob/master/js/pdfjs/pdf.worker.js) can be replaced with new versions. Sourcecode is not compressed, so for production the code can be minified.

Provided options
----------------
- **pagination** - Show/hide pagination tools
- **searchable** - Show/hide search tools
- **zooming** - Show/hide zooming tools
- **openable** - Show/hide open file tool
- **printable** - Show/hide printer tool
- **downloadable** - Show/hide download tool
- **sidebar** - Show/hide sidebar
- **rotatable** - Show/hide rotate tool
- **secondaryToolbar** - Show/hide secondaryToolbar
- **url** - url to pdf to view
- **interfaceLocale** - locale of the interface. Provided value should be added to [locale.properties](https://github.com/yorl1n/PdfView/blob/master/js/pdfjs/locale/locale.properties), appropreate locale files should be added to [locale folder](https://github.com/yorl1n/PdfView/tree/master/js/pdfjs/locale). All supported locales could be found in [l10n](https://github.com/mozilla/pdf.js/tree/master/l10n) folder. Included only en(default), fr and de locales.

Usage
------
To start to use PdfViewer copy PdfViewer.js into your **ux** folder. Configure **paths** to use ux like:

```javascript
  Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': '`Path to ux folder`'
    }
  });
```

Copy **js** folder into the root of your application.

Then the viewer can be added to the code:
```javascript
Ext.create('Ext.ux.PdfViewer', {
            width: 900,
            height: 500,
            renderTo: document.body,
            interfaceLocale: 'de',
            url: 'http://yorl1n.github.io/PdfView/compressed.tracemonkey-pldi-09.pdf'
        })
```

Example
--------

http://yorl1n.github.io/PdfView/
