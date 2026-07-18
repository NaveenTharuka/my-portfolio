import {
    CodeBracketIcon,
    PlayCircleIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import ProjectCard from './ProjectCard'

export default function Projects({ id, projects }) {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#0c0e14]" id={id}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[20px] md:px-[64px] mb-12 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 md:gap-12">
                <div className="flex items-start gap-5 sm:gap-8">
                    <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">04_DEPL</div>
                    <div>
                        <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">SYSTEM_DEPLOYMENTS</h2>
                        <h3 className="font-['Geist_Mono'] text-[18px] sm:text-[22px] md:text-[32px] font-semibold break-words">FEATURED_PROJECTS // SYSTEM_DEPLOYMENTS</h3>
                    </div>
                </div>
                <div className="font-['Geist_Mono'] text-[14px] text-[#c4c7c7] flex items-center gap-4 uppercase tracking-[0.2em] group cursor-pointer hover:text-[#c9c6c5] transition-colors">
                    <span>Access Source Code Repositories</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[20px] md:px-[64px] space-y-16 sm:space-y-24 md:space-y-32">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}