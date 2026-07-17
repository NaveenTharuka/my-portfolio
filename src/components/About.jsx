import {
    ComputerDesktopIcon
} from '@heroicons/react/24/outline'

export default function About() {
    return (

        <section className="py-16 sm:py-24 md:py-32 bg-[#0c0e14] border-b border-[#444748]" id="identity">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[20px] md:px-[64px]">
                <div className="flex items-start gap-5 sm:gap-8 md:gap-12 mb-10 sm:mb-14 md:mb-20">
                    <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">01_BIO</div>
                    <div>
                        <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">IDENTITY_LOG</h2>
                        <h3 className="font-['Geist_Mono'] text-[22px] sm:text-[26px] md:text-[32px] font-semibold break-words">About the Architect</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 md:gap-24 items-center">
                    <div className="lg:col-span-5">
                        <div className="border border-[#444748] bg-[#1a1b22] p-4 overflow-hidden">
                            <div className="aspect-4/5 bg-[#0c0e14] relative group">
                                <div className="w-full h-full bg-linear-to-br from-[#282a31] to-[#0c0e14] flex items-center justify-center">
                                    <ComputerDesktopIcon className="w-24 h-24 text-[#c9c6c5]/20" />
                                </div>
                                <div className="absolute inset-0 border border-[#c9c6c5]/20 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-8 sm:space-y-10 md:space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <span className="font-['Geist_Mono'] text-[12px] text-[#c9c6c5] uppercase tracking-widest">Role</span>
                                <p className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#e2e1eb]">Aspiring Backend Developer</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-['Geist_Mono'] text-[12px] text-[#c9c6c5] uppercase tracking-widest">Specialization</span>
                                <p className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#e2e1eb]">Software Engineering / Backend</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-['Geist_Mono'] text-[12px] text-[#c9c6c5] uppercase tracking-widest">Experience</span>
                                <p className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#e2e1eb]">Seeking Internship</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-['Geist_Mono'] text-[12px] text-[#c9c6c5] uppercase tracking-widest">Location</span>
                                <p className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#e2e1eb]">SLIIT / Sri Lanka</p>
                            </div>
                        </div>
                        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-[#444748]">
                            <span className="font-['Geist_Mono'] text-[12px] text-[#c9c6c5] uppercase tracking-widest block mb-6">Biography</span>
                            <p className="font-['Inter'] text-[15px] sm:text-[16px] md:text-[18px] text-[#c4c7c7] leading-relaxed">
                                I am a Computer Science student at SLIIT and a passionate Backend Developer with experience in Frontend technologies.
                                I am dedicated to building efficient, scalable server-side logic and modern web applications. Currently, I am looking
                                for internship opportunities to apply my technical skills and contribute to impactful software projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}