(function($) {
  /**
   * Initialization
   */
  Drupal.behaviors.mymodule = {
    /**
     * Run Drupal module JS initialization.
     * 
     * @param context
     * @param settings
     */

    attach: function(context, settings) {
    	console.log(settings);
    	console.log(context);
    	console.log($('p', context));	

    	//console.log();
    	$(Drupal.theme('myModuleTheme', new Date())).insertAfter($('h1'));
    }
  };


  Drupal.theme.prototype.myModuleTheme = function(text){
  	return '<div class="mymodule"><p>' + Drupal.t('Date') + ': ' + text + '</p></div>';
  };


})(jQuery);