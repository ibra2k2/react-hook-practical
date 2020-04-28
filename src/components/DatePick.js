import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePick() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <h1>Date Picker</h1>
            <DatePicker 
            dateFormat = 'dd/MM/yyyy' 
            minDate = {new Date()} 
            filterDate = {(date)=> date.getDay() !== 6 && date.getDay() !== 0}
            selected = {selectedDate} 
            onChange = {(date) => setSelectedDate(date)}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePick
