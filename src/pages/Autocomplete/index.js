import React, { useState, useEffect } from 'react'
import WaitProgress from './WaitProgress'
import AutocompleteWithInsert from './AutocompleteWithInsert'

const AutocompleteExample = () => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const initialLoad = setTimeout(() => {
      setLoaded(true)
    }, 5000)
    return () => {
      clearTimeout(initialLoad)
    }
  }, [])

  return (
    <WaitProgress show={!loaded}>
      <AutocompleteWithInsert />
    </WaitProgress>
  )
}

export default AutocompleteExample
