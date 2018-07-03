//var remote = require('remote');


function openFile () {
  //var dialog = require('electron').dialog;

 dialog.showOpenDialog({ filters: [

   { name: 'text', extensions: ['csv'] }

  ]}, function (fileNames) {

  if (fileNames === undefined) return;

  var fileName = fileNames[0];

  fs.readFile(fileName, 'utf-8', function (err, data) {
  //  console.log(data);

    var csvData=[];
    fs.createReadStream(fileName)
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
      //  console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);
    })
    .on('end',function() {
      //do something wiht csvData
      //console.log(csvData);
      processData(csvData);



    });

    document.getElementById("editor").value = data;

  });

 });

}


function processData(csvData){

  table="<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>First</th><th scope='col'>Last</th><th scope='col'>Handle</th></tr></thead><tbody>";

  console.log(csvData);
  var i;
  for (i = 1; i < csvData.length; i++) {
    current=csvData[i];
    illnum=current[1];
    title=current[20];
    author=current[19];
    material=current[32];
    patron=current[85];
    userID=current[79];
    pickupLoc=current[93];

    row="<tr><td>"+title+"</td><td>"+author+"</td><td>"+illnum+"</td><td>"+material+"</td><td>"+patron+"</td><td>"+userID+"</td><td>"+pickupLoc+"</td><td>num items</td><td>item policy</td></tr>";

    table +=row;
    email=current[83];
    console.log(email);

    console.log(illnum);
    localStorage.currentData[illnum]=current;

  }

  table +="</tbody></table>";

  $(".jumbotron").html(table);

  console.log(table);

  //localStorage.currentData=csvData;



  console.log(localStorage);
}
/*
fs.readFile('file.csv', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
