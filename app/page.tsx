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
      <div className="flex max-w-[980px] flex-col items-start gap-2">
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
      <TableCell className="font-medium">08:30</TableCell>
      <TableCell colSpan={3} className="text-center">Kaffe og frukt</TableCell>
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
      <TableCell colSpan={3} className="text-center">Terje Heen, Refaktorering av kode - exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell>Stine Midtlund</TableCell>
      <TableCell>Hva skal til for å bli et høyt presterende team?</TableCell>
      <TableCell colSpan={2} className="text-right">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10:00 - 11:00</TableCell>
      <TableCell>Morten Slaaten-Berg</TableCell>
      <TableCell>API First - Generer kode fra dokumentasjon!</TableCell>
      <TableCell colSpan={2} className="text-right">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">11:00 - 12:00</TableCell>
      <TableCell colSpan={3} className="text-center">Lunsj</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell colSpan={2}>Product mindset at Oda - Michael Schillingen</TableCell>
      <TableCell colSpan={2} className="text-right">Expoområdet</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">12:00 - 12:45</TableCell>
      <TableCell colSpan={2}>TDD - Audun</TableCell>
      <TableCell colSpan={2} className="text-right">Exposal</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">13:00 - 13:45</TableCell>
      <TableCell colSpan={3} className="text-center">Innebygd personvern - Dagfinn Bergsager (exposal)</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">14:00 - 15:00</TableCell>
      <TableCell colSpan={3} className="text-center">Design system v/Alejandro + Eirik Eide (exposal)</TableCell>
    </TableRow>
  </TableBody>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">15:15 - 16:30</TableCell>
      <TableCell colSpan={3} className="text-center">Stop motion + avslutning</TableCell>
    </TableRow>
  </TableBody>
</Table>
      </div>
    </section>
  )
}
