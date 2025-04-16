"use client"

import { useEffect } from "react"

interface SuccessModalProps {
    isOpen: boolean
    message: string
    onClose: () => void
}

const SuccessModal = ({ isOpen, message, onClose }: SuccessModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-text-redPrimary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                        Success!
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{message}</p>
                </div>
                <div className="text-center">
                    <button
                        onClick={onClose}
                        className="rounded-md bg-primary-red px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal
