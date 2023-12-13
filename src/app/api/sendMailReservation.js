import { formatDate } from "../static/date";
import { buildMaileReservation } from "../utils/buildMaileReservation";

export function sendMailReservation(endDate, startDate, name, email, phone, setSendStatus, setIsLoading) {
    const dateReservation = endDate ?  `${formatDate(startDate)} - ${formatDate(endDate)}` : formatDate(startDate);

    setIsLoading(true);

    fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
            subject: 'Rezerwacja',
            message: buildMaileReservation(name, email, phone, dateReservation)
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            setSendStatus(<p className="text-green-900">Pomyślnie wysłano prośbę o rezerwację domku!</p>)
        } else {
            setSendStatus(<p className="text-red-900">Wystąpił nieoczekiwany błąd! Spróbuj ponownie później.</p>)
        }

        setIsLoading(false)
    });
}