import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/guests";
import { Activities } from "./components/activities";
import { MyHeader } from "./components/my-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
    const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(false);

    function openCreateActiveModal() {
        setIsCreateActiveModalOpen(true);
    }
    function closeCreateActiveModal() {
        setIsCreateActiveModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <MyHeader />
            <main className="flex gap-16 px-6">
                <section className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <Button onClick={openCreateActiveModal} >
                            <Plus className="size-5" />
                            <span className="max-lg:hidden">Cadastrar Atividade</span>
                        </Button>
                    </div>
                    <Activities />
                </section>
                <aside className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className="w-full h-px bg-zinc-800" />
                    <Guests />
                </aside>
            </main>

            {isCreateActiveModalOpen && (
                <CreateActivityModal closeCreateActiveModal={closeCreateActiveModal} />
            )}
        </div>
    )
}