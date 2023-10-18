
const colors: string[] = [
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-500",
    "bg-pink-600",
    "bg-cyan-400",
    "bg-emerald-700",
    "bg-indigo-600",
    "bg-sky-600"
]

const Card = ({title, value}: {title: string, value: string|number})=>{
    return(
        <div className={`h-24 ${colors[Math.floor(Math.random() * colors.length)]} rounded-lg shadow flex items-center justify-center`}>
            <div className="text-center text-white">
                <p className="text-lg font-semibold">{title}</p>
                <span>{value}</span>
            </div>
        </div>
    )
}

export default Card