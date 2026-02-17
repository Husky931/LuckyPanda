const SnackBrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-7 w-7 shrink-0"
        {...props}
    >
        <path d="M4 6l2 12h12l2-12H4z" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <path d="M9 14h6" />
    </svg>
)

export default SnackBrainIcon
