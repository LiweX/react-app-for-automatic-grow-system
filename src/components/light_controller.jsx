import { Stack, Typography } from '@mui/material';
import React, {Fragment} from 'react';
import Hora from './set_hour';
import Minuto from './set_minute';
import Action from './set_action';
import SendButton from './send_button';

export function LightController() {

    const [action, setaction] = React.useState('');
    const actionChange = (event) => {
      setaction(event.target.value);
    };

    const [hora, sethora] = React.useState('');
    const horaChange = (event) => {
      sethora(event.target.value);
    };

    const [minuto, setminuto] = React.useState('');
    const minutoChange = (event) => {
      setminuto(event.target.value);
    };
  

    return<Fragment>
      <Typography variant='h2'>{"Light controller"}</Typography>
      <Stack direction="row" spacing={2}>
        <Action action={action} actionChange={actionChange}></Action>
        <Hora hora={hora} horaChange={horaChange}></Hora>
        <Minuto minuto={minuto} minutoChange={minutoChange}></Minuto>
        <SendButton action={action} minuto={minuto} hora={hora}></SendButton>
      </Stack>
    </Fragment>
    
}