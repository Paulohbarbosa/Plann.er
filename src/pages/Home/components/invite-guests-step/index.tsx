import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../../components/button";

interface InviteGuestsStepsProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsSteps({ emailsToInvite, openConfirmTripModal, openGuestsModal }: InviteGuestsStepsProps) {
    return (
        <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape justify-between gap-2 ">
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                    <samp className="text-zinc-100 text-xl">
                        {emailsToInvite.length} pessoa(s) convidada(s)
                    </samp>
                ) : (
                    <samp className="text-zinc-400 text-xl">
                        Quem estará na viagem?
                    </samp>
                )}
            </button>

            <div className="flex gap-2 items-center">
                <Button onClick={openConfirmTripModal}>
                    Confirmar viagem
                    <ArrowRight className="size-5" />
                </Button>
            </div>
        </div>
    )
}