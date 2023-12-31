"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Session } from "next-auth";



async function updateDB (data: Session) {
  let res = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({data}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { result } = await res.json();
  return result;
}


export const ProfileInfo = () => {
    const { data: session } = useSession();
    
    const profileimage = session?.user?.image as string;
    
    if (session) {
        
        updateDB(session);

        return (
          <>
            <div className="w-1/4 text-center font-bold">
                        <div className="w-1/2">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={profileimage} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            
                            </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem><Link href="/dashboard" className="items-left flex space-x-2">Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem><button onClick={() => signOut({ callbackUrl: "/" })}>Logg ut</button></DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                        </div>
                    </div>
          </>
        );
      }
      return (
        <>
          <button
            onClick={() => {
              signIn(undefined, {callbackUrl: "/dashboard"});
            }}
          >
            Logg inn
          </button>
        </>
      );
}