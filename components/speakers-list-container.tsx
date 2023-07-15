import Image from "next/image";
import Terje from "../images/TerjeHeen.jpg";
import Stine from "../images/Stine.jpg";
import Morten from "../images/MortenSlaattenBerg.png";
import Michael from "../images/Michael.jpg"
import Audun from "../images/audun.jpg"
import Dagfin from "../images/dagfinb.jpg"
import Eirik from "../images/eirik.jpg"
import Alejandro from "../images/alejandro.jpg"

export function SpeakersListContainer() {

    return (<>
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
            <div className="mt-2 flex items-center bg-muted py-5">
                <div className="w-2/4 font-medium">
                08:30 - 09:00
                </div>
                <div className="w-3/4 text-left font-extrabold">
                Kaffe og frukt
                </div>
            </div>
            <div className="mt-2 flex items-center py-5">
                <div className="w-2/4 font-medium">
                09:00 - 09:15
                </div>
                <div className="w-3/4 text-center font-bold">
                Arne og Stine - Velkommen til fagdag i exposalen
                </div>
                <div className="w-1/4 text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                09:15 - 10:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
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
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                10:00 - 11:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
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
                <div className="w-1/4  text-right font-medium">
                Expoområdet
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                10:00 - 11:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Morten" 
                            src={Morten}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Morten Slaatten Berg</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                API First
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-center bg-muted py-5">
                <div className="w-2/4 font-medium">
                11:00 - 12:00
                </div>
                <div className="w-3/4 text-left font-extrabold">
                Lunsj
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                12:00 - 12:45
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Michael" 
                            src={Michael}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Michael Schillingen</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Product mindset at Oda
                </div>
                <div className="w-1/4  text-right font-medium">
                Expoområdet
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                12:00 - 12:45
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Audun" 
                            src={Audun}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Audun Hvenekilde</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Testdrevet utvikling
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                13:00 - 13:45
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Dagfinn" 
                            src={Dagfin}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Dagfinn Bergsager</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Innebygd personvern
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                14:00 - 14:15
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Alejandro" 
                            src={Alejandro}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Alejandro Ortega</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                Designsystemkultur
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="mr-2 font-medium">
                14:15 - 15:00
                </div>
                <div className="w-1/4 text-center font-bold">
                    <div className="w-1/2">
                        <Image 
                            alt="bilde av Eirik" 
                            src={Eirik}
                            className="h-auto w-auto rounded-full" 
                            quality={100}
                            placeholder="blur"
                            objectFit="contain"
                            layout="responsive"
                            />
                        <figcaption className="mt-2 text-center text-xs">Eirik Eide</figcaption>
                    </div>
                </div>
                <div className="w-2/4  text-center font-medium">
                IT Arkeologi
                </div>
                <div className="w-1/4  text-right font-medium">
                Exposal
                </div>
            </div>
            </>
    )
}