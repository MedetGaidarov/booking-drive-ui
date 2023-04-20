import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  selectedTime: string;
  handleTimeChange: (event: SelectChangeEvent<string>) => void;
}

const BookingTime: React.FC<Props> = ({ selectedTime, handleTimeChange }) => {
  const timeSlots = [
    '10:00 PM',
    '11:00 PM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
  ];

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="time-label">Time:</InputLabel>
      <Select
        labelId="time-label"
        value={selectedTime}
        onChange={handleTimeChange}
        required
      >
        {timeSlots.map((time, index) => (
          <MenuItem key={index} value={time}>
            {time}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BookingTime;
