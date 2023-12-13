export function buildMaileReservation(name, email, phone, dateReservation) {
    return (
        `
            <p><b>Nowa Rezerwacja</b></p>
            <p>Imię nazwisko: <b>${name}</b></p>
            <p>E-mail: <b>${email}</b></p>
            <p>Telefon: <b>${phone}</b></p>
            <p>Data rezerwacji: <b>${dateReservation}</b></p>
        `
    )
}