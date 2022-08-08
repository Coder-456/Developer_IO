import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Start(){

    const [userID, setUserID] = useState('')
    let navigate = useNavigate()

    const handleFloat = (e) => {
        e.preventDefault()
        const user = {
            userID : userID
        }
        fetch('http://localhost:5000/api/user',{
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(user)  
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            navigate(data.url)
        })
    }

    return (
        <div className='start'>
            <img src='https://www.explaincode.app/static/media/coding.829f9161.png'></img>
            <br/><p className="name">Developer.io</p>
            <p className="quote"><i>&lt; Share Developer Experience n Ideas /&gt;</i></p>
            <br/>
            <br/><input type="text" value={userID} onChange = {(e) => setUserID(e.target.value)} placeholder="Input Developer-ID to login" required/>
            <button onClick={(e) => handleFloat(e)}>Float</button>
            <br/><div className="new">New User? <Link to='/newuser'>Create Developer ID</Link></div>
        </div>
    )
}

export default Start;