'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form"
import { Input } from "@/registry/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Session } from "next-auth";
import { useSession} from "next-auth/react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore"


const profileFormSchema = z.object({
  navn: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  rom: z
    .string()
    .min(2, {
      message: "romnavn må være minst 2 characters.",
    })
    .max(30, {
      message: "romnavn kan ikke være større enn 30 characters.",
    }),
  tema: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  navn: '',
  tema: '',
  rom: '',
  urls: [
    { value: '' },
    { value: '' },
  ],
}

export function ProfileForm() {
  const { data: session } = useSession();
  const { toast } = useToast()
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    
    
    //const username = await session?.user?.email as string;
    //const payload = { [username]: [data as ProfileFormValues]}
    /* updateDB(payload).then( (value: any) => {
      console.log(value);
    }) */

    //{JSON.stringify(data, null, 2)}
    toast({
      title: "Følgende ble registrert:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            Navn: {data.navn}
            Tema: {data.tema}
            Rom: {data.rom}
          </code>
        </pre>
      ),
    })
    
    transferToFirebase(data).then( (value: any) => {
      console.log(value);
    })
  }

  async function transferToFirebase (data: ProfileFormValues) {
    await addDoc(collection(db, 'taler'), {
        data
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="navn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn</FormLabel>
              <FormControl>
                <Input placeholder="Foredragsholder fulle navn" {...field} />
              </FormControl>
              <FormDescription>
                Fult navn på foredragsholder
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rom</FormLabel>
              <FormControl>
                <Input placeholder="romnavn" {...field} />
              </FormControl>
              <FormDescription>
                Rommet der foredragsholder skal være
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tema"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foredragstema</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="tema for foredrag"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Kort beskrivelse av tema det skal snakkes om
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Legg til lenker til blogg, sosiale medier etc.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Legg til
          </Button>
        </div>
        <Button type="submit">Oppdater</Button>
      </form>
    </Form>
  )
}
