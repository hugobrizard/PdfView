Ext.define('PdfView.controller.PdfViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pdfviewc',
    
    vportready: function() {
        Ext.create('Ext.ux.PdfViewer', {
            renderTo: document.getElementById('content'),
            url: 'https://mozilla.github.io/pdf.js/web/viewer.html'
        })
    }
})
