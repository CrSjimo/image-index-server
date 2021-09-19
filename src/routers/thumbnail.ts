import { server } from '../init';
import { generateThumbnail } from '../utils/generateThumbnail';


server.route({
    method: 'GET',
    path: '/image@{width}/{file}',
    handler: async(request,h)=>{
        return h.file(await generateThumbnail(request.params.file,request.params.width));
    }
});