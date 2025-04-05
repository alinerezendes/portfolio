import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HealthDashboardProject() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="text-xl font-bold">
            Jane Designer
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
          </Link>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Health Tracking Dashboard
            </h1>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Health Dashboard Hero"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground">
                  A dashboard for healthcare professionals to monitor patient data with clear visualizations and
                  actionable insights. The project focused on simplifying complex medical data and improving
                  decision-making efficiency.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  Healthcare providers were struggling with fragmented patient data across multiple systems, making it
                  difficult to get a comprehensive view of patient health. The existing tools were complex, required
                  extensive training, and didn't provide actionable insights at a glance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Research & Discovery</h2>
                <p className="text-muted-foreground mb-4">
                  I conducted contextual inquiries with healthcare professionals, shadowed their workflows, and analyzed
                  existing systems to understand their needs and pain points.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Contextual Inquiry"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Workflow Analysis"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Design Process</h2>
                <p className="text-muted-foreground mb-4">
                  Based on research findings, I created information architecture, wireframes, and interactive
                  prototypes. The design went through multiple iterations with healthcare professionals providing
                  feedback at each stage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Information Architecture"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Wireframes"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Prototype"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Final Solution</h2>
                <p className="text-muted-foreground mb-4">
                  The health tracking dashboard features a customizable interface with role-based views, interactive
                  data visualizations, patient timeline, and alert system for critical values. The design prioritizes
                  clarity, accessibility, and quick access to relevant information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Role-based dashboard views</li>
                      <li>Interactive data visualizations</li>
                      <li>Patient timeline with key events</li>
                      <li>Alert system for critical values</li>
                      <li>Trend analysis and predictive insights</li>
                      <li>Secure messaging and collaboration tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>40% reduction in time spent reviewing patient data</li>
                      <li>35% improvement in early detection of health issues</li>
                      <li>25% increase in patient engagement</li>
                      <li>Positive feedback from 92% of healthcare providers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Final Designs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Main Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Patient Profile"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Data Visualization"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Alert System"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Reflections</h2>
                <p className="text-muted-foreground">
                  This project taught me the importance of domain expertise when designing for specialized fields.
                  Working closely with healthcare professionals was crucial to understanding the complexity of medical
                  data and creating visualizations that provide meaningful insights. In future iterations, I would
                  explore integrating AI-powered recommendations to further assist healthcare providers in their
                  decision-making process.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/projects/mobile-banking" className="group block">
                  <div className="aspect-video overflow-hidden rounded-lg mb-2">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Mobile Banking App"
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary">Mobile Banking App</h3>
                </Link>
                <Link href="/projects/ecommerce" className="group block">
                  <div className="aspect-video overflow-hidden rounded-lg mb-2">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="E-commerce Website"
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary">E-commerce Website</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

