import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  name: string;
  email: string;
  phone: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BookingInfo: React.FC<Props> = ({
  name,
  email,
  phone,
  handleInputChange,
}) => {
  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Phone"
        name="phone"
        value={phone}
        onChange={handleInputChange}
        required
      />
    </>
  );
};

export default BookingInfo;
