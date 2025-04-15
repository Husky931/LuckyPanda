const Resourses = () => {
    return (
        <div className="mt-6 flex-1 md:mt-0">
            <h2 className="mb-4 text-sm font-semibold uppercase text-white md:mb-6">
                Resources
            </h2>
            <ul className="font-medium text-gray-400">
                <li className="mb-2 md:mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                        About Us
                    </a>
                </li>
                <li className="mb-2 md:mb-4">
                    <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                    >
                        Contact
                    </a>
                </li>
                <li className="mb-2 md:mb-4">
                    <a href="#faq" className="hover:underline">
                        FAQs
                    </a>
                </li>
                <li>
                    <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                    >
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Resourses
