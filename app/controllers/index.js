
var IndexController = Ember.ArrayController.extend({
  content: [],

  reposet: function() {
  	return $.cookie('reponame');
  }.property(),

  reponame: function() {
  	return $.cookie('reponame');
  }.property(),

  repourl: function() {
  	return 'https://github.com/'+ this.get('reponame') +'/issues';
  }.property('reponame'),

  authtoken: function() {
  	return $.cookie('authtoken');
  }.property(),

  username: function() {
      return $.cookie('username');
  }.property(),

  actions: {
   	login: function() {	
   		var username = this.get('username')||'';
   		var password = this.get('password')||'';
        var encoded =  window.base64.encode(username + ":" + password);
   		console.log('login', encoded);
        
        $.cookie.raw=true;
        $.cookie('authtoken', encoded);
        $.cookie('username', username);
        
   	},
   	save: function() {
   	   var repo = this.get('reponame');
   	   $.cookie('reponame', repo);
   	   this.set('reposet', true);
   	   console.log('save', repo)	
   	},

   	resetrepo: function() {
   	   $.cookie('reponame', '');
   	   this.set('reposet', false);	
   	},

   	logout: function() {
   	   $.removeCookie('authtoken');
   	   $.removeCookie('username');
   	}
   }

});

export default IndexController;
