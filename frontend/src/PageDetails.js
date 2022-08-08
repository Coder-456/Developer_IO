import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

function PageDetails(){
    
    const { id } = useParams()
    const { data: page, isPending, error } = useFetch(`http://localhost:5000/api/page/${id}`);

    return(
        <div className="pagedetails">
            {isPending && <div>Loading your page...</div>}
            {error && <div>{ error }</div>}
            {page && (
                <article>
                    <img src='https://www.explaincode.app/static/media/coding.829f9161.png' width='100px' height='100px' style={{float:'left'}}></img>
                    <h2 style={{float:'left', color: '#5b7474'}}>{page.title}</h2>
                    <br/><br/>
                    <i><h6 style={{color:'#64a0a0'}}> Rendered by {page.developer}</h6></i>
                    <br/>- - - - - - - - - - - - - - - - - - - - - - - - - - - - 
                    <br/>
                    <p className='brief'>{page.brief}</p>
                    <p className='detail'>{page.detail}</p>
                </article>
            )}
            <br /> <br />
        </div>
    );

}

export default PageDetails;