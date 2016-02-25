Ext.define('PdfView.controller.PdfViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pdfviewc',
    
    vportready: function() {
        Ext.create('Ext.ux.PdfViewer', {
            renderTo: document.getElementById('content'),
            url: 'http://yorl1n.github.io/PdfView/compressed.tracemonkey-pldi-09.pdf'
        })
    }
})
