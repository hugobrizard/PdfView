# PdfViewer
Simple wrapper over [Mozilla's PDF.js](https://github.com/mozilla/pdf.js/) viewer for ExtJs.

Distributed over the same license as the PDF.js.

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

  Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': '<Path to ux folder>'
    }
  });

Copy js folder into the root of your application.
