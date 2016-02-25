Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'ux'
    }
});
Ext.application({
    name: 'PdfView',
    extend: 'PdfView.Application',
    autoCreateViewport: 'PdfView.view.Viewport'
});
