export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center blueprint-grid" id="home">
            <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] md:px-[64px] w-full py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-24">
                    <div className="lg:col-span-7">
                        <div className="mb-8 font-['Geist_Mono'] text-[14px] text-[#c9c6c5] tracking-widest uppercase">
                // Aspiring Backend Architect
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
    )
}