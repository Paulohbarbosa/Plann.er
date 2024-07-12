import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationDateStepProps {
    isGuestsInputOpen: boolean,
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    setEventStartAndEndDates: (dates: DateRange | undefined) => void
    eventStartAndEndDates: DateRange | undefined
}
export function DestinationDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput, setDestination, setEventStartAndEndDates, eventStartAndEndDates }: DestinationDateStepProps) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    // const [eventStarAndEndDate, setEventStarAndEndDate] = useState<DateRange | undefined>();

    function openDatePicker() {
        return setIsDatePickerOpen(true);
    }
    function closeDatePicker() {
        return setIsDatePickerOpen(false);
    }

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL")) : null
    return (
        <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape justify-between gap-2 ">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input 
                    disabled={isGuestsInputOpen} 
                    type="text" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none disabled:text-zinc-600" placeholder="Para onde você vai?"
                    onChange={event => setDestination(event.target.value)}
                />
            </div>

            <div className="flex gap-3 items-center">
                <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-zinc-400 outline-none disabled:text-zinc-600">
                    <Calendar className="size-5 " />
                    <samp className="text-lg">
                        {displayedDate || 'Quando?'}
                    </samp>
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
            {isDatePickerOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">Selecione a data</h2>
                                <button type="button" onClick={closeDatePicker} >
                                    <X className="size-5 text-zinc-400 hover:text-zinc-600" />
                                </button>
                            </div>
                        </div>
                        <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
                    </div>
                </div>
            )}
        </div>

    )
}