import {
    CheckBadgeIcon
} from '@heroicons/react/24/outline'

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
                    {certifications.map((cert, index) => (
                        <div key={index} className="border border-[#444748] bg-[#1a1b22] p-10 flex flex-col justify-between min-h-[320px] relative">
                            <div>
                                <span className="text-[#c9c6c5] font-['Geist_Mono'] text-[14px] block mb-8">{cert.year}</span>
                                <h4 className="font-['Geist_Mono'] text-[24px] font-semibold mb-4">{cert.title}</h4>
                                <p className="text-[#c4c7c7] font-['Inter'] text-[16px]">{cert.issuer}</p>
                            </div>
                            <div className="pt-8 border-t border-[#444748] flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-tighter">
                                {cert.status || cert.focus}
                                {cert.status && <CheckBadgeIcon className="w-4 h-4" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )

}
