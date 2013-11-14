var OpenissuesController = Ember.ArrayController.extend({
	content: [],
	allissues: [],
	actions: {
		filteryours: function() {
			var issues = this.get('content');
			var username = $.cookie('username');

			var myissues = issues.filter(function(item, index, self) {
				var userlogin = item.user.login;
				var assignee = '';
				if (item.assignee) {
					assignee = item.assignee.login;
				}

				if (userlogin === username) {
					return true;
				}
				if (assignee === username) {
					return true;
				}
			});

			this.set('content', myissues);
		},
		getall: function() {
			var all = this.get('allissues');
			this.set('content', all);
		}
	}
});

export default OpenissuesController;
