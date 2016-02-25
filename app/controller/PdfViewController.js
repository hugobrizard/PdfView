Ext.define('PdfView.controller.PdfViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pdfviewc',
    vportready: function() {
        Ext.Msg.alert('test');
    }
})
