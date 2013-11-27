var OpenissuesController = Ember.ArrayController.extend({
	content: [],
	allissues: [],

	selectedMilestone: null,
	
	milestones: [
		"v1",
		"v2"
	],

	openpulls: function() {
        var openissues = this.get('content');
       // console.log('$open ',openissues);
		var pulls = openissues.filter(function(item, index, self) {
			console.log('$$pulls', item);
			if (item._data.pull_request.html_url) {
				return true;
			}
		});

	    return pulls;

    }.property('content.[]'),
	
	yours: function() {

		var issues = this.get('content');
		var username = $.cookie('username');

		var myissues = issues.filter(function(item, index, self) {
		//	console.log('$$my', item);
			var userlogin = item._data.user.login;
			var assignee = '';
			if (item._data.assignee) {
				assignee = item._data.assignee.login;
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
