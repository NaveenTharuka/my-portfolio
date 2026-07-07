'use client'

import { useState, useEffect } from 'react'
import {
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ServerIcon,
  CubeIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  BeakerIcon,
  DocumentMagnifyingGlassIcon,
  LinkIcon,
  PlayCircleIcon,
  CheckBadgeIcon,
  ArrowTopRightOnSquareIcon,
  Squares2X2Icon,
  ViewfinderCircleIcon,
  CloudIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline'

import Education from '@/components/Education'
import About from '@/components/About'
import Interests from '@/components/Interests'

// Alternative icon for GameController - using MusicalNoteIcon or you can use CpuChipIcon
const GameControllerIcon = MusicalNoteIcon

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'identity', 'education', 'interests', 'stack', 'projects']
      let current = 'home'

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 250) {
            current = section
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#identity', label: 'About' },
    { href: '#education', label: 'Certification' },
    { href: '#interests', label: 'Interests' },
    { href: '#stack', label: 'Stack' },
    { href: '#projects', label: 'Deployments' }
  ]

  const certifications = [
    {
      year: '2023 - PRESENT',
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      status: 'Verified'
    },
    {
      year: '2019 - 2021',
      title: 'M.Sc. in Computer Science (Software Engineering)',
      issuer: 'Technical University of Berlin • GPA: 1.2 / 1.0',
      focus: 'Focus: Backend Architecture'
    },
    {
      year: '2015 - 2019',
      title: 'B.Sc. in Software Engineering',
      issuer: 'Stanford University • Honors Program',
      focus: 'Magna Cum Laude'
    }
  ]

  const interests = [
    { id: '01', title: 'Full Stack Development', desc: 'Building complete web applications from user interfaces to backend systems.' },
    { id: '02', title: 'Backend Engineering', desc: 'Designing APIs, databases, and scalable server-side solutions.' },
    { id: '03', title: 'Cybersecurity', desc: 'Highly interested in cybersecurity; completed the Introduction to Cybersecurity course by Cisco Labs. Implementing secure coding practices and protecting digital infrastructures.' },
    { id: '04', title: 'Game Development', desc: 'Creating immersive experiences with Unity and C# for high-performance real-time rendering and logic.' },
    { id: '05', title: 'Software Architecture', desc: 'Designing resilient, scalable, and maintainable system blueprints.' },
    { id: '06', title: 'Emerging Technologies', desc: 'Exploring the frontier of computing, from edge networks to decentralized systems.' }
  ]

  const techStack = [
    {
      icon: CodeBracketIcon,
      title: 'Languages',
      desc: 'Core programming languages for systems and application logic.',
      tags: ['Java', 'C#', 'Python', 'JavaScript', 'SQL']
    },
    {
      icon: Squares2X2Icon,
      title: 'Web & Fullstack',
      desc: 'Modern frontend frameworks and scalable backend runtimes.',
      tags: ['React', 'Node.js', 'Express', 'HTML/CSS']
    },
    {
      icon: CommandLineIcon,
      title: 'Data & Environment',
      desc: 'Persistence layers and development environments.',
      tags: ['MySQL', 'MongoDB', 'Unity', 'Git', 'VS Code']
    }
  ]

  const projects = [
    {
      title: 'Zombie Survival Game',
      category: 'Game Development',
      tech: 'UNITY',
      description: 'Advanced AI pathfinding and immersive atmospheric lighting implemented in a high-stakes survival environment.',
      tags: ['C#', 'Unity', 'AI'],
      icon: GameControllerIcon
    },
    {
      title: 'Blind Assistance Smart Glasses',
      category: 'Computer Vision',
      tech: 'REAL-TIME',
      description: 'Computer vision system for real-time obstacle detection, providing spatial awareness for the visually impaired.',
      tags: ['Python', 'OpenCV', 'IoT'],
      icon: ViewfinderCircleIcon,
      reverse: true
    },
    {
      title: 'Modern Portfolio Engine',
      category: 'Web Framework',
      tech: 'CORE',
      description: 'The high-performance framework behind this site, optimized for speed and cinematic UI interactions.',
      tags: ['React', 'Tailwind', 'Vite'],
      icon: GlobeAltIcon
    },
    {
      title: 'Full Stack Web Application',
      category: 'Enterprise SaaS',
      tech: 'SECURE',
      description: 'Secure, scalable enterprise dashboard with real-time data synchronization and advanced user permissions.',
      tags: ['Node.js', 'MongoDB', 'Express'],
      icon: ServerIcon,
      reverse: true
    }
  ]

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0c0e14]/80 backdrop-blur-xl border-b border-[#444748]">
        <div className="flex justify-between items-center h-20 px-[20px] md:px-[64px] max-w-[1440px] mx-auto">
          <div className="font-['Geist_Mono'] text-[14px] font-bold tracking-[0.3em] text-[#c9c6c5]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#c9c6c5] rounded-full"></span>
              SYSTEM.ROOT
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-12 font-['Geist_Mono'] text-[14px] uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${activeSection === link.href.substring(1)
                  ? 'text-[#c9c6c5] border-b-2 border-[#c9c6c5] pb-1'
                  : 'text-[#c4c7c7] hover:text-[#c9c6c5]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <CloudIcon className="w-6 h-6 text-[#c4c7c7] cursor-pointer hover:text-[#c9c6c5] transition-colors" />
            <button className="bg-[#c9c6c5] text-[#0c0e14] px-8 py-2.5 rounded-none font-['Geist_Mono'] text-[14px] uppercase tracking-widest hover:bg-white transition-all active:scale-95">
              Connect
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 blueprint-grid" id="home">
        <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] md:px-[64px] w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-24">
            <div className="lg:col-span-7">
              <div className="mb-8 font-['Geist_Mono'] text-[14px] text-[#c9c6c5] tracking-widest uppercase">
                // Senior Backend Architect
              </div>
              <h1 className="font-['Geist_Mono'] text-[80px] md:text-[120px] leading-[0.9] font-bold uppercase tracking-tighter mb-16">
                <span className="block text-[#e2e1eb]">Building the</span>
                <span className="block text-[#e2e1eb]/30">Invisible</span>
                <span className="block text-[#e2e1eb]">Infrastructure.</span>
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <button className="bg-[#c9c6c5] text-[#0c0e14] px-12 py-6 font-['Geist_Mono'] text-[14px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Execute_Init()
                </button>
                <p className="max-w-sm font-['Inter'] text-[16px] text-[#c4c7c7] border-l border-[#444748] pl-6">
                  Specializing in high-throughput distributed systems and cloud-native orchestration.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5"></div>
          </div>
        </div>
      </section>

      <About />

      <Education id={"education"} certifications={certifications} />

      {/* Interests Section */}
      <Interests id={"interests"} interests={interests} />

      {/* Tech Stack Section */}
      <section className="py-32 bg-[#0c0e14] border-y border-[#444748] blueprint-grid" id="stack">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
          <div className="text-center mb-24">
            <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.4em]">INFRASTRUCTURE_TOOLING</h2>
            <h3 className="font-['Geist_Mono'] text-[40px] md:text-[32px] font-semibold uppercase tracking-tight">
              Core Technology Primitives
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#444748] border border-[#444748]">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-[#0c0e14] p-12 hover:bg-[#1a1b22] transition-colors group">
                <div className="w-16 h-16 border border-[#444748] flex items-center justify-center mb-10 group-hover:border-[#c9c6c5] transition-colors">
                  <tech.icon className="w-8 h-8 text-[#c9c6c5]" />
                </div>
                <h4 className="font-['Geist_Mono'] text-[24px] font-semibold mb-6">{tech.title}</h4>
                <p className="text-[#c4c7c7] mb-10 font-['Inter'] text-[16px]">{tech.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {tech.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 border border-[#444748] text-[10px] font-['Geist_Mono'] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-[#0c0e14]" id="projects">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex items-start gap-8">
            <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">03_DEPL</div>
            <div>
              <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">SYSTEM_DEPLOYMENTS</h2>
              <h3 className="font-['Geist_Mono'] text-[32px] font-semibold">FEATURED_PROJECTS // SYSTEM_DEPLOYMENTS</h3>
            </div>
          </div>
          <div className="font-['Geist_Mono'] text-[14px] text-[#c4c7c7] flex items-center gap-4 uppercase tracking-[0.2em] group cursor-pointer hover:text-[#c9c6c5] transition-colors">
            <span>Access Source Code Repositories</span>
            <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${project.reverse ? 'lg:col-span-5 lg:order-1 order-2' : 'lg:col-span-7'} group overflow-hidden border border-[#444748] bg-[#1a1b22] aspect-video flex items-center justify-center`}>
                <project.icon className="w-24 h-24 text-[#c9c6c5]/20" />
              </div>
              <div className={`${project.reverse ? 'lg:col-span-7 lg:order-2 order-1' : 'lg:col-span-5'}`}>
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#444748]">
                  <span className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] uppercase tracking-[0.2em]">{project.category}</span>
                  <span className="text-3xl font-bold font-['Geist_Mono']">{project.tech}</span>
                </div>
                <h4 className="font-['Geist_Mono'] text-[24px] font-semibold mb-6 text-[#e2e1eb]">{project.title}</h4>
                <p className="text-[#c4c7c7] mb-10 font-['Inter'] text-[18px]">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-12">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-['Geist_Mono'] text-[11px] px-3 py-1 bg-[#1a1b22] border border-[#444748]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href="#" className="inline-flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-widest group border-b border-transparent hover:border-[#c9c6c5] transition-all pb-1">
                    GitHub <CodeBracketIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-widest group border-b border-transparent hover:border-[#c9c6c5] transition-all pb-1">
                    Live Demo <PlayCircleIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c0e14] border-t border-[#444748] py-24">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="font-['Geist_Mono'] text-[14px] font-bold tracking-[0.3em] text-[#c9c6c5] mb-10">
                SYSTEM.ROOT // SOFTWARE BACKEND ENGINEER
              </div>
              <p className="font-['Inter'] text-[16px] text-[#c4c7c7] max-w-sm">
                Designing tomorrow's infrastructure today. Precise, resilient, and observable backend architectures.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-6 font-['Geist_Mono'] text-[14px] uppercase tracking-widest">
              <a href="#" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-colors">GitHub Repository</a>
              <a href="#" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-colors">LinkedIn Profile</a>
              <a href="#" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-colors">System Documentation</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#444748] gap-8">
            <div className="font-['Geist_Mono'] text-[11px] text-[#c4c7c7] uppercase tracking-[0.3em]">
              © 2024 SYSTEM.ROOT // V2.0.4
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#c9c6c5] rounded-full"></span>
              <span className="font-['Geist_Mono'] text-[11px] uppercase tracking-widest text-[#c9c6c5]">All Nodes Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}