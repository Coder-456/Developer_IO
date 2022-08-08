import  { Link } from 'react-router-dom';

function PageList(props)
{
    const pages = props.pages;

    return (
        <div className='page-list'>
            {pages.map(function (page){
                return (<div className='page-preview' key={pages._id}>
                    <Link to={`/page/${page._id}`}>
                    <p className='title'>  <h3 style={{color:'white', fontWeight:'500'}}> {page.title} </h3> </p>
                    <p><i><h6 style={{color:'black', fontWeight:'500', fontSize:'4mm', fontFamily:'Arial'}}> {page.brief} </h6></i> </p>
                    <p> <em> {page.developer} </em> </p>
                    </Link>
                </div>
                )}
            )}
        </div>
    );

}

export default PageList;