var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('login');
  this.route('settings');
  
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
