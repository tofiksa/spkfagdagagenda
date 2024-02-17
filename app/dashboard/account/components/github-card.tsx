  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { IDetailsData } from "../../../../types/taler"

  
  
  export function DemoGithub({ details }: IDetailsData) {
    
    const data: IDetailsData = {
      details: details
    };
    
    return (
      <>
      {data.details.map((detail, index) => (
        <Card key={index}>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{detail.navn}</CardTitle>
            <CardDescription>
              {detail.tema}
              {detail.urls.map((url, index) => (
                <ol>{url.value}</ol>
              ))}
            </CardDescription>
          </div>
        </CardHeader>
        </Card>
      ))}
      </>
    )
  }