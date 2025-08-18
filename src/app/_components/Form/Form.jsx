'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, InputLabel, MenuItem, NativeSelect, Select, FormLabel, FormHelperText } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";



import React from 'react'

export default function Form() {
      const [room, setRoom] = React.useState(1);
      const [adults, setAdults] = React.useState(1);
      const [children, setChildren] = React.useState(1);
        const [date, setDate] = React.useState(dayjs());
  return (

    
        <div className="flex flex-col md:flex-row bg-[#1f8f6a52] backdrop-blur-md shadow-xl rounded-xl relative md:w-[90%] md:left-45 md:bottom-15 p-5 overflow-hidden items-center gap-3">

      
    {/* <div className='mr-3'>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in</label>
    <input type="date" id="small-input" className="block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
    <div className='mr-3'>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-Out</label>
    <input type="date" id="small-input" className="block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div> */}
    

 {/* Date Picker */}
            <FormControl  sx={{ mr: 2, width: { xs: "100%", md: "auto" } }}>
              <label htmlFor="">Check-in</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        //   label="Choose Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          slotProps={{
            textField: {
              sx: {
                bgcolor: "white", 
              },
            },
          }}
        />
      </LocalizationProvider>
            </FormControl>

            <FormControl sx={{ mr: 2, width: { xs: "100%", md: "auto" } }}>
              <label htmlFor="">Check-Out</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        //   label="Choose Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          slotProps={{
            textField: {
              sx: {
                bgcolor: "white", // خلفية بيضاء
              },
            },
          }}
        />
      </LocalizationProvider>
            </FormControl>


<FormControl  sx={{ mr: 2, width: { xs: "100%", md: "auto" } }}>
    <label htmlFor="">Room</label>
      {/* <InputLabel variant="outlined" sx={{color:'white'}} id="room-label">Room</InputLabel> */}
      <Select
      sx={{bgcolor:'white', px:1}}
        labelId="room-label"
        id="room-select"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white", 
              color: "black",           
            },
          },
        }}
      >
        
        <MenuItem value={1}>Room 1</MenuItem>
        <MenuItem value={2}>Room 2</MenuItem>
        <MenuItem value={3}>Room 3</MenuItem>
      </Select>
    </FormControl>

<FormControl  sx={{ mr: 2, width: { xs: "100%", md: "auto" } }}>
    <label htmlFor="">Adults</label>
      {/* <InputLabel variant="outlined" sx={{color:'white'}} id="room-label">Room</InputLabel> */}
      <Select
      sx={{bgcolor:'white', px:1}}
        labelId="room-label"
        id="room-select"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white", 
              color: "black",           
            },
          },
        }}
      >
        
        <MenuItem value={1}> Adutls</MenuItem>
        <MenuItem value={2}> 1</MenuItem>
        <MenuItem value={3}> 2</MenuItem>
      </Select>
    </FormControl>

<FormControl  sx={{ mr: 2, width: { xs: "100%", md: "auto" } }}>
    <label htmlFor="">Children</label>
      {/* <InputLabel variant="outlined" sx={{color:'white'}} id="room-label">Room</InputLabel> */}
      <Select
      sx={{bgcolor:'white', px:1}}
        labelId="room-label"
        id="room-select"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white", 
              color: "black",           
            },
          },
        }}
      >
        
        <MenuItem value={1}> Children</MenuItem>
        <MenuItem value={2}> 1</MenuItem>
        <MenuItem value={3}> 2</MenuItem>
        
      </Select>
    </FormControl>

    <div className="flex flex-col sm:min-w-[150px] items-center mt-5">
          <button
            className="btn-yellow text-white 
                       font-semibold px-6 py-2 rounded-md w-full"
          >
            Check Now
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-2" />
          </button>
        </div>


    </div>
    
  )
}
