//import Issue from 'appkit/models/issue';
import getJSON from 'appkit/utils/get_json';

var IndexRoute = Ember.Route.extend({
  model: function() {
     var params ={};
     params.authtoken = this.get('authtoken');

     var issues = getJSON('https://api.github.com/repos/nbcnews/nbcnews.com/issues', params);
     // issues.closedissues = getJSON('https://api.github.com/repos/bradoyler/gitflow/issues?state=closed');
     // console.log('## issues', issues);
     return issues;
  }
});

export default IndexRoute;
