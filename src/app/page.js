'use client'

import { useState, useEffect } from 'react'
import {
  CodeBracketIcon,
  CommandLineIcon,
  Squares2X2Icon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline'

import Education from '@/components/Education'
import About from '@/components/About'
import Interests from '@/components/Interests'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

import { Analytics } from "@vercel/analytics/next"
import { getProjects } from '../../services/projects.api'
import { getInterests } from '../../services/interests.api'
import Contact from '@/components/Contact'

// Alternative icon for GameController - using MusicalNoteIcon or you can use CpuChipIcon
const GameControllerIcon = MusicalNoteIcon

export default function Home() {
  const [projects, setProjects] = useState([])
  const [interests, setInterests] = useState([])
  const [loading, setLoading] = useState(true)

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    async function fetchdata() {
      setLoading(true)
      const result1 = await getProjects()

      if (result1) {
        setProjects(result1)
      }

      const result2 = await getInterests()
      if (result2) {
        setInterests(result2)
      }
      setLoading(false)
    }
    fetchdata()

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
      id: 1,
      year: '2024 - PRESENT',
      title: 'BSc. in Computer Science',
      issuer: 'Sri Lanka Institue of Informaiton Technology',
      focus: 'Focus: Backend Architecture'
    },
    {
      id: 2,
      year: '2019',
      title: 'GCE Ordinary Level (O/L)',
      issuer: 'At Embilipitiya Royal College',
      status: 'Completed'
    },
    {
      id: 3,
      year: '2020 - 2023',
      title: 'GCE Advanced Level (A/L)',
      issuer: 'At Embilipitiya Udagama Maha Vidyalaya',
      focus: 'Focus: Physics, Chemistry & C. Mathematics'
    }
  ]

  // const interests = [
  //   { id: '01', title: 'Full Stack Development', desc: 'Building complete web applications from user interfaces to backend systems.' },
  //   { id: '02', title: 'Backend Engineering', desc: 'Designing APIs, databases, and scalable server-side solutions.' },
  //   { id: '03', title: 'Cybersecurity', desc: 'Highly interested in cybersecurity; completed the Introduction to Cybersecurity course by Cisco Labs. Implementing secure coding practices and protecting digital infrastructures.' },
  //   { id: '04', title: 'Game Development', desc: 'Creating immersive experiences with Unity and C# for high-performance real-time rendering and logic.' },
  //   { id: '05', title: 'Software Architecture', desc: 'Designing resilient, scalable, and maintainable system blueprints.' },
  //   { id: '06', title: 'Emerging Technologies', desc: 'Exploring the frontier of computing, from edge networks to decentralized systems.' }
  // ]

  const techStack = [
    {
      icon: CodeBracketIcon,
      title: 'Languages',
      desc: 'Core programming languages for systems and application logic.',
      tags: ['Java', 'C#(Beginner)', 'Python', 'JavaScript', 'SQL']
    },
    {
      icon: Squares2X2Icon,
      title: 'Web & Fullstack',
      desc: 'Modern frontend frameworks and scalable backend runtimes.',
      tags: ['React', 'Next.JS', 'SpringBoot', 'HTML/CSS', 'FastAPI']
    },
    {
      icon: CommandLineIcon,
      title: 'Data & Environment',
      desc: 'Persistence layers and development environments.',
      tags: ['MySQL', 'Supabase', 'Unity', 'Git', 'VS Code', 'PostgreSQL', 'Vercel', 'Render']
    }
  ]

  // const projects = [
  //   {
  //     title: 'Zombie Survival Game',
  //     category: 'Game Development',
  //     tech: 'UNITY',
  //     description: 'Advanced AI pathfinding and immersive atmospheric lighting implemented in a high-stakes survival environment.',
  //     tags: ['C#', 'Unity', 'AI'],
  //     icon: GameControllerIcon
  //   },
  //   {
  //     title: 'Blind Assistance Smart Glasses',
  //     category: 'Computer Vision',
  //     tech: 'REAL-TIME',
  //     description: 'Computer vision system for real-time obstacle detection, providing spatial awareness for the visually impaired.',
  //     tags: ['Python', 'OpenCV', 'IoT'],
  //     icon: ViewfinderCircleIcon,
  //     reverse: true
  //   },
  //   {
  //     title: 'Modern Portfolio Engine',
  //     category: 'Web Framework',
  //     tech: 'CORE',
  //     description: 'The high-performance framework behind this site, optimized for speed and cinematic UI interactions.',
  //     tags: ['React', 'Tailwind', 'Vite'],
  //     icon: GlobeAltIcon
  //   },
  //   {
  //     title: 'Full Stack Web Application',
  //     category: 'Enterprise SaaS',
  //     tech: 'SECURE',
  //     description: 'Secure, scalable enterprise dashboard with real-time data synchronization and advanced user permissions.',
  //     tags: ['Node.js', 'MongoDB', 'Express'],
  //     icon: ServerIcon,
  //     reverse: true
  //   }
  // ]


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/* Header */}
      <Header activeSection={activeSection} navLinks={navLinks} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education id={"education"} certifications={certifications} />

      {/* Interests Section */}
      <Interests id={"interests"} interests={interests} />

      {/* Tech Stack Section */}
      <TechStack id={"stack"} techStack={techStack} />

      {/* Projects Section */}
      <Projects id={"projects"} projects={projects} />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />

      <Analytics />
    </>
  )
}