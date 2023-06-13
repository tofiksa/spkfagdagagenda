import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function IndexPage() {

  return (
    
      
  <Table>
  {/* <TableHeader>
    <TableRow>
      <TableHead>Klokke</TableHead>
      <TableHead>Taler</TableHead>
      <TableHead colSpan={3} className="text-right">Rom</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium bg-muted">08:30 - 09:00</TableCell>
      <TableCell colSpan={4} className="text-center bg-muted font-extrabold">Kaffe og frukt</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">09:00 - 09:15</TableCell>
      <TableCell colSpan={3} className="text-center">Arne og Stine - Velkommen til fagdag i exposalen</TableCell>
      <TableCell className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">09:15 - 10:00</TableCell>
      <TableCell className="text-left"><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://event.dnd.no/dnd/wp-content/uploads/sites/78/2020/10/SW-foredragsholdere-3.jpg"></img>
      <figcaption className="mt-2 text-sm text-left">Terje Heen</figcaption>
      </TableCell>
      <TableCell className="text-left">Endringsdyktige kode</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://media.licdn.com/dms/image/C5603AQEESDVfT5tcyg/profile-displayphoto-shrink_800_800/0/1552135783900?e=2147483647&v=beta&t=WnXBm0flXOj6ZM8VPZDnUM4YgjJzxizROzdTx3VOAxA"></img>
      <figcaption className="mt-2 text-sm text-left">Stine Midtlund Holmen</figcaption></TableCell>
      <TableCell>Hva skal til for å bli et høyt presterende team?</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://pbs.twimg.com/profile_images/1488611250/iterate-square-350x349_400x400.png"></img>
      <figcaption className="mt-2 text-sm text-left">Morten Slaatten Berg</figcaption></TableCell>
      <TableCell>API First</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
 */}  <TableBody>
    <TableRow>
      <TableCell className="font-medium bg-muted">11:00 - 12:00</TableCell>
      <TableCell colSpan={4} className="text-center bg-muted font-extrabold">Lunsj</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://media.licdn.com/dms/image/C4D03AQF97zk2yM9Q1A/profile-displayphoto-shrink_800_800/0/1637663516596?e=2147483647&v=beta&t=ZbPRAYCz335MEcSFblA-28tUpkPPJA27glMavTUtUdQ"></img>
      <figcaption className="mt-2 text-sm text-left">Michael Schillingen</figcaption></TableCell>      
      <TableCell colSpan={2}>Product mindset at Oda</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="audun.jpg"></img>
      <figcaption className="mt-2 text-sm text-left">Audun Hvenekilde</figcaption></TableCell>      
      <TableCell colSpan={2}>Testdrevet utvikling </TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">13:00 - 13:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="dagfinb.jpg"></img>
      <figcaption className="mt-2 text-sm text-left">Dagfinn Bergsager</figcaption></TableCell>
      <TableCell colSpan={2}>Innebygd personvern</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>      
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">14:00 - 14:15</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="alejandro.jpg"></img>
      <figcaption className="mt-2 text-sm text-left">Alejandro Ortega</figcaption></TableCell>      
      <TableCell colSpan={2}>Designsystemkultur</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">14:15 - 15:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="eirik.jpg"></img>
      <figcaption className="mt-2 text-sm text-left">Eirik Eide</figcaption></TableCell>      
      <TableCell colSpan={2}>IT Arkeologi</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium bg-muted">15:15 - 16:30</TableCell>
      <TableCell colSpan={1} className="text-center bg-muted font-extrabold">Gruppeaktivitet i expoområdet</TableCell>
      <TableCell colSpan={1} className="text-left bg-muted">
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
      <TableCell colSpan={2} className="text-right font-bold">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  </Table>
      
  )
}
