/* check for existing item policies*/

storage.has('itemPolicies', function(error, hasKey) {
  if (error) throw error;

  if (hasKey) {
    console.log('there are item policies!');
  }
});








$("#sub").click(function(){

  console.log("sub");
});
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
