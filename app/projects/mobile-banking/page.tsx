import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, CheckCircle, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MobileBankingProject() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="text-xl font-bold gradient-text">
            Jane Designer
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="rounded-full">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
          </Link>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 gradient-text">
              Mobile Banking App
            </h1>

            <div className="aspect-video overflow-hidden rounded-lg mb-8 relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Mobile Banking App Hero"
                width={1200}
                height={600}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center text-center">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">Duration</span>
                <span className="text-muted-foreground text-sm">3 months</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center text-center">
                <Users className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">Team</span>
                <span className="text-muted-foreground text-sm">4 members</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center text-center">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">Year</span>
                <span className="text-muted-foreground text-sm">2023</span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    01
                  </span>
                  Overview
                </h2>
                <p className="text-muted-foreground">
                  A complete redesign of a mobile banking application focused on improving user experience,
                  accessibility, and introducing new features while maintaining security and compliance requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    02
                  </span>
                  The Challenge
                </h2>
                <p className="text-muted-foreground">
                  The existing banking app had low user satisfaction scores, with customers reporting difficulty finding
                  features, confusion during transactions, and accessibility issues. The client wanted to modernize the
                  interface while ensuring the app remained secure and compliant with financial regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    03
                  </span>
                  Research & Discovery
                </h2>
                <p className="text-muted-foreground mb-4">
                  I conducted user interviews, analyzed app store reviews, and performed a competitive analysis to
                  identify pain points and opportunities for improvement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="User Research"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Competitive Analysis"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    04
                  </span>
                  Design Process
                </h2>
                <p className="text-muted-foreground mb-4">
                  Based on research findings, I created user personas, journey maps, and information architecture before
                  moving into wireframing and prototyping. The design went through multiple iterations based on
                  stakeholder feedback and usability testing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Wireframes"
                      width={200}
                      height={200}
                      className="rounded-lg mb-2"
                    />
                    <h3 className="text-sm font-medium">Wireframes</h3>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="UI Design"
                      width={200}
                      height={200}
                      className="rounded-lg mb-2"
                    />
                    <h3 className="text-sm font-medium">UI Design</h3>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Prototype"
                      width={200}
                      height={200}
                      className="rounded-lg mb-2"
                    />
                    <h3 className="text-sm font-medium">Prototype</h3>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    05
                  </span>
                  Final Solution
                </h2>
                <p className="text-muted-foreground mb-4">
                  The redesigned app features a simplified navigation system, personalized dashboard, streamlined
                  transaction flow, and enhanced security features. Accessibility was improved with better contrast,
                  larger touch targets, and screen reader compatibility.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Key Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>Personalized dashboard with customizable widgets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>Simplified transaction flow with clear confirmation steps</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>Biometric authentication options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>Spending insights and budgeting tools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>Improved accessibility features</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-accent/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-accent">Results</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>35% increase in user satisfaction scores</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>28% reduction in customer support calls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>42% increase in feature discovery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>20% increase in mobile banking adoption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    06
                  </span>
                  Final Designs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      alt="Dashboard Screen"
                      width={300}
                      height={600}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      alt="Transactions Screen"
                      width={300}
                      height={600}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      alt="Profile Screen"
                      width={300}
                      height={600}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 text-primary w-8 h-8 inline-flex items-center justify-center rounded-full mr-2 text-sm">
                    07
                  </span>
                  Reflections
                </h2>
                <p className="text-muted-foreground">
                  This project taught me valuable lessons about designing for financial applications, balancing security
                  requirements with usability, and the importance of thorough user testing. If I were to approach this
                  project again, I would allocate more time for accessibility testing with diverse user groups.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6 gradient-text">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/projects/ecommerce" className="group block">
                  <div className="aspect-video overflow-hidden rounded-lg mb-2 relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="E-commerce Website"
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105 rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">E-commerce Website</h3>
                </Link>
                <Link href="/projects/health-dashboard" className="group block">
                  <div className="aspect-video overflow-hidden rounded-lg mb-2 relative">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Health Tracking Dashboard"
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105 rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Health Tracking Dashboard
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8 bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

