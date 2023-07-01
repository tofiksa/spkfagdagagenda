import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import Terje from "../images/TerjeHeen.jpg";
import Stine from "../images/Stine.jpg";
import Morten from "../images/MortenSlaattenBerg.png";
import Michael from "../images/Michael.jpg"
import Audun from "../images/audun.jpg"
import Dagfin from "../images/dagfinb.jpg"
import Eirik from "../images/eirik.jpg"
import Alejandro from "../images/alejandro.jpg"

export default function IndexPage() {

  return (
  <Table className="table-auto">
  <TableHeader>
    <TableRow>
      <TableHead className="px-4 py-2">Klokke</TableHead>
      <TableHead className="px-4 py-2">Taler</TableHead>
      <TableHead colSpan={3} className="px-4 py-2 text-right">Rom</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="bg-muted px-4 py-2 font-medium ">08:30 - 09:00</TableCell>
      <TableCell colSpan={4} className="bg-muted px-4 py-2 text-center font-extrabold">Kaffe og frukt</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">09:00 - 09:15</TableCell>
      <TableCell colSpan={3} className="px-4 py-2 text-center">Arne og Stine - Velkommen til fagdag i exposalen</TableCell>
      <TableCell className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">09:15 - 10:00</TableCell>
      <TableCell className="px-4 py-2 text-left">
        <Image 
        alt="bilde av Heen" 
        src={Terje}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Terje Heen</figcaption>
      </TableCell>
      <TableCell className="px-4 py-2 text-left">Endringsdyktige kode</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">10:00 - 11:00</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Stine" 
        src={Stine}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Stine Midtlund Holmen</figcaption></TableCell>
      <TableCell className="px-4 py-2">Hva skal til for å bli et høyt presterende team?</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">10:00 - 11:00</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Morten" 
        src={Morten}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Morten Slaatten Berg</figcaption></TableCell>
      <TableCell className="px-4 py-2">API First</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
   <TableBody>
    <TableRow>
      <TableCell className="bg-muted px-4 py-2 font-medium">11:00 - 12:00</TableCell>
      <TableCell colSpan={4} className="bg-muted px-4 py-2 text-center font-extrabold">Lunsj</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">12:00 - 12:45</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Michael" 
        src={Michael}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Michael Schillingen</figcaption></TableCell>      
      <TableCell className="px-4 py-2" colSpan={2}>Product mindset at Oda</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">12:00 - 12:45</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Audun" 
        src={Audun}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />

      <figcaption className="mt-2 text-left text-sm">Audun Hvenekilde</figcaption></TableCell>      
      <TableCell className="px-4 py-2" colSpan={2}>Testdrevet utvikling </TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">13:00 - 13:45</TableCell>
      <TableCell className="px-4 py-2">

      <Image 
        alt="bilde av Dagfinn" 
        src={Dagfin}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Dagfinn Bergsager</figcaption></TableCell>
      <TableCell className="px-4 py-2" colSpan={2}>Innebygd personvern</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>      
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">14:00 - 14:15</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Alejandro" 
        src={Alejandro}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Alejandro Ortega</figcaption></TableCell>      
      <TableCell className="px-4 py-2" colSpan={2}>Designsystemkultur</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="px-4 py-2 font-medium">14:15 - 15:00</TableCell>
      <TableCell className="px-4 py-2">
      <Image 
        alt="bilde av Eirik" 
        src={Eirik}
        className="h-auto w-auto max-w-xs rounded-full" 
        quality={100}
        placeholder="blur"
        objectFit="contain"
        layout="responsive"
        />
      <figcaption className="mt-2 text-left text-sm">Eirik Eide</figcaption></TableCell>      
      <TableCell className="px-4 py-2" colSpan={2}>IT Arkeologi</TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="bg-muted px-4 py-2 font-medium">15:15 - 16:30</TableCell>
      <TableCell colSpan={1} className="bg-muted px-4 py-2 text-center font-extrabold">Gruppeaktivitet i expoområdet</TableCell>
      <TableCell colSpan={1} className="bg-muted px-4 py-2 text-left">
      Stop motion-animasjon er en filmteknikk som involverer å skape bevegelse ved å flytte og fotografere fysiske objekter i små trinn. Det er en form for animasjon der bilder tas i raske sekvenser, og hver gang et bilde blir tatt, flyttes objektene eller figurene forsiktig for å gi illusjonen av bevegelse når bildene vises i rask rekkefølge.
Metoden involverer vanligvis å bruke figurer, leker, dukker eller andre fysiske objekter som er formet for hånd, og deretter flytte dem bittelitt etter hver bildeopptak for å skape en jevn animasjon. Dette gjentas gjentatte ganger, og bildene blir deretter satt sammen til en sekvens som gir liv til objektene på skjermen.
<br /><br />
Stop motion-animasjon kan være tidkrevende, da det tar tid å flytte objektene i små trinn og ta bilder av hver bevegelse. Det krever tålmodighet og nøyaktighet for å oppnå ønsket effekt. Likevel har det en unik sjarm og estetikk, og det brukes i ulike typer filmer, inkludert kortfilmer, reklame, musikkvideoer og til og med i spillefilmer.
Denne teknikken gir filmskapere muligheten til å skape magiske verdener og fascinerende historier ved hjelp av en kombinasjon av håndverk, kreativitet og teknologi.
<br /><br />
Link til opplasting: <a href="https://driveuploader.com/upload/NExNBngHmW/">Driveuploader</a>
<br /><br />
<img width={100} height={100} className="h-auto max-w-xs" src="qrcode.png"></img>
      </TableCell>
      <TableCell colSpan={2} className="px-4 py-2 text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  </Table>
      
  )
}
