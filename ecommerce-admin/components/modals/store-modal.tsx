"use client"

import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Se utiliza la libreria zod que proporciona herramientas para la validacion de esquemas en TypeScript. Y lo que hace en este caso es comprobar que por lo menos tenga 1 de longitud el string
const formSchema = z.object({
    name: z.string().min(1),
});


export const StoreModal = () => {
    // Importa el componente del objeto useStoreModal.
    const storeModal = useStoreModal();

    // Configura un formulario utilizando el hook useForm y se usa para validar
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    // Define una funcion de manejador para el evento onSubmit del formulario
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        // TODO: Create Store
    }

    // Devuelve el componente Modal con un formulario para crear la tienda.
    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-Commerce" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button
                                    variant="outline"
                                    onClick={storeModal.onClose}>
                                    Cancell
                                </Button>
                                <Button type="submit">Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}