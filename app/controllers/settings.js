var SettingsController = Ember.Controller.extend({

	reposet: function() {
		return $.cookie('reponame');
	}.property(),

	reponame: function() {
		return $.cookie('reponame');
	}.property(),

	actions: {
		save: function() {
			var repo = this.get('reponame');
			$.cookie.raw=true;
			$.cookie('reponame', repo);
			this.set('reposet', true);
			console.log('save', repo);
			this.transitionToRoute('index');
		},

		resetrepo: function() {
			$.removeCookie('reponame');
			this.set('reposet', false);
		},

	}
});

export default SettingsController;