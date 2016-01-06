var RedisCacheConnector = require( 'deepstream.io-cache-redis' ),
    RedisMessageConnector = require( 'deepstream.io-msg-redis' ),
    Deepstream = require( 'deepstream.io' );
var redisHostname = '192.168.99.100';
var redisPort = 49154;
var server = new Deepstream();
server.set( 'cache', new RedisCacheConnector({
    port: redisPort,
    host: redisHostname
}));
server.set( 'messageConnector', new RedisMessageConnector({
    port: redisPort,
    host: redisHostname
}));
//set different listening ports for second conductor
server.set( 'port', 6024 ); //default 6020
server.set( 'tcpHost', 'localhost' ); //default 0.0.0.0
server.set( 'tcpPort', 6023 ); //default 6021
server.start();
