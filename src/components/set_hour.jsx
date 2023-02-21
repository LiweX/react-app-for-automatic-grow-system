import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Hora({hora,horaChange}) {

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="label">hora</InputLabel>
        <Select
          value={hora}
          label="hora"
          onChange={horaChange}
        >
          <MenuItem value={0}>00</MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}