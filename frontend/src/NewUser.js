import { useState } from 'react'

function NewUser(){

    const [userID, setUserID] = useState('')

    const handleFloat = (e) => {
        e.preventDefault()
        const user = {
            userID : userID
        }
        fetch('http://localhost:5000/api/check-user',{
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(user)  
        })
        .then(res => {
            return res.json()
        })
        .then(userInfo => {
            if (userInfo.alreadyExist){
                console.log('User Already Exists')
                alert('Developer ID Already Exists. Try a different ID')
            }
            else{
                fetch("http://localhost:5000/api/stripe-session", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user) 
                })
                .then(res => {
                    if (res.ok) return res.json()
                    return res.json().then(json => Promise.reject(json))
                })
                .then(({ url }) => {
                    window.location = url
                })
                .catch(e => {
                    console.error(e.error)
                })
            }
        })
    }

    return (
        <div className='newuser'>
            <img src='https://www.explaincode.app/static/media/coding.829f9161.png'></img>
            <br/><label className='name'>Create a Developer ID</label>
            <br/><p><small><i>You have to pay INR 1000.00 to join Developer.io</i></small></p>
            <br/><input type="text" value={userID} onChange = {(e) => setUserID(e.target.value)} placeholder="Unique ID" required/>
            <button onClick={(e) => handleFloat(e)}>Join Dev-space.io</button>
        </div>
    )
}

export default NewUser;