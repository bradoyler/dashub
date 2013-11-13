
var IndexController = Ember.ArrayController.extend({
	content: [],

	reposet: function() {
		return $.cookie('reponame');
	}.property(),

	reponame: function() {
		return $.cookie('reponame');
	}.property(),

	repourl: function() {
		return 'https://github.com/' + this.get('reponame') + '/issues';
	}.property('reponame'),

	authtoken: function() {
		return $.cookie('authtoken');
	}.property(),

	username: function() {
		return $.cookie('username');
	}.property('username'),

	actions: {
		logout: function() {
			$.removeCookie('authtoken');
			$.removeCookie('username');
			this.transitionToRoute('login');
		}
	}

});

export default IndexController;