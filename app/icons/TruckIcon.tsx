const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-7 w-7 shrink-0"
        {...props}
    >
        <path d="M3 13h13V6H3v7z" />
        <path d="M16 13h3l3 3v3h-6v-6z" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
)

export default TruckIcon
