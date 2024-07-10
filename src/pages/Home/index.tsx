import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react";
import { FormEvent, useState } from "react";

export function Home() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [emailsToInvite, setEmailsToInvite] = useState([
        'paulo@gmail.com', 'jessica.lima44@gmail.com'
    ]);

    function openGuestsInput() {
        setIsGuestsInputOpen(true);
    }
    function closeGuestsInput() {
        setIsGuestsInputOpen(false);
    }
    function openGuestsModal() {
        setIsGuestsModalOpen(true);
    }
    function closeGuestsModal() {
        setIsGuestsModalOpen(false);
    }
    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')?.toString();

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([...emailsToInvite, email])

        event.currentTarget.reset();
    }
    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !==  emailToRemove)

        setEmailsToInvite(newEmailList)
    }
    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-2">
                        <img src="/logo.svg" alt="plann.er" className="h-9" />
                        <span className="text-3xl font-semibold">plann.er</span>
                    </div>
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape justify-between gap-2 ">
                        <div className="flex items-center gap-2 flex-1">
                            <MapPin className="size-5 text-zinc-400" />
                            <input disabled={isGuestsInputOpen} type="text" className="bg-transparent text-lg placeholder-zinc-400 outline-none disabled:text-zinc-600" placeholder="Para onde você vai?" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2">
                                <Calendar className="size-5 text-zinc-400" />
                                <input disabled={isGuestsInputOpen} type="text" className="bg-transparent text-lg placeholder-zinc-400 w-28 outline-none border-solid border-e-2 border-zinc-800 disabled:text-zinc-600" placeholder="Quando?" />
                            </div>

                            {isGuestsInputOpen ?
                                (<button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                                    Alterar local/data
                                    <Settings2 className="size-5" />
                                </button>) : (
                                    <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                                        Continuar
                                        <ArrowRight className="size-5" />
                                    </button>
                                )}


                        </div>
                    </div>

                    {isGuestsInputOpen &&
                        (<div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape justify-between gap-2 ">
                            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                                <UserRoundPlus className="size-5 text-zinc-400" />
                                <samp className="text-zinc-400 text-xl">Quem estará na viagem?</samp>
                            </button>

                            <div className="flex gap-2 items-center">

                                <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                                    Confirmar viagem
                                    <ArrowRight className="size-5" />
                                </button>
                            </div>
                        </div>)}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela Plann.er você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
                </p>
                {isGuestsModalOpen && (
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
                                            <button type="button" onClick={()=> removeEmailFromInvites(email)}>
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
                                <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                                    Convidar
                                    <Plus className="size-5" />
                                </button>
                            </form>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}