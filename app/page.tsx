import { RegistrationForm } from "@/components/registration-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">M</span>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">Berkeley M.E.T.</h1>
            </div>
            <h2 className="mb-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Member information
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Help us celebrate your special day. Please share your name and birthdate with the M.E.T. community.
            </p>
          </div>

          <RegistrationForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at{" "}
              <a
                href="mailto:met@berkeley.edu"
                className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                met@berkeley.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
