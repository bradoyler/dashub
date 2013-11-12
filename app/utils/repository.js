import ajax from 'appkit/utils/ajax';

var promises = {};
var Repository = {
  find: function (id) {
    var promise = promises[id];

    if (promise) {
      return promise;
    }

    promise = ajax('https://api.github.com/repos/' + id, {
      type: 'get',
      dataType: 'jsonp',
      beforeSend: function(xhr) {
       
          var username = '@gmail.com', password ='';
          var encoded =  window.base64.encode(username + ":" + password);
         // var encoded = $.cookie('gfsession') || '';          
          xhr.setRequestHeader("Authorization", "Basic " + encoded);
  
      }
    });

    promises[id] = promise;

    return promise;
  }
};

export default Repository;