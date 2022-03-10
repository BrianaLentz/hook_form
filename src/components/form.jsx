import React, {useState} from 'react'

const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
// Validations
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(!(e.target.value.length > 2)){
            setFirstNameError("First Name must be 2 characters or longer")
        } else {setFirstNameError("")}
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be 2 characters or longer")
        } else {setLastNameError("")}
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be 5 characters or longer")
        } else {setEmailError("")}
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or longer")
        }
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
        console.log(password, confirmPassword)
        if(password !== e.target.value ){
            setConfirmPasswordError("Passwords do not match")
        } else {setConfirmPasswordError("")}
    }
// Will display in real time
    // const handleDisplay = (e)=> {
    //     e.preventDefault();
    //     setFirstName(e.target.value);
    // };
    // const handleDisplay1 = (e)=> {
    //     e.preventDefault();
    //     setLastName(e.target.value);
    // };
    // const handleDisplay2 = (e)=> {
    //     e.preventDefault();
    //     setEmail(e.target.value);
    // };
    // const handleDisplay3 = (e)=> {
    //     e.preventDefault();
    //     setPassword(e.target.value);
    // };
    // const handleDisplay4 = (e)=> {
    //     e.preventDefault();
    //     setConfirmPassword(e.target.value);
    // };


    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <label>First Name: </label>
                <input name="firstName" type="text" value={firstName} onChange={handleFirstName}></input>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }

                <label>Last Name: </label>
                <input name="lastName" type="text" value={lastName} onChange={handleLastName}></input>
                {
                    lastNameError ?
                    <p style={{color: 'red'}}>{ lastNameError }</p> :
                    ''
                }

                <label>Email: </label>
                <input name="email" type="text" value={email} onChange={handleEmail}></input>
                {
                    emailError ?
                    <p style={{color: 'red'}}>{ emailError }</p> :
                    ''
                }

                <label>Password: </label>
                <input name="password" type="text" value={password} onChange={handlePassword}></input>

                <label>Confirm Password: </label>
                <input name="confirmPassword" type="text" value={confirmPassword} onChange={handleConfirmPassword}></input>
                {
                    confirmPasswordError ?
                    < p style={{color: 'red'}}>{ confirmPasswordError }</p> :
                    ''
                }

                <input type ="submit" value="Create User" />
            </form>
            {/* <div>
                First Name: {firstName}
                Last Name: {lastName}
                Email: {email}
                Password: {password}
                Confirm Password: {confirmPassword}
            </div> */}
        </div>
        
        
    )
}
export default UserForm