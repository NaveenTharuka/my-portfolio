export default function Hero() {
    return (
        <section
            className="relative flex items-center blueprint-grid pt-24 lg:min-h-screen lg:pt-0 scroll-mt-20 overflow-x-hidden"
            id="home"
        >
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-[20px] md:px-[64px] w-full pt-14 sm:pt-16 md:pt-24 lg:pt-32 pb-8 sm:pb-10 md:pb-16 lg:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 md:gap-16 lg:gap-24">
                    <div className="lg:col-span-7 min-w-0">
                        <div className="mb-4 sm:mb-6 md:mb-8 font-['Geist_Mono'] text-[11px] sm:text-[12px] md:text-[14px] text-[#c9c6c5] tracking-widest uppercase">
                // Aspiring Backend Architect
                        </div>
                        <h1 className="font-['Geist_Mono'] text-[36px] xs:text-[44px] sm:text-[56px] md:text-[90px] lg:text-[120px] leading-[1] sm:leading-[0.95] md:leading-[0.9] font-bold uppercase tracking-tight sm:tracking-tighter mb-6 sm:mb-8 md:mb-16 break-words">
                            <span className="block text-[#e2e1eb]">Building the</span>
                            <span className="block text-[#e2e1eb]/30">Invisible</span>
                            <span className="block text-[#e2e1eb]">Infrastructure.</span>
                        </h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-8 md:gap-12">
                            <button className="w-full md:w-auto bg-[#c9c6c5] text-[#0c0e14] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-['Geist_Mono'] text-[12px] sm:text-[13px] md:text-[14px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                                Execute_Init()
                            </button>
                            <p className="max-w-sm font-['Inter'] text-[14px] sm:text-[15px] md:text-[16px] text-[#c4c7c7] border-l border-[#444748] pl-5 sm:pl-6">
                                Specializing in high-throughput distributed systems and cloud-native orchestration.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5"></div>
                </div>
            </div>
        </section>
    )
}