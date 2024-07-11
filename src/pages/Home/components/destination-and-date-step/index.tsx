import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../../components/button";
import { useState } from "react";
interface DestinationDateStepProps {
    isGuestsInputOpen: boolean,
    closeGuestsInput: () => void
    openGuestsInput: () => void
}
export function DestinationDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput }: DestinationDateStepProps) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    function openDatePicker(){
        return setIsDatePickerOpen(true);
    }
    function closeDatePicker(){
        return setIsDatePickerOpen(false);
    }
    return (
        <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape justify-between gap-2 ">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input disabled={isGuestsInputOpen} type="text" className="bg-transparent text-lg placeholder-zinc-400 outline-none disabled:text-zinc-600" placeholder="Para onde você vai?" />
            </div>

            <div className="flex gap-3 items-center">
                <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 w-28  text-zinc-400 outline-none">
                    <Calendar className="size-5 " />
                    <samp className="text-lg disabled:text-zinc-600">Quando?</samp>
                </button>

                <div className="w-px h-6 bg-zinc-800" />


                {isGuestsInputOpen ? (
                    <Button onClick={closeGuestsInput} variant="secondary">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </Button>
                ) : (
                    <Button onClick={openGuestsInput}>
                        Continuar
                        <ArrowRight className="size-5" />
                    </Button>
                )}


            </div>
        </div>
    )
}