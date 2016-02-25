Ext.define('PdfView.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'PdfView.controller.PdfViewController'
    ],
    viewModel: {},
    controller: 'pdfviewc',
    listeners: {
        afterrender: 'vportready'    
    },
    items: [

    ]
});
