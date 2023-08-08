import { Separator } from "@/components/ui/seperator"
import { ProfileForm } from "./profile-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Legg til foredragsholder</h3>
        <p className="text-sm text-muted-foreground">
          Her legger du til foredragsholdere, tidspunkter, beskrivelser for tema og rom
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}