"use client"

import { useEffect, useState } from "react"

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    // Usa el hook useState para gestionar el estado de montaje del componente
    const [isMounted, setIsMounted] = useState(false);

    // Utiliza el hook useEffect para ejecutar el codigo despues de que el componente se monta
    useEffect(() => {
         // Cuando se monta pone que se ha montado
        setIsMounted(true);
    }, []);

    // Si el componente no esta montado devuelve null
    if (!isMounted) {
        return null
    }

    // Si el componente esta montado renderiza el StoreModal.
    return (
        <>
        <StoreModal />
        </>
    );
}