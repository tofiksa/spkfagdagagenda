import { kv } from '@vercel/kv';
import { NextResponse } from "next/server";
 
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  let userid = "" as string | null;
  userid = id;
  
  const kvdata = await kv.hgetall(userid!);
  
  return NextResponse.json({ result: kvdata })
}
