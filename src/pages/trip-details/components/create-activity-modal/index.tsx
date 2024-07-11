import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../../components/button";

interface CreateActivityModalProps{
    closeCreateActiveModal: ()  => void;
}

export function CreateActivityModal({closeCreateActiveModal}: CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                        <button type="button" onClick={closeCreateActiveModal} >
                            <X className="size-5 text-zinc-400 hover:text-zinc-600" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400 text-left">Todos convidados podem visualizar as atividades.</p>
                </div>
                <form className="space-y-3" >
                    <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2 ">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            name="name"
                            placeholder="Qual Atividade?" />
                    </div>
                    <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2 ">
                        <Calendar className="text-zinc-400 size-5" />
                        <input
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            type="datetime-local"
                            name="occurs_at"
                            placeholder="Data e horário" />
                    </div>

                    <Button size="full">
                    Salvar Atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}