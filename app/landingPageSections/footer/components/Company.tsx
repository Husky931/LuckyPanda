"use client"

const Company = () => {
    const sentEmail = () => {
        window.location.href = "mailto:customer@luckypandatreats.com"
    }

    return (
        <div className="flex-1">
            <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white md:mb-6">
                    Contact us
                </h2>
                <div
                    className="mb-2 flex-1 cursor-pointer font-medium text-gray-400 underline md:mb-4"
                    onClick={() => sentEmail()}
                >
                    customer@luckypandatreats.com
                </div>
                <div className="mb-2 flex-1 font-medium text-gray-400 md:mb-4">
                    Monday - Friday 9 a.m. - 5 p.m. EST
                </div>
                <div className="mb-2 flex-1 font-medium text-gray-400 md:mb-4">
                    Shimen 2nd Road, Building 3
                    <br />
                    Lane 333, 30B
                    <br />
                    Shanghai 200041
                    <br />
                    China
                </div>
            </div>
        </div>
    )
}

export default Company
