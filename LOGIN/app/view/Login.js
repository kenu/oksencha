Ext.define('OKAPP2.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	id: 'loginform',
	
	requires: [
   	    'Ext.form.FieldSet',
   	    'Ext.field.Password'
   	],
   	
	config: {
		title: 'Login',
		iconCls: 'user',
		
		items: [
		    {
		    	xtype: 'fieldset',
		    	title: 'Log in',

		    	items: [
				    {
				    	xtype: 'textfield',
				    	name: 'id',
				    	label: 'Id',
				    	value: 'testid'
				    },
				    {
				    	xtype: 'passwordfield',
				    	name: 'password',
				    	label: 'Password',
				    	value: 'testpass'
				    }
				]
		    },
		    {
		    	xtype: 'button',
		    	text: 'Login',
		    	ui: 'confirm',
		    	handler: function() {
		    		Ext.Ajax.request({
		    			   url: 'login.jsp',
		    			   method: 'POST',
		    			   params: Ext.getCmp('loginform').getValues(),
		    			   
		    			   success: function(result) {
		    				   var resultObj = JSON.parse(result.responseText);
		    				   if (resultObj.success) {
		    					   Ext.Msg.alert("Login Done! Congrats!");
		    					   Ext.getCmp('main').setActiveItem(1);
		    				   } else {
		    					   Ext.Msg.alert("Login Failed!");        
		    				   }
		    			   },

		    			   failure: function(result){
		    			        Ext.Msg.alert("Login Failed!");        
		    			   },

		    			   scope : Ext.Viewport

		    		});
		    	}
		    }
		],		
	}
});