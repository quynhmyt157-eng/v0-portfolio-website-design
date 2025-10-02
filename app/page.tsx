"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Send, Mail, ExternalLink, Copy, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [arrowClicked, setArrowClicked] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container")
    if (!particlesContainer) return

    const particleCount = 80
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 20}s`
      particle.style.animationDuration = `${20 + Math.random() * 30}s`
      particlesContainer.appendChild(particle)
    }
  }, [])

  const hardSkills = [
    { name: "3D Modeling", level: 95 },
    { name: "Texturing & Rendering", level: 90 },
    { name: "Concept Design", level: 85 },
    { name: "Animation", level: 80 },
  ]

  const software = [
    { name: "Blender", level: 95 },
    { name: "ZBrush", level: 85 },
    { name: "Substance Painter", level: 90 },
    { name: "Photoshop", level: 90 },
    { name: "Unreal Engine", level: 75 },
    { name: "Nuke", level: 70 },
  ]

  const softSkills = [
    { name: "Teamwork", level: 90 },
    { name: "Creativity", level: 95 },
    { name: "Time Management", level: 85 },
    { name: "Problem Solving", level: 90 },
  ]

  const projects = [
    {
      slug: "cinematic-character-design",
      title: "Cinematic Character Design",
      image: "/cinematic-3d-character-vfx-render.jpg",
      description:
        "A photorealistic character model created for a short film, featuring detailed texturing and realistic lighting.",
      tools: ["Blender", "ZBrush", "Substance Painter"],
      role: "Lead 3D Artist",
    },
    {
      slug: "environment-concept-art",
      title: "Environment Concept Art",
      image: "/futuristic-sci-fi-environment-concept-art.jpg",
      description: "Sci-fi environment design with atmospheric lighting and detailed architectural elements.",
      tools: ["Photoshop", "Blender", "Unreal Engine"],
      role: "Concept Artist & 3D Modeler",
    },
    {
      slug: "vfx-breakdown-reel",
      title: "VFX Breakdown Reel",
      image: "/vfx-explosion-effects-breakdown.jpg",
      description:
        "Visual effects breakdown showcasing particle simulations, compositing, and color grading techniques.",
      tools: ["Nuke", "Blender", "Photoshop"],
      role: "VFX Artist",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const scrollToNextSection = () => {
    const element = document.getElementById("work")
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - 40

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setArrowClicked(true)
      setTimeout(() => setArrowClicked(false), 600)
    }
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("quynhtram1376@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white relative overflow-hidden">
      <div id="particles-container" className="fixed inset-0 pointer-events-none z-0" />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/4 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />

        <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-cyan-400/60 rounded-full blur-sm animate-firefly" />
        <div
          className="absolute top-[60%] right-[20%] w-2 h-2 bg-cyan-300/50 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "2s", animationDuration: "18s" }}
        />
        <div
          className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 bg-cyan-500/55 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "4s", animationDuration: "22s" }}
        />
        <div
          className="absolute top-[40%] right-[30%] w-2 h-2 bg-cyan-400/50 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "1s", animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-[50%] left-[40%] w-3 h-3 bg-cyan-300/60 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "3s", animationDuration: "24s" }}
        />
        <div
          className="absolute top-[70%] left-[60%] w-2.5 h-2.5 bg-cyan-400/55 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "5s", animationDuration: "21s" }}
        />
        <div
          className="absolute bottom-[60%] right-[40%] w-2 h-2 bg-cyan-500/50 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "6s", animationDuration: "23s" }}
        />
        <div
          className="absolute top-[15%] right-[50%] w-2 h-2 bg-cyan-300/55 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "7s", animationDuration: "25s" }}
        />
        <div
          className="absolute bottom-[20%] left-[70%] w-2.5 h-2.5 bg-cyan-400/60 rounded-full blur-sm animate-firefly"
          style={{ animationDelay: "8s", animationDuration: "19s" }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[#0a0e1a]/80 border-b border-cyan-500/10">
        <a href="#" className="text-lg font-serif tracking-wider hover:text-cyan-400 transition-colors">
          Tram Nguyen
        </a>
        <div className="flex gap-8 text-sm">
          <a href="#work" className="hover:text-cyan-400 transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fantasy-vfx-hero-background.jpg"
            alt="VFX Background"
            fill
            className="object-cover opacity-50 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/40 to-[#0a0e1a] scale-110" />
        </div>

        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6">Beyond the Frame</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">Scroll down to see more</p>
        </div>

        <button
          onClick={scrollToNextSection}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group hover:scale-110 transition-all duration-300 z-10 ${
            arrowClicked ? "animate-pulse-glow" : ""
          }`}
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
          aria-label="Scroll to next section"
        >
          <span className="text-xs text-cyan-300 uppercase tracking-wider font-semibold drop-shadow-[0_0_10px_rgba(6,182,212,0.9)]">
            Explore
          </span>
          <ChevronDown
            className="w-8 h-8 text-cyan-300 animate-bounce drop-shadow-[0_0_12px_rgba(6,182,212,1)]"
            strokeWidth={3}
          />
        </button>
      </section>

      <section id="work" className="min-h-screen px-8 md:px-16 lg:px-24 py-24" style={{ scrollMarginTop: "100px" }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-serif mb-16">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={project.slug} href={`/work/${project.slug}`}>
                <Card
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
                    <div>
                      <p className="text-xs text-cyan-400/70 mb-2">Tools Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20 text-cyan-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Role: {project.role}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-serif mb-16">About Me</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-cyan-500/20 mb-6 shadow-[0_0_50px_rgba(6,182,212,0.1)] w-full max-w-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7074199282920_d7f2916c3bc4a4df3b9a98829f586df9-Qsct08x8MAviEEQq0TpjvsThWJmD1c.jpg"
                  alt="Tram Nguyen"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  style={{ imageRendering: "high-quality" }}
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Tram Nguyen</h3>
              <p className="text-cyan-400 mb-4">VFX Artist | 3D Modeler | Illustrator</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I'm Tram. I work across VFX, 3D, and illustration, always curious and always creating. I love
                turning ideas into visuals that feel alive and tell a story.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-cyan-400">Education</h4>
                  <p className="text-gray-300">University of Economics Ho Chi Minh City</p>
                  <p className="text-sm text-gray-400">Arttech Major</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-cyan-400">Experience</h4>
                  <p className="text-gray-300">Freelance VFX Artist</p>
                  <p className="text-sm text-gray-400">
                    Working on various projects including character design, environment art, and visual effects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-serif mb-16">Skills</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Hard Skills</h3>
              <div className="space-y-6">
                {hardSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800/50" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Software</h3>
              <div className="space-y-6">
                {software.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800/50" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Drop me a line</h2>
          <p className="text-lg text-gray-300 mb-12">Have a project in mind? Let's talk about it.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-900/50 border-cyan-500/20 focus:border-cyan-400 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-900/50 border-cyan-500/20 focus:border-cyan-400 text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-900/50 border-cyan-500/20 focus:border-cyan-400 text-white min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-medium px-8 py-6 text-lg">
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-cyan-500/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-2">Or reach me directly at:</p>
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>quynhtram1376@gmail.com</span>
                  {emailCopied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
                {emailCopied && <p className="text-xs text-cyan-400 mt-1 ml-7">Email copied to clipboard!</p>}
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.artstation.com/julienguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  ArtStation
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.behance.net/trmnguyn269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Behance
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/julie.wynie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-cyan-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 Tram Nguyen. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.artstation.com/julienguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              ArtStation
            </a>
            <a
              href="https://www.behance.net/trmnguyn269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/julie.wynie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slow-zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 12px rgba(6, 182, 212, 1));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(6, 182, 212, 1));
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 0.6s ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        :global(.particle) {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(6, 182, 212, 0.5);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(6, 182, 212, 0.8);
          animation: float-gentle linear infinite;
        }

        @keyframes float-gentle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        /* Enhanced firefly animation with smoother, more gentle movement using ease-in-out */
        @keyframes firefly {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          15% {
            opacity: 0.7;
          }
          25% {
            transform: translate(120px, -80px);
            opacity: 0.5;
          }
          40% {
            transform: translate(60px, -160px);
            opacity: 0.8;
          }
          60% {
            transform: translate(-80px, -120px);
            opacity: 0.6;
          }
          75% {
            transform: translate(-140px, -60px);
            opacity: 0.4;
          }
          85% {
            opacity: 0.6;
          }
        }

        .animate-firefly {
          animation: firefly 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
