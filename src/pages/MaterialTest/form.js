import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Typography } from '@mui/material'

const ValidationTextFields = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Box
      component="form"
      sx={{
        '&': { p: 2 },
        '& .MuiTextField-root': { my: 1, width: '100%' }
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>Form example</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            id="outlined-required"
            label="Text field"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Option</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Disabled" />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              row={true}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ValidationTextFields
