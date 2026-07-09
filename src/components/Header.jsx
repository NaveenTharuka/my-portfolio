import { CloudIcon } from "@heroicons/react/24/outline";

export default function Header({ activeSection, navLinks }) {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#0c0e14]/80 backdrop-blur-xl border-b border-[#444748]">
            <div className="flex justify-between items-center h-20 px-[20px] md:px-[64px] max-w-[1440px] mx-auto">
                <div className="font-['Geist_Mono'] text-[14px] font-bold tracking-[0.3em] text-[#c9c6c5]">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#c9c6c5] rounded-full"></span>
                        SYSTEM.ROOT
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-12 font-['Geist_Mono'] text-[14px] uppercase tracking-wider">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${activeSection === link.href.substring(1)
                                ? 'text-[#c9c6c5] border-b-2 border-[#c9c6c5] pb-1'
                                : 'text-[#c4c7c7] hover:text-[#c9c6c5]'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-6">
                    <button className="bg-[#c9c6c5] text-[#0c0e14] px-8 py-2.5 rounded-none font-['Geist_Mono'] text-[14px] uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                        Connect
                    </button>
                </div>
            </div>
        </header>
    )
}