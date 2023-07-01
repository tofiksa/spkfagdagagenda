import Image from "next/image";
import Terje from "../images/TerjeHeen.jpg";
import Stine from "../images/Stine.jpg";

export function SpeakersListContainer() {

    return (
        <div className="container">
            <div className="flex items-baseline justify-between p-2">
                <div className="font-medium text-muted-foreground">
                    Klokke
                </div>
                <div className="w-2/4 font-medium text-muted-foreground">
                    Taler
                </div>
                <div className="w-1/4 text-right font-medium text-muted-foreground">
                    Rom
                </div>
            </div>
            <div className="mt-2 flex items-baseline bg-muted">
                <div className="w-1/4 font-medium">
                08:30 - 09:00
                </div>
                <div className="w-3/4 text-left font-extrabold">
                Kaffe og frukt
                </div>
            </div>
            <div className="mt-2 flex items-baseline">
                <div className="w-1/4 font-medium">
                09:00 - 09:15
                </div>
                <div className="w-2/4 text-center font-bold">
                Arne og Stine - Velkommen til fagdag i exposalen
                </div>
                <div className="w-1/4 text-right font-bold">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-baseline">
                <div className="mr-2 font-medium">
                09:15 - 10:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-auto">
                        <Image 
                            alt="bilde av Heen" 
                            src={Terje}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Terje Heen</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Endringsdyktige kode
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-baseline">
                <div className="mr-2 font-medium">
                09:15 - 10:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-auto">
                        <Image 
                            alt="bilde av Stine" 
                            src={Stine}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Stine Midtlund Holmen</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Hva skal til for å bli et høyt presterende team?
                </div>
                <div className="w-1/4  text-right font-bold">
                Expoområdet
                </div>
            </div>
 
        </div>
    )
}