import CandyShot from "@/app/components/CandyShot"
import Bottom from "./components/Bottom"
import Company from "./components/Company"
import { AcceptedPayments } from "./components/lastSection/AcceptedPayments"
import { Social } from "./components/lastSection/Social"
import Resourses from "./components/Resourses"
import Sections from "./components/Sections"
import MasonryGallery from "@/app/components/MasonryGallery"

export const Footer = () => {
    return (
        <footer>
            <MasonryGallery />
            <CandyShot />
            <section className="flex justify-center bg-primary-red py-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="gap-x-8 md:flex md:justify-around">
                    <Company />
                    <div className="flex flex-1 flex-col md:flex-row">
                        <Resourses />
                        <Sections />
                    </div>

                    <div className="items-between mt-6 flex-1 justify-center md:mt-0">
                        <ul className="font-medium text-white">
                            <Social />
                            <AcceptedPayments />
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-white/10 sm:mx-auto lg:my-8" />
                <Bottom />
            </div>
        </section>
        </footer>
   
    )
}
