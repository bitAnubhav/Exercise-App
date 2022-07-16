import React from 'react'

import { Stack, Typography , Box } from '@mui/material';
import Icon from '../assets/assets/icons/gym.png';





const BodyPart = ({item , setBodyPart , bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '200px', height: '202px', cursor: 'pointer', gap: '47px' , padding:"10px 10px" } : { background: '#fff', borderBottomLeftRadius: '20px', width: '200px', height: '202px', cursor: 'pointer', gap: '47px' , padding:"10px" }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}

export default BodyPart