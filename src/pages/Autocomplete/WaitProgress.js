import React from 'react'
import { CircularProgress } from '@mui/material'

const WaitProgress = ({ waitText = 'Aguarde...', color = 'primary', show = true, children }) => {

  if (show) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ position: 'absolute' }}>
          <CircularProgress size="10rem" thickness={2} style={{ top: 0, bottom: 0, right: 0, left: 0 }} color={color} />
          <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
            <p style={{ position: 'relative', left: '-50%', top: '-50%', margin: 0, verticalAlign: 'middle' }}>{waitText}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return children
  }

}

export default WaitProgress
