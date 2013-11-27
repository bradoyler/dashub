
var ApplicationSerializer = DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        payload.forEach(function(element, key){
            element.id = element[type.idField];
        });
        var newPayload = {};
        newPayload[Ember.String.pluralize(type.typeKey)] = payload;
        return this._super(store, type, newPayload, id, requestType);
    }
});

export default ApplicationSerializer;