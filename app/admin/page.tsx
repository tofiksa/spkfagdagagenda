import { Metadata } from "next"
import AccessDenied from "@/components/access-denied"
import { Layout } from "lucide-react"
import { LoginButton } from "./components/login-button"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  
  return (
    
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Logg inn til admin
        </h1>
          <LoginButton/>
        </div>
        </div>
      </section>      
    
  )
}
