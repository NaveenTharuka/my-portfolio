export default function InterestCard({ item }) {
    return (
        <div className="bg-[#0c0e14] p-10 hover:bg-[#1a1b22] transition-colors group">
            <div className="font-['Geist_Mono'] text-[14px] text-[#c9c6c5] mb-6">{item.id}</div>
            <h4 className="font-['Geist_Mono'] text-[24px] font-semibold mb-4">{item.title}</h4>
            <p className="text-[#c4c7c7] font-['Inter'] text-[16px]">{item.description}</p>
        </div>
    )
}