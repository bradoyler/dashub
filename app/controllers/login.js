import getJSON from 'appkit/utils/get_json';

var LoginController = Ember.Controller.extend({

	actions: {
		login: function() {
			var username = this.get('username') || '';
			var password = this.get('password') || '';

			var encoded = window.base64.encode(username + ":" + password);
			$.cookie.raw = true;
			$.cookie('authtoken', encoded);
			var self = this;
			getJSON('https://api.github.com/user')
				.then(function(data) {
					
					if (data) {
						$.cookie.raw = true;
						$.cookie('username', data.login);
						$.cookie('name', data.name);
						$.cookie('location', data.location);
						$.cookie('avatar_url', data.avatar_url);

						self.setProperties({
							authtoken: encoded,
							username: data.login
						});

						self.transitionToRoute('index');
					}
					else{					
						self.set('loginmsg', 'error logging in');						
					}
					
				});

		}
	}
});

export default LoginController;