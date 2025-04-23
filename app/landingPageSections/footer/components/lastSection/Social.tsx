import Image from "next/image"

export const Social = () => {
    return (
        <li className="mb-8">
            <div className="flex items-center">
                <Image
                    src="/logo/logo.png"
                    alt="Lucky Panda Treats Logo"
                    width={48}
                    height={48}
                    className="me-3 h-8 w-auto"
                />
                <span className="self-center whitespace-nowrap text-lg font-semibold text-white">
                    Lucky Panda Treats
                </span>
            </div>
            <div className="mt-4 flex">
                <a
                    href="https://www.facebook.com/profile.php?id=61573625518166"
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors duration-300 hover:border-white hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
        12.42-50.06 52.24-50.06H293V6.26S275.36 
        0 256.13 0c-73.7 0-121.36 44.38-121.36 
        124.72v70.62H89.09V288h45.68v224h91.86V288z"
                        />
                    </svg>
                    <span className="sr-only">Facebook</span>
                </a>
                <a
                    href="https://www.instagram.com/luckypandatreats"
                    target="_blank"
                    className="ms-5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors duration-300 hover:border-white hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                </a>

                <a
                    href="https://www.tiktok.com/@luckypandatreats"
                    target="_blank"
                    className="ms-5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors duration-300 hover:border-white hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M232 72.6v39.4a87.9 87.9 0 01-48-14.1v61.1a72 
        72 0 11-72-72 70.6 70.6 0 0122.7 3.6v43.3a28.7 
        28.7 0 00-8.7-1.4 29.3 29.3 0 1029.3 29.3V24h35.6a52.3 
        52.3 0 0041.1 48.6z"
                        />
                    </svg>
                    <span className="sr-only">TikTok</span>
                </a>
                <a
                    href="https://www.youtube.com/@luckypandatreats"
                    target="_blank"
                    className="ms-5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors duration-300 hover:border-white hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 15.5v-7l6 3.5-6 3.5Zm13-3.5c0-2.21-.18-3.52-.5-4.47a2.94 2.94 0 0 0-2.03-2.02C19.52 5.18 18.21 5 16 5H8c-2.21 0-3.52.18-4.47.5A2.94 2.94 0 0 0 1.5 7.53C1.18 8.48 1 9.79 1 12c0 2.21.18 3.52.5 4.47a2.94 2.94 0 0 0 2.03 2.03C4.48 18.82 5.79 19 8 19h8c2.21 0 3.52-.18 4.47-.5a2.94 2.94 0 0 0 2.03-2.03c.32-.95.5-2.26.5-4.47Z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                </a>
                {/* <a
                    // href="https://www.pinterest.com/LuckyPandaTreats/"
                    target="_blank"
                    className="ms-5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors duration-300 hover:border-white hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.04 2C6.93 2 3.5 5.35 3.5 9.59c0 2.12 1.13 4.75 2.95 5.6.28.13.43.07.5-.2.05-.22.28-.92.39-1.27a.45.45 0 0 0-.1-.44c-.6-.73-1.06-2.06-1.06-3.31 0-3.19 2.42-6.06 6.34-6.06 3.45 0 5.96 2.3 5.96 5.6 0 3.7-1.85 6.27-4.25 6.27-1.32 0-2.31-1.09-1.99-2.43.38-1.59 1.1-3.3 1.1-4.45 0-1.02-.55-1.87-1.7-1.87-1.34 0-2.42 1.38-2.42 3.22 0 1.17.4 1.96.4 1.96s-1.37 5.78-1.62 6.79a10.55 10.55 0 0 0-.05 3.25c.03.14.19.17.26.07.11-.14 1.49-1.96 1.96-3.76.13-.5.73-2.88.73-2.88.36.7 1.4 1.3 2.5 1.3 3.3 0 5.52-3 5.52-7.01C20.54 5.64 16.77 2 12.04 2Z" />
                    </svg>
                    <span className="sr-only">Pinterest</span>
                </a> */}
            </div>
        </li>
    )
}
