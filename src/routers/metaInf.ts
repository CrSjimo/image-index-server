import { server } from '../init';
import { path as rootDir } from '../config.json';
import * as path from 'path';
import yaml from 'yaml';
import { getDate } from '../utils/getModifiedDate';
import { readFileSync } from 'fs';

server.route({
    method: 'GET',
    path: '/meta-inf/{file}',
    handler: async(request,h)=>{
        return {
            date: await getDate(path.join(rootDir,request.params.file)),
            description: yaml.parse(readFileSync(path.join(rootDir,request.params.file+'.yml')).toString()),
        }
    }
});