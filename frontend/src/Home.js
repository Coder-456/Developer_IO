import React from "react";
import Navbar from "./Navbar";
import useFetch from './useFetch';
import PageList from "./PageList";

function Home(){

    const {data: pages, isPending, error} = useFetch ("http://localhost:5000/api/page")

    return ( 
            <div className="home">
                <Navbar /> <br/> 
                <div>
                    {error && <div>{error}</div>}
                    {isPending && <div><strong><em><center>Loading ... </center></em></strong></div>}
                    {pages && <PageList pages={pages} />}
                    <br></br><br></br>   
                    
                </div>
                
            </div>
    )

}

export default Home;