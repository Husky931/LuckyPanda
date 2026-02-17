import AmericanExpress from "@/app/components/icons/AmericanExpress"
import ApplePay from "@/app/components/icons/ApplePay"
import Mastercard from "@/app/components/icons/MasterCard"
import Visa from "@/app/components/icons/Visa"

export const AcceptedPayments = () => {
    return (
        <li className="mb-4">
            <div className="flex items-center text-sm font-semibold uppercase text-white">
                Accepted Payments
            </div>
            <div className="mt-4 flex items-center">
                <div className="p-[5px]">
                    <Visa />
                </div>
                <div className="p-[5px]">
                    <Mastercard />
                </div>
                <div className="p-[5px]">
                    <ApplePay />
                </div>
                <div className="p-[5px]">
                    <AmericanExpress />
                </div>
            </div>
        </li>
    )
}
