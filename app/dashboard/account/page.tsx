'use client'

import { Separator } from "@/components/ui/seperator"
import { AccountForm } from "./account-form"
import { useSession} from "next-auth/react";
import { DemoGithub } from "./components/github-card"

import { kv } from '@vercel/kv';
import { getServerSession } from 'next-auth/next'
import { options } from '../../api/auth/[...nextauth]/options'
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { cn } from "@/lib/utils";


interface DetailsItem {
  navn: string;
  rom: string;
  tema: string;
}

interface DetailsData {
  details: DetailsItem[];
}

async function getFromDB (id: string) {
  let res = await fetch(`/api/conferance/get/?id=${id}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { result } = await res.json();
  return result;
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function SettingsAccountPage(){

  const { data: session } = useSession();
  const [details, setDetails] = useState<DetailsData | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (session && session.user && session.user.email) {
        const data = await getFromDB(session.user.email);
        setDetails(data);
      }
    }

    fetchData();
  }, [session]);

  const ColComponent = () => {
    console.log("details ", details)
    
    return details ? (
      <>
          <table>
            <th>Navn</th><th>Rom</th><th>Tema</th><th>Urls</th>
            {details.details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.navn}</td>
                <td>{detail.rom}</td>
                <td>{detail.tema}</td>
                <td>{detail.rom}</td>
              </tr>
            ))}
          </table>
          </>
  
    ) : (
      <></>
    )
  }

  //console.log(session?.user?.email);

  /* const details = await GetDataFromStore().then((session: Record<string,string> | null) => {
    return session?.details;
  }) */

  //console.log(details);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Foredragene</h3>
        <p className="text-sm text-muted-foreground">
          Her vises foredragene etter opprettelse
        </p>
        <ColComponent />
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
        </div>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}


/* export const getServerSideProps: GetServerSideProps<UserProps> = async (context) => {
  const params = await getServerSession(options);
  const username = await params?.user?.email as string;
  const userDetails = await kv.hgetall(username);


  // Cast the returned data to the expected structure or null
  const userDetailsTyped = userDetails as { 
    navn: string;
    rom: string;
    tema: string;
    urls: string;
  };

  // Return the details as props
  const props: GetServerSidePropsResult<UserProps> = {
    props: {
      details: userDetailsTyped,
    },
  };

  return props;
} */