import React,{ useContext } from 'react'
import FormContext from '../contexts/FormContext'

function useFormContext() {
  return (
         useContext(FormContext)
  )
}

export default useFormContext




