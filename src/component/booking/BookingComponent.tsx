import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Button,
  Container,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import BookingDate from './BookingDate';
import BookingTime from './BookingTime';
import BookingInfo from './BookingInfo';
import "react-datepicker/dist/react-datepicker.css";


interface Props {}

const BookingComponent: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('10:00 PM');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleDateChange = (date: Date | [Date, Date] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    setSelectedTime(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Your booking logic here
    console.log('Selected date:', selectedDate);
    console.log('Selected time:', selectedTime);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        Booking Component
      </Typography>
      <form onSubmit={handleSubmit}>
        <BookingDate
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
        <BookingTime
          selectedTime={selectedTime}
          handleTimeChange={handleTimeChange}
        />
        <BookingInfo
          name={name}
          email={email}
          phone={phone}
          handleInputChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Book
        </Button>
      </form>
    </Container>
  );
};

export default BookingComponent;
