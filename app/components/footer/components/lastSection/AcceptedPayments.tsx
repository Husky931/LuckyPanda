export const AcceptedPayments = () => {
    return (
        <li className="mb-4">
            <div className="flex items-center text-sm font-semibold uppercase text-white">
                We accept
            </div>
            <div className="mt-4 flex">
                <img
                    src="/cards_payments/paypal.webp"
                    className="me-3 h-8"
                    alt="FlowBite Logo"
                />
                <span className="sr-only">Facebook page</span>
            </div>
        </li>
    )
}
