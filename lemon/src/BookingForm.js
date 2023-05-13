import { useState } from "react";
import "./BookingForm.css"


function BookingForm() {

    const [date,setDate]=useState("")
    const [number,setNumber]=useState(1)
    const [occasion,setOccasion]=useState("")
    return (
        <div className="book">
        <form >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"></input>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="submit" type="submit" value="Make Your reservation"></input>
        </form>
        </div>
    );
}

export default BookingForm;