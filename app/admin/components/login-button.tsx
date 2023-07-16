"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export const LoginButton = () => {
  const { data: session } = useSession();
  console.log(session);
  const profileimage = session?.user?.image as string;
  if (session) {
    return (
      <>
        
        <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="profilbilde" 
                            src={profileimage}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            objectFit="contain"
                            layout="responsive"
                            width={150}
                            height={150}
                            />
                        <figcaption className="mt-2 text-center text-xs">{session?.user?.name} </figcaption>
                    </div>
                </div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => {
          console.log("logging in?");
          signIn();
        }}
      >
        Sign in
      </button>
    </>
  );
};