import getJSON from 'appkit/utils/get_json';

var IndexRoute = Ember.Route.extend({

	setupController: function(controller, model) {

        var userProfile = {
			reponame: $.cookie('reponame'),
			username: $.cookie('username'),
			authtoken: $.cookie('authtoken'),
			avatar_url: $.cookie('avatar_url')
		};

		this.controller.setProperties(userProfile);
        this.controllerFor('application').setProperties(userProfile);
	
		var baseurl = 'https://api.github.com/repos/' + userProfile.reponame + '/';
		var self = this;

		if (userProfile.authtoken && userProfile.reponame) {
			getJSON(baseurl + 'issues?sort=updated')
				.then(function(data) {
					self.controllerFor('openissues').set('content', data);
					self.controllerFor('openissues').set('allissues', data);
				});

			getJSON(baseurl + 'pulls?sort=updated&direction=desc')
				.then(function(data) {
					self.controllerFor('pulls').set('content', data);
				});

			getJSON(baseurl + 'issues?state=closed&sort=updated')
				.then(function(data) {
					self.controllerFor('closedissues').set('content', data);
					self.controllerFor('closedissues').set('allissues', data);
				});
		}
	},

	actions: {
		logout: function() {
			$.removeCookie('authtoken');
			$.removeCookie('username');
			this.controllerFor('application').setProperties({username:'', avatar_url:''});
			this.transitionTo('login');
		}
	}
});

export default IndexRoute;