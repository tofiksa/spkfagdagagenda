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
  urls: Url[];
}

interface Url {
  value: string;
}

interface DetailsData {
  details: DetailsItem[];
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
  const [details, setDetails] = useState<DetailsItem[] | null>(null);
  
  useEffect(() => {
    
  }, [session]);

  const ColComponent = () => {
    
    return details !== null ? (
      <>  
          <DemoGithub details={details} />
      </> 
    ) : (
      <> <p>Empty :(</p></>
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