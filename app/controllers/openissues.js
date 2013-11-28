var OpenissuesController = Ember.ArrayController.extend({
	content: [],
	allissues: [],

	selectedMilestone: null,
	
	milestones: [
		"v1",
		"v2"
	],

	yours: function() {

		var issues = this.get('content');
		var username = $.cookie('username');

		var myissues = issues.filter(function(item, index, self) {
			var userlogin = item.get('user.login');
			var assignee = '';
			if (item.assignee) {
				assignee = item.get('assignee.login');
			}

			if (userlogin === username) {
				return true;
			}
			if (assignee === username) {
				return true;
			}
		});
		return myissues;

	}.property('content.[]'),

	actions: {
		filteryours: function() {
			this.set('content', this.get('yours'));
		},

		getall: function() {
			this.set('content', this.get('allissues'));
		}
	}
});

export default OpenissuesController;
