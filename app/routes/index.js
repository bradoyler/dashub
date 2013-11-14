//import Issue from 'appkit/models/issue';
import getJSON from 'appkit/utils/get_json';
import ajax from 'appkit/utils/ajax';

var IndexRoute = Ember.Route.extend({

	setupController: function(controller, model) {
        console.log('##setupController##');

        var authtoken = $.cookie('authtoken');
        var username = $.cookie('username');
        var reponame = $.cookie('reponame');
        this.controller.setProperties({reponame: reponame, username: username, authtoken: authtoken});
		
		var baseurl = 'https://api.github.com/repos/' + reponame + '/';
		var self = this;
		
		if (authtoken && reponame) {
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
			this.transitionTo('login');
		},

		refresh: function() {
			console.log('## refresh');
			this.init();
		}
	}


});

export default IndexRoute;