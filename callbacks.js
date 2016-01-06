/*
- Conflates the input with the output
- Doesnt wotk with control flow primitives
- Error handling
- and doing parallel operations
*/
var fs = require('fs');

//async
function readDataSync() {
  var startedAt = new Date().getTime();
  var data = fs.readFileSync('users.json', 'utf-8');
  var finishedAt = new Date().getTime();

  console.log('>> readDataSync >> Delta:', finishedAt - startedAt);

  return JSON.parse(data);
}

function callSync() {
  try {
    var data = readDataSync();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

//async
function readData(callback) {
  var startedAt = new Date().getTime();
  fs.readFile('users.json', 'utf-8', function(err, data) {
    if (err) {
      return callback(err);
    }
    var finishedAt = new Date().getTime();
    console.log('>> readData >> Delta:', finishedAt - startedAt);

    try {
      data = JSON.parse(data);
      callback(null, data);
    } catch (err) {
      callback(err)
    }
  });
}


function callAsync(){
  readData(function(err, data){
    if(err){
      return console.error('Error:', err);
    }
    console.log(data);
  });
}

callSync();
callAsync();
