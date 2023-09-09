import { kv,createClient } from '@vercel/kv';


export const dbclient = async () => {

    // string
    await kv.set('key', 'value');
    let data = await kv.get('key');
    console.log(data); // 'value'
}
