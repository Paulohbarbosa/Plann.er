import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./components/invite-guests-modal";
import { ConfirmTripModal } from "./components/confirm-trip-modal";
import { DestinationDateStep } from "./components/destination-and-date-step";
import { InviteGuestsSteps } from "./components/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function Home() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()
    
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
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }
    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true);
    }
    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false);
    }
    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(destination,' ', eventStartAndEndDates,' ', emailsToInvite, ' ', ownerEmail,' ', ownerName);
        if(!destination){
            return
        }
        if(!eventStartAndEndDates?.from || !eventStartAndEndDates?.to){
            return
        }
        if(emailsToInvite.length === 0){
            return
        }
        if(!ownerName || !ownerEmail){
            return
        }

        const response = await api.post('/trips', {
            destination,
            starts_at: eventStartAndEndDates.from,
            ends_at: eventStartAndEndDates.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: ownerEmail
        })

        const { tripId } = response.data

        navigate(`/trips/${tripId}`)
        // navigate('/trips/123')
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
                    <DestinationDateStep
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputOpen={isGuestsInputOpen}
                        openGuestsInput={openGuestsInput}
                        setDestination={setDestination}
                        setEventStartAndEndDates={setEventStartAndEndDates}
                        eventStartAndEndDates={eventStartAndEndDates}
                    />

                    {isGuestsInputOpen && (
                       <InviteGuestsSteps
                       emailsToInvite={emailsToInvite}
                       openConfirmTripModal={openConfirmTripModal}
                       openGuestsModal={openGuestsModal}
                        />
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela Plann.er você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
                </p>
                {isGuestsModalOpen && (
                    <InviteGuestModal
                        addNewEmailToInvite={addNewEmailToInvite}
                        emailsToInvite={emailsToInvite}
                        closeGuestsModal={closeGuestsModal}
                        removeEmailFromInvites={removeEmailFromInvites}
                    />
                )}

                {isConfirmTripModalOpen && (
                    <ConfirmTripModal
                        closeConfirmTripModal={closeConfirmTripModal}
                        createTrip={createTrip}
                        setOwnerName={setOwnerName}
                        setOwnerEmail={setOwnerEmail}
                    />
                )}
            </div>
        </div>
    )
}