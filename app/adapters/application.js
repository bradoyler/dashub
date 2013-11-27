//var FixtureAdapter = DS.FixtureAdapter.extend();

var token = $.cookie('authtoken') || '';  

var ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'repos/bradoyler/dashub',
    host: 'https://api.github.com',
    headers: { 
     'Accept': 'application/vnd.github.raw+json',
     'Authorization': 'Basic '+ token,
     'Content-Type': 'application/json;charset=UTF-8'
    }
});

export default ApplicationAdapter;
