//import Base64 from 'base65';

function getJSON(url, params) {
  var args = {
  beforeSend: function(xhr) {

           var username = 'bradoyler@gmail.com', password ='';
           var encoded =  window.base64.encode(username + ":" + password);
         // var encoded = $.cookie('gfsession') || '';
        
          xhr.setRequestHeader("Authorization", "Basic " + encoded);
          xhr.setRequestHeader('Accept','application/vnd.github.raw+json');
          xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
  },
  url: url,
  dataType:'json',
  // error: function(error) {
  //  console.log('errr');
  //  return []; 
  // }
 };

// console.log('args:: ', args);

return new Ember.RSVP.Promise(function(resolve, reject){
    $.ajax(args)
    .fail(function(xhr, status) { console.log('ajax fail');
      // xhr.then = null;
      // Ember.run(null, reject, xhr);
      return null;
    })
    .then(function(json, status, xhr) {
      console.log(json);
      if (json.error) {
        // avoid issue with successfully resolved xhr promise causing rejection to fail
        xhr.then = null;
        Ember.run(null, reject, xhr);
      } else {
        Ember.run(null, resolve, json);
      }
    }, function(xhr) {
      Ember.run(null, reject, xhr);
    });
  });
}

export default getJSON;