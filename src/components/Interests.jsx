import InterestCard from './InterestCard'

export default function Interests({ id, interests }) {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#0c0e14] border-b border-[#444748]" id={id}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[20px] md:px-[64px]">
                <div className="flex items-start gap-5 sm:gap-8 md:gap-12 mb-10 sm:mb-14 md:mb-20">
                    <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">03_INT</div>
                    <div>
                        <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">AREAS_OF_INTEREST</h2>
                        <h3 className="font-['Geist_Mono'] text-[22px] sm:text-[26px] md:text-[32px] font-semibold break-words">Specialized Domains &amp; Research</h3>
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