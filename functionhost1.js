var deepstream = require( 'deepstream.io-client-js' ),
    ds = deepstream( 'localhost:6021' ).login();

//register as a provider for a rpc
ds.rpc.provide( 'testfn1', function( data, response ){

    console.log('Run testfn1 for ' + data.name);

    //you can now either send a response
    response.send( data.name + " processed" );

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
