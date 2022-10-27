import React, {useState} from 'react'
import "../static/style.css"

const Form=()=> {

    // Define State
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")

    //validation error messages ..creating the states
    const [firstNameError, setFirstNameError]= useState("")
    const [lastNameError, setLastNameError]= useState("")
    const [emailError, setEmailError]= useState("")
    const [passwordError, setPasswordError]= useState("")
    const [confirmPasswordError, setConfirmPasswordError]= useState("")


    //Create Event Handler

    //first name handler
    const firstNameHandler = (event)=> {
        setFirstName(event.target.value)
        //validation logic
        if(event.target.value.length < 2){
            setFirstNameError("Your first name must be longer than 2 characters")
        }
        else{
            setFirstNameError("")
        }
    }
    
    //last name handler
    const lastNameHandler = (event)=> {
        setLastName(event.target.value)
        //validation logic
        if(event.target.value.length < 2){
            setLastNameError("Your last name must be longer than 2 characters")
        }
        else{
            setLastNameError("")
        }
    }

    //email handler
    const emailHandler = (event)=>{
        setEmail(event.target.value)
        //validation logic
        if (event.target.value.length < 5){
            setEmailError("Your email must be longer than 5 characters ")
        }
        else {
            setEmailError("")
        }
    }

    //password handler
    const passwordHandler = (event)=>{
        setPassword(event.target.value)
        // validation logic
        if (event.target.value.length < 8){
            setPasswordError ("Your password must be longer than 8 characters ")
        }
        else {
            setPasswordError("")
        }
    }

    //confirmpassword handler
    const confirmPasswordHandler =(event) =>{
        setConfirmPassword(event.target.value)
        //validation logic
        if (event.target.value != password){
            setConfirmPasswordError("Your passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
    }


    // createUser Function
    const createUser= (event) =>{
        //this part of function prevents form from refreshing as it normally would
        event.preventDefault();
        const user = {
            firstName,
            lastName, 
            email,
            password,
            confirmPassword
        }
        console.log('User BEING CREATED', user)
        //after creating and saving resets for next form
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    // beginning of form
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    First name:
                    <input type="text" value={firstName} onChange={firstNameHandler} />
                    {(firstNameError)? <p>{firstNameError}</p> : null}
                </p>
                <p>
                    Last name:
                    <input type="text" value={lastName} onChange={lastNameHandler} />
                    {(lastNameError)? <p>{lastNameError}</p> : null}
                </p>
                <p>
                    Email:
                    <input type="email" value={email} onChange={emailHandler} />
                    {(emailError)? <p>{emailError}</p> : null}

                </p>
                <p>
                    Password:
                    <input type="password" value={password} onChange={passwordHandler} />
                    {(passwordError)? <p>{passwordError}</p> : null  }
                </p>
                <p>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={confirmPasswordHandler} />
                    {(confirmPasswordError)? <p>{confirmPasswordError}</p>: null  }
                </p>
                <button>Submit</button>
            </form>

            <div>
                {/* displays input as user types */}
                <h1>First Name:{firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h1>Email: {email}</h1>
                <h1>Password: {password}</h1>
                <h1>Confirm Password: {confirmPassword}</h1>
            </div>
        </fieldset>
    )
}

export default Form