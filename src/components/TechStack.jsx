export default function TechStack({ id, techStack }) {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#0c0e14] border-y border-[#444748] blueprint-grid" id={id}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[20px] md:px-[64px]">
                <div className="text-center mb-12 sm:mb-16 md:mb-24">
                    <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.4em]">INFRASTRUCTURE_TOOLING</h2>
                    <h3 className="font-['Geist_Mono'] text-[22px] sm:text-[28px] md:text-[40px] font-semibold uppercase tracking-tight">
                        Core Technology Primitives
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#444748] border border-[#444748]">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-[#0c0e14] p-6 sm:p-8 md:p-12 hover:bg-[#1a1b22] transition-colors group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-[#444748] flex items-center justify-center mb-6 sm:mb-8 md:mb-10 group-hover:border-[#c9c6c5] transition-colors">
                                <tech.icon className="w-8 h-8 text-[#c9c6c5]" />
                            </div>
                            <h4 className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-4 sm:mb-5 md:mb-6">{tech.title}</h4>
                            <p className="text-[#c4c7c7] mb-6 sm:mb-8 md:mb-10 font-['Inter'] text-[14px] sm:text-[15px] md:text-[16px]">{tech.desc}</p>
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
    )
}