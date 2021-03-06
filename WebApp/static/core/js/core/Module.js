/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

/**
 * @class Ext.dirac.core.Desktop
 * This is an abstract class that has 
 * to be inherited by every module.
 * @mixin Ext.container.Container
 * 
 */
Ext.define('Ext.dirac.core.Module', {
	mixins:["Ext.dirac.core.Stateful",
	        "Ext.dirac.utils.DiracFileLoad"],
	extend: 'Ext.container.Container',
	
	/**
	 * @property {int} _UID The unique number assigned to the module, used as part of the defined id-s within the module
	 */
	_UID:0,
	_container:null,
	
	launcher: {
		
		title : 'Module',
		iconCls : 'notepad',
		width:0,
		height:0,
		maximized:true
		
	},
	
	constructor : function(config) {
		this._baseUrl = config._baseUrl;
		this.init();
		this.callParent();
	},
	
	setContainer:function(oContainer){
		
		this._container = oContainer;
		
	},
	getContainer:function(){
		
		return this._container;
		
	},
	
	init : Ext.emptyFn,

	_baseUrl:"",

	/**
	 * Setter function for the property _UID
	 * @param {int} _UID
	 */
	setUID: function(_UID){
		
		this._UID=_UID;
		
	},
	
	/**
	 * Getter function for the property _UID
	 */
	getUID: function(){
		
		return this._UID;
		
	},
	
	/**
	 * This function can be used by 
	 * the developers of the module, so that they can use 
	 * id-s across the modules without worry of duplicating id-s 
	 */
	D_ID: function(id){
		
		return id+this._UID+this.id;
		
	}
	
});
