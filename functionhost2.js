var deepstream = require( 'deepstream.io-client-js' ),
    ds = deepstream( 'localhost:6021' ).login();

    //register as a provider for a rpc
    ds.rpc.provide( 'testfn2', function( data, response ){

        console.log('Run testfn2 for ' + data.name);

        setTimeout(function(){
          console.log('testfn2 processing finished');
          response.send( data.name + " processed" );
        }, 3000);

        //reject the response so that it gets
        //re-routed to another provider
        //response.reject();

        //or send an error back
        //response.error( 'Something went wrong' );
    });

    //register as a provider for a rpc
    ds.rpc.provide( 'testfn3', function( data, response ){

        console.log('Run testfn3 for ' + data.name);

        //you can now either send a response
        response.send( data.name + " processed" );

        //reject the response so that it gets
        //re-routed to another provider
        //response.reject();

        //or send an error back
        //response.error( 'Something went wrong' );
    });
    //register as a provider for a rpc
    ds.rpc.provide( 'testfn4', function( data, response ){

        console.log('Run testfn3 for ' + data.name);

        //you can now either send a response
        response.send( data.name + " processed" );

        //reject the response so that it gets
        //re-routed to another provider
        //response.reject();

        //or send an error back
        //response.error( 'Something went wrong' );
    });
