import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver.default
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        payload.forEach(function(element, key){
            element.id = element[type.idField];
        });
        var newPayload = {};
        newPayload[Ember.String.pluralize(type.typeKey)] = payload;
        return this._super(store, type, newPayload, id, requestType);
    }
});

Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more imporant
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});


export default App;
