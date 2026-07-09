
import EducationCard from './EducationCard'

export default function Education({ id, certifications }) {
    return (

        <section className="py-32 bg-[#0c0e14] border-y border-[#444748]" id={id}>
            <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
                <div className="flex items-start gap-12 mb-20">
                    <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] opacity-40">01_CERT</div>
                    <div>
                        <h2 className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-4 tracking-[0.3em]">PROTOCOL_CERTIFICATION</h2>
                        <h3 className="font-['Geist_Mono'] text-[32px] font-semibold">Educational &amp; Regulatory Compliance</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <EducationCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>
        </section >
    )

}
