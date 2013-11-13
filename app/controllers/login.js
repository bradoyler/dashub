var LoginController = Ember.Controller.extend({

	actions: {
		login: function() {
			var username = this.get('username') || '';
			var password = this.get('password') || '';
			var encoded = window.base64.encode(username + ":" + password);
			console.log('login', encoded);

			$.cookie.raw = true;
			$.cookie('authtoken', encoded);
			this.set('authtoken', encoded);
			$.cookie('username', username);
			this.set('username', username);

			this.transitionToRoute('index');

		}
	}
});

export default LoginController;