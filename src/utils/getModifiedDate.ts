import { ExifImage } from "exif";

export function getDate(file: string): Promise<string|undefined>{
    return new Promise((resolve,reject)=>{
        try {
            new ExifImage({ image: file }, function (error, exifData) {
                if (error)
                    reject(error);
                else{
                    resolve(exifData.image.ModifyDate?.replace(':','.').replace(':','.'));
                }
            });
        } catch (error) {
            reject(error);
        }
    })
}