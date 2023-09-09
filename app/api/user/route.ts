import { kv } from '@vercel/kv';
import { NextResponse } from "next/server";
 
export async function POST(req: Request, user: string) {
  
  const { data } = await req.json();
  const email = data.user.email;
  //console.log(data.user.email);
  await kv.hmset(user, { data });
  const kvdata = await kv.hgetall(email);
  return NextResponse.json({ result: kvdata });
}

//const user: Record<string, string> | null = await kv.hgetall('user:me');
  
  /* return ( <div>
      {user?.id} - {user?.email}
    </div>); */