//import moment from 'moment';

var formatDate = Ember.Handlebars.makeBoundHelper(function(datevalue) {
     
    return window.moment(datevalue).fromNow();
});

export default formatDate;