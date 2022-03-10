import React, {useState} from 'react'

const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleDisplay = (e)=> {
        e.preventDefault();
        setFirstName(e.target.value);
    };
    const handleDisplay1 = (e)=> {
        e.preventDefault();
        setLastName(e.target.value);
    };
    const handleDisplay2 = (e)=> {
        e.preventDefault();
        setEmail(e.target.value);
    };
    const handleDisplay3 = (e)=> {
        e.preventDefault();
        setPassword(e.target.value);
    };
    const handleDisplay4 = (e)=> {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    };


    return(
        <div>
            <form>
                <label>First Name: </label>
                <input name="firstName" type="text" value={firstName} onChange={handleDisplay}></input>
                <label>Last Name: </label>
                <input name="lastName" type="text" value={lastName} onChange={handleDisplay1}></input>
                <label>Email: </label>
                <input name="email" type="text" value={email} onChange={handleDisplay2}></input>
                <label>Password: </label>
                <input name="password" type="text" value={password} onChange={handleDisplay3}></input>
                <label>Confirm Password: </label>
                <input name="confirmPassword" type="text" value={confirmPassword} onChange={handleDisplay4}></input>
            </form>
            <div>
                First Name: {firstName}
                Last Name: {lastName}
                Email: {email}
                Password: {password}
                Confirm Password: {confirmPassword}
            </div>
        </div>
        
        
    )
}
export default UserForm