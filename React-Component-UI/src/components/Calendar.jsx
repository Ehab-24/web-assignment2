import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const Calendar = () => {
    const [date, setDate] = useState(new Date(Date.now() - 5 * 24 * 60 * 60 * 1000));

    return (
        <div className="w-full max-w-sm min-h-max chart p-4 border rounded-lg">
            <Flatpickr
                value={date}
                onChange={(selectedDate) => setDate(selectedDate)}
                options={{
                    inline: true,
                    prevArrow: "<span title='Previous month'>&laquo;</span>",
                    nextArrow: "<span title='Next month'>&raquo;</span>",
                }}
                className="w-full min-h-max bg-white rounded-lg shadow"
            />
        </div>
    );
};

export default Calendar;
