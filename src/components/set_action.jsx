import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Action({action,actionChange}) {

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="label">action</InputLabel>
        <Select
          value={action}
          label="action"
          onChange={actionChange}
        >
          <MenuItem value={0}>Apagar</MenuItem>
          <MenuItem value={1}>Encender</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}