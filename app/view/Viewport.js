Ext.define('PdfView.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    width: 500,
    height: 500,
    items: [
    {
      xtype: 'displayfield',
      value: 'TEsT'
    }
    ]
});
