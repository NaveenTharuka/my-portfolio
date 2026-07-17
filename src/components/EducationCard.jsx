import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function EducationCard({ cert }) {
    return (
        <div className="border border-[#444748] bg-[#1a1b22] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] relative">
            <div>
                <span className="text-[#c9c6c5] font-['Geist_Mono'] text-[14px] block mb-8">{cert.year}</span>
                <h4 className="font-['Geist_Mono'] text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-3 sm:mb-4">{cert.title}</h4>
                <p className="text-[#c4c7c7] font-['Inter'] text-[16px]">{cert.issuer}</p>
            </div>
            <div className="pt-8 border-t border-[#444748] flex items-center gap-2 text-[#c9c6c5] font-['Geist_Mono'] text-[14px] uppercase tracking-tighter">
                {cert.status || cert.focus}
                {cert.status && <CheckBadgeIcon className="w-4 h-4" />}
            </div>
        </div>
    )
}