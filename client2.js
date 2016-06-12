var deepstream = require( 'deepstream.io-client-js' ),
    ds = deepstream( 'localhost:6021' ).login();

    //other clients can now call this function using
    ds.rpc.make( 'testfn1', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn1. Response ', response);
    });

    //other clients can now call this function using
    ds.rpc.make( 'testfn2', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn2. Response ', response);
    });

    //other clients can now call this function using
    ds.rpc.make( 'testfn3', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn3. Response ', response);
    });

    //other clients can now call this function using
    ds.rpc.make( 'testfn2', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn2. Response ', response);
    });

    //other clients can now call this function using
    ds.rpc.make( 'testfn1', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn1. Response ', response);
    });

    //other clients can now call this function using
    ds.rpc.make( 'testfn3', { name: 'Any Name' }, function( error, response ){
        //response is 11 now
        if (error)
          console.error(error);
        console.log('Processed testfn3. Response ', response);
    });
