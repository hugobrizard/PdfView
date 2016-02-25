Ext.define('PdfView.Application', {
    extend: 'Ext.app.Application',
    name: 'Cfd',
    
    init: function () {
        Ext.create('Ext.container.Viewport', {
            renderTo: 'content',
            items: [{
                xtype: 'displayfield',
                value: 'TEST'
            }]
        });
    }
  });
