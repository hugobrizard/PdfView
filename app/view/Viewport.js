Ext.define('PdfView.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'PdfView.controller.PdfViewController'
    ],
    controller: 'pdfviewc',
    items: [

    ]
});
