'use client'

import { Separator } from "@/components/ui/seperator"
import { useSession} from "next-auth/react";
import { DemoGithub } from "./components/github-card"

import { useEffect, useState } from "react";
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

  const data: DetailsData = {
    details: result
  };
  
  return data;
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
        const data: DetailsData = await getFromDB(session.user.email);
        setDetails(data);
      }
    }

    fetchData();
  }, [session]);

  const ColComponent = () => {
    
    return details ? (
      <>  
          <DemoGithub details={details} />
      </> 
    ) : (
      <></>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Foredragene</h3>
        <p className="text-sm text-muted-foreground">
          Her vises foredragene etter opprettelse
        </p>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <ColComponent />    
          </DemoContainer>
        </div>
      </div>
      <Separator />
    </div>
  )
}