import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../../../components/button"

interface InviteGuestsModalProps {
    closeGuestsModal: () => void
    emailsToInvite: string[]
    removeEmailFromInvites: (email: string) => void
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestModal({ addNewEmailToInvite, closeGuestsModal, emailsToInvite, removeEmailFromInvites }: InviteGuestsModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                        <button type="button" onClick={closeGuestsModal} >
                            <X className="size-5 text-zinc-400 hover:text-zinc-600" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400 text-left">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {emailsToInvite.map(email => {
                        return (
                            <div key={email} className="bg-zinc-800 py-1.5 px-2.5 rounded-md flex items-center gap-2">
                                <samp className="text-zinc-300">{email}</samp>
                                <button type="button" onClick={() => removeEmailFromInvites(email)}>
                                    <X className="size-4 text-zinc-400 hover:text-zinc-600" />
                                </button>
                            </div>
                        )
                    })}


                </div>

                <div className="bg-zinc-800 w-full h-px" />

                <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2 ">
                    <AtSign className="text-zinc-400 size-5" />
                    <input
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        type="email"
                        name="email"
                        placeholder="Digite o e-mail do convidado" />
                    <Button>
                        Convidar
                        <Plus className="size-5" />
                    </Button>
                </form>
            </div>

        </div>
    )
}