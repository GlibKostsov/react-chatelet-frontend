import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => {
  return (
    <div>
      <CircularProgress
        size={100}
        style={{ margin: 'auto', display: 'block' }}
        color='primary'
      />
    </div>
  )
}

export default Loader
