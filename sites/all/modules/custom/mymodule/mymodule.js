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
    	console.log($('p', context));	

    	console.log();	
    }
  };
})(jQuery);