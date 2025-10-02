"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"

const projectsData = {
  "cinematic-character-design": {
    title: "Cinematic Character Design",
    image: "/cinematic-3d-character-vfx-render.jpg",
    description:
      "A photorealistic character model created for a short film, featuring detailed texturing and realistic lighting.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
    role: "Lead 3D Artist",
    fullDescription:
      "This project involved creating a fully realized character for a cinematic short film. The character required photorealistic skin textures, detailed facial features, and realistic hair simulation. The workflow included high-poly sculpting in ZBrush, retopology for animation-ready geometry, and advanced texturing in Substance Painter.",
    process: [
      {
        title: "Concept & Reference",
        description:
          "Gathered reference images and created initial concept sketches to establish the character's look and feel.",
        image: "/character-concept-sketches.jpg",
      },
      {
        title: "High-Poly Sculpting",
        description:
          "Sculpted detailed anatomy and facial features in ZBrush, focusing on realistic proportions and expressions.",
        image: "/3d-character-sculpting-zbrush.jpg",
      },
      {
        title: "Retopology & UV Mapping",
        description: "Created clean topology for animation and unwrapped UVs for efficient texture application.",
        image: "/3d-model-wireframe-topology.jpg",
      },
      {
        title: "Texturing & Materials",
        description:
          "Developed realistic skin textures with subsurface scattering, pore details, and color variation in Substance Painter.",
        image: "/substance-painter-skin-texture.jpg",
      },
      {
        title: "Final Render",
        description: "Set up cinematic lighting in Blender and rendered the final character with realistic materials.",
        image: "/cinematic-3d-character-vfx-render.jpg",
      },
    ],
  },
  "environment-concept-art": {
    title: "Environment Concept Art",
    image: "/futuristic-sci-fi-environment-concept-art.jpg",
    description: "Sci-fi environment design with atmospheric lighting and detailed architectural elements.",
    tools: ["Photoshop", "Blender", "Unreal Engine"],
    role: "Concept Artist & 3D Modeler",
    fullDescription:
      "A futuristic sci-fi environment created for a game concept. The project required establishing a unique visual style that balanced realism with stylized elements. The environment features advanced architectural designs, atmospheric lighting, and detailed props.",
    process: [
      {
        title: "Initial Sketches",
        description: "Created thumbnail sketches to explore different composition and architectural ideas.",
        image: "/environment-concept-sketches.jpg",
      },
      {
        title: "Detailed Concept",
        description:
          "Developed the chosen concept with detailed architectural elements and atmospheric effects in Photoshop.",
        image: "/futuristic-sci-fi-environment-concept-art.jpg",
      },
      {
        title: "3D Blockout",
        description: "Built a 3D blockout in Blender to establish scale, composition, and camera angles.",
        image: "/3d-environment-blockout.jpg",
      },
      {
        title: "Asset Creation",
        description: "Modeled detailed architectural elements and props to populate the environment.",
        image: "/sci-fi-3d-assets-modeling.jpg",
      },
      {
        title: "Unreal Engine Integration",
        description: "Imported assets into Unreal Engine and set up lighting, materials, and post-processing effects.",
        image: "/unreal-engine-sci-fi-environment.jpg",
      },
    ],
  },
  "vfx-breakdown-reel": {
    title: "VFX Breakdown Reel",
    image: "/vfx-explosion-effects-breakdown.jpg",
    description: "Visual effects breakdown showcasing particle simulations, compositing, and color grading techniques.",
    tools: ["Nuke", "Blender", "Photoshop"],
    role: "VFX Artist",
    fullDescription:
      "A comprehensive VFX breakdown reel demonstrating various visual effects techniques including particle simulations, dynamic simulations, compositing, and color grading. This project showcases the technical and artistic skills required for professional VFX work.",
    process: [
      {
        title: "Planning & Storyboarding",
        description: "Created storyboards and planned the sequence of effects to be showcased in the breakdown reel.",
        image: "/vfx-storyboard-planning.jpg",
      },
      {
        title: "Particle Simulations",
        description: "Set up complex particle systems in Blender for explosions, smoke, and debris effects.",
        image: "/vfx-explosion-effects-breakdown.jpg",
      },
      {
        title: "Dynamic Simulations",
        description: "Created realistic physics simulations for cloth, fluids, and rigid body dynamics.",
        image: "/blender-physics-simulation.jpg",
      },
      {
        title: "Compositing in Nuke",
        description:
          "Composited multiple render passes, added atmospheric effects, and integrated CG elements with live footage.",
        image: "/nuke-compositing-node-graph.jpg",
      },
      {
        title: "Color Grading & Final Output",
        description:
          "Applied color grading to achieve a cohesive cinematic look and rendered the final breakdown reel.",
        image: "/color-grading-vfx.jpg",
      },
    ],
  },
}

const allProjects = [
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
    description: "Visual effects breakdown showcasing particle simulations, compositing, and color grading techniques.",
    tools: ["Nuke", "Blender", "Photoshop"],
    role: "VFX Artist",
  },
]

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    notFound()
  }

  const otherProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[#0a0e1a]/80 border-b border-cyan-500/10">
        <Link href="/" className="text-xl font-serif tracking-wider hover:text-cyan-400 transition-colors">
          Tram Nguyen
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/#work" className="hover:text-cyan-400 transition-colors">
            Work
          </Link>
          <Link href="/#about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      <div className="pt-32 px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <span className="text-sm text-cyan-400">Role: </span>
              <span className="text-gray-300">{project.role}</span>
            </div>
            <div>
              <span className="text-sm text-cyan-400">Tools: </span>
              <span className="text-gray-300">{project.tools.join(", ")}</span>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden border border-cyan-500/20 mb-12 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose prose-invert max-w-none mb-16">
            <h2 className="text-3xl font-serif mb-4 text-cyan-400">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="space-y-16">
            <h2 className="text-3xl font-serif text-cyan-400">Process & Breakdown</h2>
            {project.process.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-cyan-400/30">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 lg:px-24 py-12 border-t border-cyan-500/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-cyan-400 mb-2">More Projects</h2>
            <p className="text-sm text-gray-400">Explore other work from the portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {otherProjects.map((otherProject, index) => (
              <Link key={otherProject.slug} href={`/work/${otherProject.slug}`}>
                <div
                  className="group relative bg-gray-900/30 border border-cyan-500/10 hover:border-cyan-400/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={otherProject.image || "/placeholder.svg"}
                      alt={otherProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {otherProject.title}
                    </h3>
                    <p className="text-xs text-gray-400">{otherProject.role}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {otherProject.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-0.5 bg-cyan-500/10 rounded border border-cyan-500/20 text-cyan-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors group-hover:-translate-x-1 duration-300" />
              <span className="text-sm text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                Go Back
              </span>
            </Link>
          </div>
        </div>
      </div>

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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
