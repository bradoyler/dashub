
var IndexController = Ember.ArrayController.extend({
  content: [],
  
  backlog: function() {
     return this.get('content').filterProperty('milestone.title', 'backlog');
  }.property('content.[]'),

  currentsprint: function() {
     return this.get('content').filterProperty('milestone.number', 2);
  }.property('content.[]'),

  closedissues: function() {
  //	console.log(this.get('content'));
     return this.get('content');
  }.property('content.[]')



});

export default IndexController;
