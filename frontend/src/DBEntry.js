import {useNavigate, useParams } from "react-router-dom"
import { useEffect } from 'react'
function DBEntry(){

    const {userID} = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        const user = {
            userID : userID
        }
        fetch('http://localhost:5000/api/dbentry',{
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(user) 
        })
        .then(res => {
            return res.json()
        })
        .then( DBinfo => {
            if (DBinfo.created) {
               navigate('/home') 
            }
        })
    }, [])

    return(
        <div className="dbentry">
            <div><center> Creating a new Developer ... Please Wait </center></div>
        </div>
    )

}

export default DBEntry;



