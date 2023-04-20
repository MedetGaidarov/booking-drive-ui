import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { FormControl, FormLabel, TextField } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';

import '../../styles/custom-datepicker.module.css';

interface Props {
  selectedDate: Date;
  handleDateChange: ReactDatePickerProps['onChange'];
}

const BookingDate: React.FC<Props> = ({ selectedDate, handleDateChange }) => {
  const minDate: Date = new Date();

  return (
    <FormControl fullWidth margin="normal">
      <FormLabel>Date:</FormLabel>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={minDate}
        customInput={<TextField />}
      />
    </FormControl>
  );
};

export default BookingDate;
