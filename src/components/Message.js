import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
function Message({ severity, title, children }) {
  return (
    <Alert severity={severity}>
      {/* <AlertTitle>{title}</AlertTitle> */}
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  severity: 'info',
  title: 'Info',
}

export default Message
