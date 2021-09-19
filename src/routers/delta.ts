import { server } from '../init';
import { path as rootDir } from '../config.json';
import { readdirSync } from 'fs';

server.route({
    method: 'POST',
    path: '/delta',
    handler: (request,h)=>{
        let list: string[] = [];
        if(request.payload && (request.payload as any).list instanceof Array){
            list = (request.payload as any).list;
        }
        return {
            files: readdirSync(rootDir).filter(v=>/^.*\.JPG$/.test(v) && (!list.includes(v))),
        }
    }
});