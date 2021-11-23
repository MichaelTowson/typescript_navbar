import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  scheduleDemoVisibility: boolean
  toggleVisible: () => void
}

const ScheduleDemoForm: React.FC<Props> = (props) => {
  //Set state for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Validation check needed

    //Store submission in local storage
    localStorage.setItem("submission", JSON.stringify({
      firstName,
      lastName,
      email,
      company,
      phone
      })) 

    //Display alert with data
    alert("SUBMISSION SUCCESSFUL! JSON data stored to LocalStorage: " + localStorage.getItem("submission"))

    //Close form using function from props, setting state from parent component.
    props.toggleVisible()
  }

  
  return(
    <form onSubmit={submitForm}>
      {/* First Name */}
      <label>First Name</label>
      <input type = "text" onChange = {(e) => setFirstName(e.target.value)}/>
      {/* Last Name */}
      <label>Last Name</label>
      <input type = "text" onChange = {(e) => setLastName(e.target.value)}/>
      {/* Email */}
      <label>Email</label>
      <input type = "email" onChange = {(e) => setEmail(e.target.value)}/>
      {/* Company */}
      <label>Company</label>
      <input type = "text" onChange = {(e) => setCompany(e.target.value)}/>
      {/* Phone Number */}
      <label>Phone Number</label>
      <input type = "text" onChange = {(e) => setPhone(e.target.value)}/>
      <button>Request Demo</button>
    </form>
  )
}

export default ScheduleDemoForm