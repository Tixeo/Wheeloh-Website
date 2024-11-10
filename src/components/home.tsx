import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/*<CarIcon className="h-6 w-6" />*/}
          <span className="sr-only">Car Spotter</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Cars Around You
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Car Spotter is the ultimate mobile app for car enthusiasts. Identify makes and models, track rare
                    cars, and share your sightings with a passionate community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download App
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="400"
                height="800"
                alt="App Screenshot"
                className="mx-auto aspect-[2/4] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of Car Spotting</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Car Spotter is packed with features to help you identify, track, and share your car sightings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Identify Makes and Models</h3>
                      <p className="text-muted-foreground">
                        Use the app's advanced image recognition to instantly identify the make and model of any car you
                        spot.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Track Rare Cars</h3>
                      <p className="text-muted-foreground">
                        Create custom alerts to be notified whenever a rare or unique car is spotted in your area.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Share with the Community</h3>
                      <p className="text-muted-foreground">
                        Connect with other car enthusiasts and share your sightings, photos, and stories in the app's
                        social feed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Meet the Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Minds Behind Car Spotter</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about the talented team that developed Car Spotter.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-0 rounded-none shadow-none">
                  <CardContent className="p-6 bg-muted rounded-lg">
                    <div className="flex flex-col gap-4 items-center">
                      <Avatar className="w-20 h-20 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>T1</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">Co-Founder, CEO</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 rounded-none shadow-none">
                  <CardContent className="p-6 bg-muted rounded-lg">
                    <div className="flex flex-col gap-4 items-center">
                      <Avatar className="w-20 h-20 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>T2</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-muted-foreground">Co-Founder, CTO</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 rounded-none shadow-none">
                  <CardContent className="p-6 bg-muted rounded-lg">
                    <div className="flex flex-col gap-4 items-center">
                      <Avatar className="w-20 h-20 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>T3</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-medium">Michael Johnson</div>
                        <div className="text-sm text-muted-foreground">Lead Developer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Have a Question? Let's Chat.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you have a question about the app, want to provide feedback, or are interested in partnering
                  with us, we'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <form className="w-full max-w-md space-y-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

