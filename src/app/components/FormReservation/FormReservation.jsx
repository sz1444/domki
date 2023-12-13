import ReactDatePicker from "react-datepicker";
import { ButtonMain } from "../ButtonMain/ButtonMain";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { DAYS, MONTHS } from "@/app/static/date";
import { sendMailReservation } from "@/app/api/sendMailReservation";

const locale = {
  localize: {
    day: n => DAYS[n],
    month: n => MONTHS[n]
  },
  formatLong: {
    date: () => 'mm/dd/yyyy'
  }
}

export function FormReservation({setIsLoading, setSendStatus}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleSubmit = e => {
        e.preventDefault();

        sendMailReservation(endDate, startDate, name, email, phone, setSendStatus, setIsLoading);
    }

    const handleChange = (value, setter) => {
        setter(value);
    }

    return (
        <form
            action=""
            className="flex flex-wrap -m-1"
            onSubmit={e => handleSubmit(e)}
        >
            <label htmlFor="name" className="flex flex-col text-xs w-full p-2">
                <span className="mb-1 text-gray-400">Imię i nazwisko*</span>
                <input
                    value={name}
                    onChange={e => handleChange(e.target.value, setName)}
                    type="text"
                    name="name"
                    className={`border p-3 shadow-md`}
                />
            </label>
            <label htmlFor="name" className="flex flex-col text-xs w-full md:w-1/2 p-2">
                <span className="mb-1 text-gray-400">E-mail*</span>
                <input
                    type="email"
                    name="email"
                    className="border p-3 shadow-md"
                    value={email}
                    onChange={e => handleChange(e.target.value, setEmail)}
                />
            </label>
            <label htmlFor="name" className="flex flex-col text-xs w-full md:w-1/2 p-2">
                <span className="mb-1 text-gray-400">Telefon*</span>
                <input
                    type="text"
                    name="phone"
                    className="border p-3 shadow-md"
                    value={phone}
                    onChange={e => handleChange(e.target.value, setPhone)}
                />
            </label>
            <label htmlFor="name" className="flex flex-col  text-xs w-full p-2">
                <span className="mb-1 text-gray-400">Data pobytu*</span>
                <ReactDatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                    className="border p-3 shadow-md w-[100%]"
                    locale={locale}
                    calendarStartDay={1}
                />
            </label>
            <label className="px-2 w-full">
                <ButtonMain className="md:w-full">Rezerwuj</ButtonMain>
            </label>
        </form>
    )
}