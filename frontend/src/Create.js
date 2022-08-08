import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create(){

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [brief, setBrief] = useState('')
    const [developer, setDeveloper] = useState('')

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const page = {title, detail, brief, developer}
        
        setIsPending(true)
        
        fetch('http://localhost:5000/api/page',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(page)
        })
        .then(() => {
            setIsPending(false);
            navigate('/home')
        })
    }

    return(
        <div className="create">
            <h2><center style={{marginTop: '30px', color:'#64a0a0'}}><img src='https://www.explaincode.app/static/media/coding.829f9161.png' alt='img' style={{width:'70px', height:'70px'}}></img>Float a new Page</center></h2>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <label>Page</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <label>Detail</label>
                <textarea
                    required
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />
                <br/>
                <label>Brief</label>
                <textarea
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                />
                <br/>
                <label>Developer</label>
                <input
                    required
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                />
                <br/>
                <br/>

                {!isPending && <button>Float</button>}
                {isPending && <button disabled>Floating page ... </button>}
            </form>
        </div>
    )
}

export default Create;