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
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Klokke</TableHead>
      <TableHead>Navn</TableHead>
      <TableHead colSpan={2} className="text-right">Rom</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium bg-muted">08:30</TableCell>
      <TableCell colSpan={3} className="text-center bg-muted">Kaffe og frukt</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">09:00</TableCell>
      <TableCell colSpan={3} className="text-center">Arne og Stine - Velkommen til fagdag i exposalen</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">09:15 - 10:00</TableCell>
      <TableCell colSpan={2} className="text-center"><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://event.dnd.no/dnd/wp-content/uploads/sites/78/2020/10/SW-foredragsholdere-3.jpg"></img></TableCell>
      <TableCell colSpan={2} className="text-center">Terje Heen, Refaktorering av kode - exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://media.licdn.com/dms/image/C5603AQEESDVfT5tcyg/profile-displayphoto-shrink_800_800/0/1552135783900?e=2147483647&v=beta&t=WnXBm0flXOj6ZM8VPZDnUM4YgjJzxizROzdTx3VOAxA"></img></TableCell>
      <TableCell>Hva skal til for å bli et høyt presterende team?</TableCell>
      <TableCell colSpan={2} className="text-right">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://pbs.twimg.com/profile_images/1488611250/iterate-square-350x349_400x400.png"></img></TableCell>
      <TableCell>Morten SlaattenBerg - API First</TableCell>
      <TableCell colSpan={2} className="text-right">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium bg-muted">11:00 - 12:00</TableCell>
      <TableCell colSpan={3} className="text-center bg-muted">Lunsj</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="https://media.licdn.com/dms/image/C4D03AQF97zk2yM9Q1A/profile-displayphoto-shrink_800_800/0/1637663516596?e=2147483647&v=beta&t=ZbPRAYCz335MEcSFblA-28tUpkPPJA27glMavTUtUdQ"></img></TableCell>      
      <TableCell colSpan={2}>Product mindset at Oda - Michael Schillingen</TableCell>
      <TableCell colSpan={2} className="text-right">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="audun.jpg"></img></TableCell>      
      <TableCell colSpan={2}>Testdrevet utvikling - Audun Hvenekilde</TableCell>
      <TableCell colSpan={2} className="text-right">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">13:00 - 13:45</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="dagfinb.jpg"></img></TableCell>      
      <TableCell colSpan={3} className="text-center">Innebygd personvern - Dagfinn Bergsager (exposal)</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">14:00 - 14:15</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="alejandro.jpg"></img></TableCell>      
      <TableCell colSpan={3} className="text-center">Designsystemkultur - Alejandro Ortega(exposal)</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">14:15 - 15:00</TableCell>
      <TableCell><img width={100} height={100} className="h-auto max-w-xs rounded-full" src="eirik.jpg"></img></TableCell>      
      <TableCell colSpan={3} className="text-center">IT Arkeologi - Eirik Eide (exposal)</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">15:15 - 16:30</TableCell>
      <TableCell colSpan={3} className="text-center">Stop motion + avslutning</TableCell>
    </TableRow>
  </TableBody>
</Table>
      
    </section>
  )
}
