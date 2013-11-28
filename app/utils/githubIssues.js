import ajax from 'appkit/utils/ajax';

// no longer used, but serves as example if not using ember-data
var promises = {};
var githubIssues = {
  find: function (reponame, params) {

    return ajax('https://api.github.com/repos/' + reponame +'/issues', {
      data:params,
      type: 'get',
      dataType: 'json',
      beforeSend: function(xhr) {
          var token = $.cookie('authtoken') || '';        
          xhr.setRequestHeader("Authorization", "Basic " + token);
          xhr.setRequestHeader('Accept', 'application/vnd.github.raw+json');
          xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      }
    });
  }
};

export default githubIssues;