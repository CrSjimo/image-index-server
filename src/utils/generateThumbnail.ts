import { default as gm } from 'gm';
import * as config from '../config.json';
import * as path from 'path';
import * as fs from 'fs';

export function generateThumbnail(file: string, width: number):Promise<string>{
    let readPath = path.join(config.path,file);
    let writePath = path.join(config.path,'.thumbnails',`${file}@${width}.JPG`);
    return new Promise((resolve,reject)=>{
        gm(readPath).size((err,val)=>{
            if(err){
                reject(err);
                return;
            }
            if(val.width<=width){
                resolve(readPath);
                return;
            }
            if(fs.existsSync(writePath)){
                resolve(writePath);
                return;
            }
            gm(readPath).resize(width).write(writePath,(err)=>{
                if(err)reject(err);
                resolve(writePath);
            });
        })
    });
}