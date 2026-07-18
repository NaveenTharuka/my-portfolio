import EducationCard from './EducationCard'

export default function Education({ id, certifications }) {
    return (

        <section className="py-16 sm:py-20 md:py-32 bg-[#0c0e14] border-y border-[#444748] overflow-x-hidden" id={id}>
            <div className="max-w-[1440px] mx-auto px-6 sm:px-[20px] md:px-[64px]">
                <div className="flex items-start gap-5 sm:gap-8 md:gap-12 mb-10 sm:mb-14 md:mb-20">
                    <div className="font-['Geist_Mono'] text-[12px] sm:text-[13px] md:text-[14px] text-[#c9c6c5] opacity-40 shrink-0">02_CERT</div>
                    <div className="min-w-0">
                        <h2 className="font-['Geist_Mono'] text-[12px] sm:text-[13px] md:text-[14px] text-[#c9c6c5] mb-3 sm:mb-4 tracking-[0.2em] sm:tracking-[0.3em]">PROTOCOL_CERTIFICATION</h2>
                        <h3 className="font-['Geist_Mono'] text-[22px] sm:text-[26px] md:text-[32px] font-semibold break-words">Educational &amp; Regulatory Compliance</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {certifications.map((cert) => (
                        <EducationCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    )

}