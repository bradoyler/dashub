//var FixtureAdapter = DS.FixtureAdapter.extend();

var ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'repos/emberjs/ember.js',
    host: 'https://api.github.com'
});

export default ApplicationAdapter;
