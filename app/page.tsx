import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
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
        <section className="py-24 md:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>UX/UI Designer</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, I'm <span className="gradient-text">Jane Designer</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  UX/UI designer focused on creating intuitive and engaging digital experiences that solve real user
                  problems.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/#projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full">
                    <Link href="/#about">About Me</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <div className="animate-float">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover border-4 border-background shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  My <span className="gradient-text">Projects</span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore my recent UX/UI design work and case studies
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Mobile Banking App"
                description="A redesign of a banking application focused on improving user experience and accessibility."
                image="/placeholder.svg?height=400&width=600"
                href="/projects/mobile-banking"
              />
              <ProjectCard
                title="E-commerce Website"
                description="A comprehensive e-commerce platform with intuitive navigation and streamlined checkout process."
                image="/placeholder.svg?height=400&width=600"
                href="/projects/ecommerce"
              />
              <ProjectCard
                title="Health Tracking Dashboard"
                description="A dashboard for health professionals to monitor patient data with clear visualizations."
                image="/placeholder.svg?height=400&width=600"
                href="/projects/health-dashboard"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-muted-foreground">
                  I'm a UX/UI designer with 5+ years of experience creating digital products that users love. My
                  approach combines user research, interaction design, and visual aesthetics to craft meaningful
                  experiences.
                </p>
                <p className="text-muted-foreground">
                  I've worked with startups and established companies across fintech, healthcare, and e-commerce
                  sectors. My process is collaborative and iterative, always putting users at the center of design
                  decisions.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "User Research",
                      "Wireframing",
                      "Prototyping",
                      "Usability Testing",
                      "UI Design",
                      "Design Systems",
                    ].map((skill) => (
                      <div key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="About me"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Interested in working together? Let's connect and discuss your project.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/50 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <Link href="mailto:jane@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/50 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/50 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button className="w-full rounded-full" asChild>
                    <Link href="mailto:jane@example.com">Send me an email</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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

function ProjectCard({ title, description, image, href }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 gradient-border">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

