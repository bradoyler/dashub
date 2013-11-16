
var IndexController = Ember.Controller.extend({
	content: [],

	reponame: function() {
		return $.cookie('reponame');
	}.property('reponame'),

	repourl: function() {
		return 'https://github.com/' + this.get('reponame') + '/issues';
	}.property('reponame'),

	authtoken: function() {
		return $.cookie('authtoken');
	}.property('authtoken'),

	username: function() {
		return $.cookie('username');
	}.property('username'),

	avatar_url: function() {
		return $.cookie('avatar_url');
	}.property('avatar_url')

});

export default IndexController;