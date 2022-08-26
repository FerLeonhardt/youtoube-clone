import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

const SearchBar = () => {
  /* const [first, setfirst] = useState(second) */

  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        paddingLeft: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >

        <input className='search-bar' placeholder='Search...' value='' onChange={()=>{}} />
        <IconButton type='submit' sx={{p:'p', color: 'red'}}>
        <YoutubeSearchedForIcon />
        </IconButton>
    </Paper>
  );
};

export default SearchBar;
