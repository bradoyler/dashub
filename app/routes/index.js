//import Issue from 'appkit/models/issue';
import getJSON from 'appkit/utils/get_json';
import ajax from 'appkit/utils/ajax';

var IndexRoute = Ember.Route.extend({
  content:[],

   setupController: function(controller, model) {  

   	    //controller.set('model', model);

        var baseurl = 'https://api.github.com/repos/nbcnews/nbcnews.com/';
        var self = this;
        
        getJSON(baseurl+'issues')
        .then(function(data) {
        	self.controller.set('content', data);
        });

        getJSON(baseurl+'pulls?sort=updated&direction=desc')
        .then(function(data) {
        	self.controllerFor('pulls').set('content', data);
        });

        getJSON(baseurl+'issues?state=closed&sort=updated')
        .then(function(data) {
        	self.controllerFor('closedissues').set('content', data);
        });
  }

});

export default IndexRoute;
