import {
    CircleIcon,
    StarIcon,
  } from "@radix-ui/react-icons"
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"

  interface DetailsItem {
    navn: string;
    rom: string;
    tema: string;
  }
  
  interface DetailsData {
    details: DetailsItem[];
  }
  
  export function DemoGithub({ details }: DetailsData) {
    
    const data: DetailsData = {
      details: details.details.details
    };
    console.log(data);
    return (
      <>
      {data.details.map((detail, index) => (

        <Card key={index}>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{detail.navn}</CardTitle>
            <CardDescription>
              {detail.tema}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <StarIcon className="mr-2 h-4 w-4" />
              Star
            </Button>
            <Separator orientation="vertical" className="h-[20px]" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              20k
            </div>
            <div>Updated April 2023</div>
          </div>
        </CardContent>
        </Card>
            
      ))}
      
      </>
    )
  }