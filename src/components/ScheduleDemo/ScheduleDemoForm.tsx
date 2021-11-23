import React, { useState } from 'react'
import classes from './ScheduleDemoForm.module.css'
import SubmitButton from '../UI/Button-Primary-Filled'

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
    <form className={classes.form_form} onSubmit={submitForm}>
      {/* First Name */}
      <label className ={classes.form_label}>First Name</label>
      <input className ={classes.form_input} type = "text" onChange = {(e) => setFirstName(e.target.value)}/>
      
      {/* Last Name */}
      <label className ={classes.form_label}>Last Name</label>
      <input className ={classes.form_input} type = "text" onChange = {(e) => setLastName(e.target.value)}/>
      
      {/* Email */}
      <label className = {classes.form_label}>Email</label>
      <input className ={classes.form_input} type = "email" onChange = {(e) => setEmail(e.target.value)}/>
      
      {/* Company */}
      <label className = {classes.form_label}>Company</label>
      <input className ={classes.form_input} type = "text" onChange = {(e) => setCompany(e.target.value)}/>
      
      {/* Phone Number */}
      <label className = {classes.form_label}>Phone Number</label>
      <input className ={classes.form_input} type = "text" onChange = {(e) => setPhone(e.target.value)}/>
      
      {/* Submit Button -- no function passed in */}
      <SubmitButton text="request demo"/>
    </form>
  )
}

export default ScheduleDemoForm