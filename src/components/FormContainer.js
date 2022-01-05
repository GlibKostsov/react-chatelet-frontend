import React from 'react'
import { Grid } from '@material-ui/core'
export default function FormContainer({ children }) {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  )
}
