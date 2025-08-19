'use client'
import React, { useState, useRef } from 'react'
import { IconButton } from '@mui/material'
import { PlayArrow, Pause } from '@mui/icons-material'

export default function Video() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="relative w-full my-10">
      
      <video
        ref={videoRef}
        src="/fixylandVideo.mp4"
        className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
      />

      
      {!playing && (
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} 
        >
          <IconButton
            onClick={togglePlay}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.4)' },
            }}
          >
            <PlayArrow fontSize="large" />
          </IconButton>
        </div>
      )}

      
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <IconButton
            onClick={togglePlay}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <Pause fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  )
}
