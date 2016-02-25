Ext.define('PdfView.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'PdfView.controller.PdfViewController',
        'Ext.ux.PdfViewer'
    ],
    viewModel: {},
    controller: 'pdfviewc',
    listeners: {
        afterrender: 'vportready'    
    },
    items: [

    ]
});
