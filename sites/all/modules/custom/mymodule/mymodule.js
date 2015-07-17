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
			console.log('Calling to initFB');
			this.initFacebook();
    },
		initFacebook: function(){
			$.ajaxSetup({ cache: true });
			$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
				FB.init({
					appId: '929603380416764',
					xfbml: true,
					version: 'v2.4' // or v2.0, v2.1, v2.0
				});
				FB.getLoginStatus(Drupal.behaviors.mymodule.updateStatusCallback);
			});

			$('.fb-logout').click(function(){
				if (typeof(FB)!== 'undefined'){
					FB.api("/me/permissions","DELETE",function(response){
					    Drupal.behaviors.mymodule.updateStatusCallback(response); //gives true on app delete success 
					});
				}
			});


		},
		updateStatusCallback:function(response){
			console.log('updateStatusCallback');
			console.log(response);
			if(response.status === 'connected'){
				$('.fb-login-button').hide();
				$('.userStatus').text('User connected. FB ID=' + response.authResponse.userID);
				$('.fb-logout').show();
			}else{
				$('.userStatus').text('User not conected. Please login.');
				$('.fb-login-button').show();
				$('.fb-logout').hide();

			}
			FB.Event.subscribe('auth.statusChange', function(response) {
				console.log('auth.statusChange');
				Drupal.behaviors.mymodule.updateStatusCallback(response);
			});
		},
		afterFBlogin: function(response){
			console.log('user logged');
			console.log(response);
		}
  };


  Drupal.theme.prototype.myModuleTheme = function(text){
  	return '<div class="mymodule"><p>' + Drupal.t('Date') + ': ' + text + '</p></div>';
  };


})(jQuery);
