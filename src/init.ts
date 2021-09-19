import * as hapi from '@hapi/hapi';
import * as inert from '@hapi/inert';
import * as config from './config.json';

export const server = hapi.server({
    port: config.port,
    host: 'localhost',
});
async function main(){
    await server.register(inert);
    await server.start();
}
main();