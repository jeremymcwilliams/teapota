$(function() {
   function setupHeader() {
     // populate the hours in the header using GCal info
     $.getJSON('https://watzek.lclark.edu/boleyweb/getBuildingHours.php', function(response) {
       var today = new Date().toDateString();
       $('.hours-col-loc').text(today);
       $('.hours-col-time').text(response.items[0].summary);
     });
     // Reference hours
     $.getJSON('https://watzek.lclark.edu/boleyweb/getReferenceHours.php', function(response) {
       var hours = response.items.map(function(item) { return item.summary })
       $('.ref-hours').text(hours.join(', '));
     })
   }
 )};
