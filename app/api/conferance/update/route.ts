import { kv } from '@vercel/kv';
import { NextResponse } from "next/server";
 
export async function POST(req: Request) {
  
  const { data } = await req.json();
  let userid = "" as string;

  for (const email in data) {
    const details = data[email];
    userid = email;
    await kv.hset(email, {details});
  }

  const kvdata = await kv.hgetall(userid);
  return NextResponse.json({ result: kvdata });
}

//const user: Record<string, string> | null = await kv.hgetall('user:me');
  
  /* return ( <div>
      {user?.id} - {user?.email}
    </div>); */