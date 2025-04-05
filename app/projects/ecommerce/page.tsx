import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function EcommerceProject() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">E-commerce Website</h1>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="E-commerce Website Hero"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground">
                  A comprehensive e-commerce platform designed to provide an intuitive shopping experience with
                  streamlined navigation and checkout process. The project focused on increasing conversion rates and
                  reducing cart abandonment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  The client, a fashion retailer, was experiencing high cart abandonment rates and low mobile
                  conversion. Their existing website was outdated, difficult to navigate on mobile devices, and had a
                  complicated checkout process that frustrated users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Research & Discovery</h2>
                <p className="text-muted-foreground mb-4">
                  I conducted user interviews, analyzed analytics data, and performed usability testing on the existing
                  site to identify pain points in the customer journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="User Journey Map"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Analytics Data"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Design Process</h2>
                <p className="text-muted-foreground mb-4">
                  Based on research findings, I created wireframes and prototypes for key user flows, focusing on
                  product discovery, filtering, and the checkout process. The design went through multiple iterations
                  based on user testing and stakeholder feedback.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Wireframes"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="UI Design"
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
                  The redesigned e-commerce platform features a responsive design, intuitive navigation, advanced
                  filtering options, and a streamlined three-step checkout process. The site also includes personalized
                  recommendations and a wishlist feature.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Responsive design optimized for all devices</li>
                      <li>Advanced filtering and search capabilities</li>
                      <li>Simplified three-step checkout process</li>
                      <li>Guest checkout option</li>
                      <li>Personalized product recommendations</li>
                      <li>Wishlist and save for later functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>32% reduction in cart abandonment rate</li>
                      <li>45% increase in mobile conversion rate</li>
                      <li>28% increase in average order value</li>
                      <li>53% increase in time spent on site</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Final Designs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Homepage Design"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Product Page"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Category Page"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Checkout Process"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Reflections</h2>
                <p className="text-muted-foreground">
                  This project highlighted the importance of a streamlined checkout process and responsive design in
                  e-commerce. The biggest challenge was balancing the client's desire to showcase as many products as
                  possible while maintaining a clean, uncluttered interface. In future iterations, I would focus on
                  further personalizing the shopping experience based on user behavior.
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
                <Link href="/projects/health-dashboard" className="group block">
                  <div className="aspect-video overflow-hidden rounded-lg mb-2">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Health Tracking Dashboard"
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary">Health Tracking Dashboard</h3>
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

