const httpPort = 80;
const httpsPort = 443;
import koa from 'koa';
import serve from 'koa-static';
import { createServer } from 'http';
import { createServer as _createServer } from 'https';
import { readFileSync } from 'fs';
const app = new koa();
const cert = readFileSync( '/ssl/cert.crt' );
const key = readFileSync( '/ssl/private.key' );

app.use( serve( __dirname + '/build', {
    maxage: 365 * 24 * 60 * 60
} ) );

createServer( app.callback() ).listen( httpPort, () => console.log( `sever is listening on ${httpPort}` ) );
_createServer( { cert, key }, app.callback() ).listen( httpsPort, () => console.log( `sever is listening on ${httpsPort}` ) );