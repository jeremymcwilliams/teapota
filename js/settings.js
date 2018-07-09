/* check for existing item policies*/

storage.has('itemPolicies', function(error, hasKey) {
  if (error) throw error;

  if (hasKey) {
    console.log('there are item policies!');
    storage.get('itemPolicies', function(error, data){
      if (error) throw error;
      $("#ipArea").html(data);
      console.log(data);


    });


  }
});

storage.get('apikey', function(error, data) {
  if (error) throw error;
  $("#apikey").val(data.apikey);

  console.log(data);
});






$("#sub").click(function(){

  console.log("sub");

  var apikey=$("#apikey").val();
  console.log(apikey)
  setApiKey(apikey);


});


function setApiKey(apikey){
  storage.set('apikey',
    {"apikey": apikey}
  , function(error) {
    if (error) throw error;
  });




}


/*
storage.set('itemPolicies', {
  "policies": [{
    "itemPolicyCode": "178",
    "label": "Watzek ILL Long Loan",
    "publicDesc": "4 week loan - NO RENEWALS"
  },
  {
    "itemPolicyCode": "179",
    "label": "Watzek ILL Short Loan",
    "publicDesc": "6 day loan - NO RENEWALS"
  }]
}, function(error) {
  if (error) throw error;
});
*/
