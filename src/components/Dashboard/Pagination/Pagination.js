import React from 'react'
import './style.css'
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
const PaginationComponent = ({ pageNumber, handleChange }) => {
  return (
    <div className="pagination-div">
    <Pagination
      count={10}
      page={pageNumber}
      onChange={handleChange}
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "2px solid var(--grey)",
        },
      }}
    />
  </div>
  )
}

export default PaginationComponent
