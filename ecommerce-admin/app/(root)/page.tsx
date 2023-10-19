"use client"

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  // Con esto hace que mientras que no hagas lo que pone en el modal no se pueda cerrar.
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    // Pagina principal, lo que se muestra aqui es todo lo que se ve en la pagina.
    <div className='p-4'>
      Root Page
    </div>
  )
}

export default SetupPage;