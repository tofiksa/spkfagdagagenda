import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ProfileInfo } from "./profile-info"
import { SessionProvider } from "next-auth/react"
import AuthProvider from "@/app/context/AuthProvider"

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            
          {/* <Link
                  key={1}
                  href={'/admin'}
                  className={"flex items-center text-sm font-medium text-muted-foreground"}>
                  Admin
          </Link> */}
          <AuthProvider>
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <ProfileInfo/>
            </div>
          </AuthProvider>
              
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
