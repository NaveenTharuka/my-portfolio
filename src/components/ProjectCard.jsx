import {
    CodeBracketIcon,
    PlayCircleIcon
} from '@heroicons/react/24/outline'

export default function ProjectCard({ project }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image/Icon side */}
            <div className={`${project.reverse ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'} group overflow-hidden border border-[#444748] bg-[#1a1b22] aspect-video flex items-center justify-center rounded-xl`}>
                {/* <project.icon className="w-24 h-24 text-[#c9c6c5]/20" /> */}
                <img src={project.image} alt={project.title} className="w-full h-full object-stretch" />
            </div>
            {/* Content side */}
            <div className={`${project.reverse ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8 pb-4 sm:pb-5 md:pb-6 border-b border-[#444748]">
                    <span className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] uppercase tracking-[0.2em]">{project.category}</span>

                </div>
                <h4 className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-4 sm:mb-5 md:mb-6 text-[#e2e1eb]">{project.title}</h4>
                <p className="text-[#c4c7c7] mb-6 sm:mb-8 md:mb-10 font-['Inter'] text-[15px] sm:text-[16px] md:text-[18px]">{project.description}</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                    {project.tags.map((tag) => (
                        <span key={tag} className="font-['Geist_Mono'] text-[11px] px-3 py-1 bg-[#1a1b22] border border-[#444748]">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-6">
                    <a href={project.github} className="inline-flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-widest group border-b border-transparent hover:border-[#c9c6c5] transition-all pb-1">
                        GitHub <CodeBracketIcon className="w-4 h-4" />
                    </a>
                    <a href={project.demo_url} className="inline-flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-widest group border-b border-transparent hover:border-[#c9c6c5] transition-all pb-1">
                        Live Demo <PlayCircleIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}