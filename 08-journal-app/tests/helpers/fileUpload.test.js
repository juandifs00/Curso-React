import { v2 as cloudinary } from 'cloudinary';
import { fetch } from "whatwg-fetch";
import fileUpload from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dojcdl2nt',
    api_key: '533165946873297',
    api_secret: 'kcNa05dGSvy_g7VkC9vmmcCJs9s',
    secure: true
});

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://images.ctfassets.net/bht415zek091/26BKxLxPt1NsYSlbxs3AQD/796666e070d1c1258923295d31e8c47e/matt.ritchie_DSC00865-web.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg', { type: blob.type });

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        await cloudinary.api.delete_resources([imageId], { resource_type: 'image' });

    });

    test('Debe de retornar null', async () => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect(url).toBe(null);
    })

})