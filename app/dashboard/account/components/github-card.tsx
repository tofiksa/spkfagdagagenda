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
    
      <div className="grid md:grid-cols-3">
      {data.details.map((detail, index) => (
        <Card key={index}>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div>
            <CardTitle>{detail.navn}</CardTitle>
            <CardDescription>
              {detail.tema}
            </CardDescription>
            <ul>
              {detail.urls.map((url, index) => (
                <li key={index}>{url.value}</li>
              ))}
              </ul>
          </div>
        </CardHeader>
        </Card>
      ))}
      </div>
    
    )
  }