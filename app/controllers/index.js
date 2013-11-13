
var IndexController = Ember.ArrayController.extend({
	content: [],

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

	

});

export default IndexController;