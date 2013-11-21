import githubIssues from 'appkit/utils/githubIssues';

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
	
		var self = this;

		if (userProfile.authtoken && userProfile.reponame) {

            var openparams = {state:'open',sort:'updated'};
			githubIssues.find(userProfile.reponame, openparams)
				.then(function(data) {
					self.controllerFor('openissues').set('content', data);
					self.controllerFor('openissues').set('allissues', data);
					
					var pulls = data.filter(function(item, index, self) {	
						if (item.pull_request.html_url) {
							return true;
						}
					});

					self.controllerFor('pulls').set('content', pulls);
                    
				});
            
            var closedparams = {state:'closed', sort:'updated'};
			githubIssues.find(userProfile.reponame, closedparams)
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