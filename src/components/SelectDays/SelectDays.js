import React from 'react'
import { MenuItem, Select } from "@mui/material";
import './style.css'

const SelectDays = ({days, handleDaysChange}) => {
    // const {days,setDays} = useState(120)
  return (
    <div className="select-days">
      <p>Price Change in </p>
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  )
}

export default SelectDays