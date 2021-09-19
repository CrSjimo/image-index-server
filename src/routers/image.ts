import { server } from '../init';
import { path as rootDir } from '../config.json';
import * as path from 'path';


server.route({
    method: 'GET',
    path: '/image/{file}',
    handler: (request,h)=>{
        return h.file(path.join(rootDir,request.params.file));
    }
});