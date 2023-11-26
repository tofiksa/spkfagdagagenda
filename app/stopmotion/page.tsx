import { kv } from '@vercel/kv';

export default async function IndexPage() {

  const user: Record<string, string> | null = await kv.hgetall('Tofik Sahraoui');

  for await (const key of kv.scanIterator()) {
    //console.log("keytothekingdom ", key);
  }

  //const name = user?.data.user.name;
  //const email = user?.data.user.email;

  return ( <div>
    
  </div>);
}
