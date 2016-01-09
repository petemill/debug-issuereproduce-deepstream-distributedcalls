var deepstream = require( 'deepstream.io-client-js' ),
singleConnection = deepstream('localhost:6021').login();

var poolModule = require('generic-pool');
var pool = poolModule.Pool({
    name     : 'deepstream',
    create   : function(callback) {
        var c = deepstream( 'localhost:6021' ).login();
        // parameter order: err, resource
        // new in 1.0.6
        callback(null, c);
    },
    destroy  : function(client) { client.close(); },
    max      : 30,
    // optional. if you set this, make sure to drain() (see step 3)
    min      : 0,
    // specifies how long a resource can stay idle in pool before being removed
    idleTimeoutMillis : 30000,
     // if true, logs via console.log - can also be a function
    log : false
});

var lastRoundStart;
var operationsThisRound;
function MeasureOperationsInRound() {
  lastRoundStart = process.hrtime();
  operationsThisRound = 0;
  setTimeout(function(){
    var opsLastRound = operationsThisRound;
    var elapsed = process.hrtime(lastRoundStart);
    MeasureOperationsInRound();
    console.log('BENCHMARK----------- ' + opsLastRound + ' ops in ' + (elapsed[0] * 1000 + elapsed[1]/1000000) + "ms");
  }, 1000);
}
MeasureOperationsInRound();

function MakeRepeatedCall(fnName) {
  //setTimeout(function(){
    //other clients can now call this function using
    //var start = process.hrtime();
//    pool.acquire(function(err, dsConnection){

      //pool.release(dsConnection);

      singleConnection.rpc.make( fnName, { name: 'Any Name' }, function( error, response ){
        operationsThisRound++;
        //var elapsed = process.hrtime(start);
        //console.log(fnName + " " +(elapsed[0] * 1000 + elapsed[1]/1000000) + "ms");
          //response is 11 now
          if (error)
            console.error(error);
        //  console.log('Processed ' + fnName + '. Response ', response);
          //repeat
          MakeRepeatedCall(fnName);
      });
//    });
  //}, 1);
}
var fnAll = 'testfn5';
var parallelCalls = 30;
for (var i = 0; i < parallelCalls; i++) {
  MakeRepeatedCall(fnAll);
}
