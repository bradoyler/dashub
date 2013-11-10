
var IndexController = Ember.ArrayController.extend({
  content: [],
  
  backlog: function() {
     return this.get('content').filterProperty('milestone.title', 'backlog');
  }.property('content.[]'),

  currentsprint: function() {
     return this.get('content').filterProperty('milestone.number', 2);
  }.property('content.[]'),

  closed: function() {
     return this.content;
  }.property('content.[]')



});

export default IndexController;
