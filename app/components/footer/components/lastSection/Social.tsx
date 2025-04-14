import Image from "next/image"

export const Social = () => {
    return (
        <li className="mb-8">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
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
            </div>
        </li>
    )
}
