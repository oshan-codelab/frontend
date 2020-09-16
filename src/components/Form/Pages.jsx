import React from 'react';



function pages(){
    return(
        <div class="dropdown" className="dropdown"  >
        <ul class="list-group">
    
            <h3  className="catogari">Categories</h3>
           <button className="button"><Link  to="/form"><h5><b>ADD Page</b></h5></Link> </button>
           <button  className="button"><Link to="/Report"><h4><b>Report Generator</b></h4></Link></button>
           
           <p></p>
        </ul>
       </div>
    );
   
}

export default pages;
