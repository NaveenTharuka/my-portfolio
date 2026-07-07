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
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
      <Header activeSection={activeSection} navLinks={navLinks} />

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

      {/* About Section */}
      <About />

      {/* Interests Section */}
      <Interests id={"interests"} interests={interests} />

      {/* Education Section */}
      <Education id={"education"} certifications={certifications} />

      {/* Tech Stack Section */}
      <TechStack id={"stack"} techStack={techStack} />

      {/* Projects Section */}
      <Projects id={"projects"} projects={projects} />

      {/* Footer */}
      <Footer />
    </>
  )
}