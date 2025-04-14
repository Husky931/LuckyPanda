import Image from "next/image"

export const AcceptedPayments = () => {
    return (
        <li className="mb-4">
            <div className="flex items-center text-sm font-semibold uppercase text-white">
                We accept
            </div>
            <div className="mt-4 flex items-center">
                <Image
                    src="/cards_payments/paypal.webp"
                    alt="PayPal"
                    width={32}
                    height={32}
                    className="me-3 h-8 w-auto"
                />
            </div>
        </li>
    )
}
