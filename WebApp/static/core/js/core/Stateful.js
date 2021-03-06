/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

/**
 * @class Ext.ux.desktop.Desktop
 * This is an abstract class that has 
 * to be inherited by every module.
 * @mixin Ext.container.Container
 * 
 */
Ext.define('Ext.dirac.core.Stateful', {
	
	/**
	 * Function that can be overriden by a module
	 * and it is used to get the data defining 
	 * the current state of a module instance
	 * @return {Object} 
	 */
	getStateData : function(){
						return {};
					},
	/**
	 * Function that can be overriden by a module
	 * and it is used to load saved state of a 
	 * module
	 * @param {Object} data Data used to set up the state
	 */
	loadState : function(data){},
	
});
