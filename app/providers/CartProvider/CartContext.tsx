"use client"

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
    type Dispatch,
    type SetStateAction
} from "react"

type SelectedPlan = {
    id: string
    title: string
    price: string
    billedLabel?: string
    isOneTime?: boolean
}

type CartContextValue = {
    selectedPlan?: SelectedPlan
    setSelectedPlan: Dispatch<SetStateAction<SelectedPlan | undefined>>
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | undefined>()

    return (
        <CartContext.Provider value={{ selectedPlan, setSelectedPlan }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return ctx
}

