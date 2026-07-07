export default function Footer() {
    return (
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
    )
}