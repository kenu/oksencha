Ext.define('OKAPP2.view.Main', {
    extend: 'Ext.tab.Panel',
    id: 'main',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'loginform'
            },
            {
            	xtype: 'bloglist'
            }
        ]
    }
});
