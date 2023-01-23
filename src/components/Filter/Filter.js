import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/Filter/sliceFilter';
import { Typography, TextField, Box } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const query = e.target.value;
    dispatch(changeFilter(query));
  };

  return (
    <>
      <Typography variant="h5" sx={{ color: 'primary.main' }} marginBottom={2}>
        Find contacts by name
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '280px',
          marginBottom: '8px',
        }}
      >
        <PersonSearchIcon sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
        <TextField
          id="filter"
          label="Find contacts by name"
          variant="standard"
          type="text"
          placeholder="Enter name"
          onChange={handleChangeFilter}
          sx={{ m: 1, width: '25ch' }}
        />
      </Box>
    </>
  );
};

export default Filter;
