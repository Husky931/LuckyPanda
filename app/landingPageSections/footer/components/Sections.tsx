const Sections = () => {
    return (
        <div className="mt-6 flex-1 items-center justify-center md:mt-0">
            <h2 className="mb-4 text-sm font-semibold uppercase text-white md:mb-6">
                Section
            </h2>
            <ul className="font-medium text-gray-400">
                <li className="mb-2 md:mb-4">
                    <a href="#whatis" className="hover:underline">
                        What is
                    </a>
                </li>
                <li className="mb-2 md:mb-4">
                    <a href="#howitworks" className="hover:underline">
                        How it Works
                    </a>
                </li>
                <li className="mb-2 md:mb-4">
                    <a href="#whatsinside" className="hover:underline">
                        Whats Inside
                    </a>
                </li>
                <li className="mb-2 md:mb-4">
                    <a href="#products" className="hover:underline">
                        Products
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sections
