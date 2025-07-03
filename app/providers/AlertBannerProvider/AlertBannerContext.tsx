"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface AlertContextType {
    isAlertVisible: boolean
    setIsAlertVisible: (visible: boolean) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(true)

    return (
        <AlertContext.Provider value={{ isAlertVisible, setIsAlertVisible }}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => {
    const context = useContext(AlertContext)
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider")
    }
    return context
}
