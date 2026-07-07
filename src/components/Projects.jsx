import {
    CodeBracketIcon,
    PlayCircleIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function Projects({ id, projects }) {
    return (
        <section className="py-32 bg-[#0c0e14]" id={id}>
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
                        {/* Image/Icon side */}
                        <div className={`${project.reverse ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'} group overflow-hidden border border-[#444748] bg-[#1a1b22] aspect-video flex items-center justify-center`}>
                            <project.icon className="w-24 h-24 text-[#c9c6c5]/20" />
                        </div>
                        {/* Content side */}
                        <div className={`${project.reverse ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
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
    )
}