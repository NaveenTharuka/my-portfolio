import {
    CubeIcon,
    ComputerDesktopIcon,
    RocketLaunchIcon,
    BeakerIcon,
    DocumentMagnifyingGlassIcon,
    LinkIcon,
    PlayCircleIcon,
    CheckBadgeIcon,
    ArrowTopRightOnSquareIcon,
    Squares2X2Icon,
    ViewfinderCircleIcon,
    CloudIcon,
    AcademicCapIcon,
    ShieldCheckIcon,
    CpuChipIcon,
    MusicalNoteIcon
} from '@heroicons/react/24/outline'
import InterestCard from './InterestCard'

export default function Interests({ id, interests }) {
    return (
        <section className="py-32 bg-[#0c0e14] border-b border-[#444748]" id={id}>
            <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
                <div className="flex items-start gap-12 mb-20">
                    <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">01.5_INT</div>
                    <div>
                        <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">AREAS_OF_INTEREST</h2>
                        <h3 className="font-['Geist_Mono'] text-[32px] font-semibold">Specialized Domains &amp; Research</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#444748] border border-[#444748]">
                    {interests.map((item) => (
                        <InterestCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}