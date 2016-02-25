Ext.define('PdfView.Application', {
    extend: 'Ext.app.Application',
    name: 'Cfd',
    
    init: function () {
        Ext.create('Ext.container.Viewport', {
            renderTo: document.getElementById('content'),
            items: [{
                xtype: 'displayfield',
                value: 'TEST'
            }]
        });
    }
  });
