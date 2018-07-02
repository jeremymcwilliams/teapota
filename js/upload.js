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

  console.log(csvData);
  var i;
  for (i = 1; i < csvData.length; i++) {
    current=csvData[i];
    illnum=current[1];
    email=current[83];
    console.log(email);

    console.log(illnum);
    localStorage.currentData[illnum]=current;

  }

  //localStorage.currentData=csvData;



  console.log(localStorage);
}
/*
fs.readFile('file.csv', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
