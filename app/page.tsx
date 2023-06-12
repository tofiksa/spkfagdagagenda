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
  <TableHeader>
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
      <TableCell className="text-left">Refaktorering av kode</TableCell>
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
      <figcaption className="mt-2 text-sm text-left">Morten SlaattenBerg</figcaption></TableCell>
      <TableCell>API First</TableCell>
      <TableCell colSpan={2} className="text-right font-bold">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
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
      <TableCell colSpan={4} className="text-center bg-muted font-extrabold">Gruppeaktivitet i expoområdet</TableCell>
    </TableRow>
  </TableBody>
</Table>
      
  )
}
