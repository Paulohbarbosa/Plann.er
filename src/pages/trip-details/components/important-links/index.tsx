import { Link2, Plus } from "lucide-react";
import { Button } from "../../../../components/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
                        <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104700011</span>
                    </div>
                    <Link2 className="text-zinc-400 size-5 hover:text-zinc-200" />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Regras da casa</span>
                        <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200
                                    ">https://www.notion.com/pages/1047000112354648336?</span>
                    </div>
                    <Link2 className="text-zinc-400 size-5 hover:text-zinc-200" />
                </div>

            </div>
            <Button variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}