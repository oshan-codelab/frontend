import React from 'react';

import "./Report.css";
import img from "./img/o.jpg";
import {Link} from 'react-router-dom';




function Report(){
    return(
        <table className="tt"      
       >
        <tr>
        <td
            >
        <div class="dropdown"  >
       
                 <ul class="list-group">
                    
                    <h3  className="catogari">Categories</h3>
                    <button className="button"><Link  to="/form" style={{textDecoration:"none"}}><h5><b>ADD </b></h5></Link> </button>
                    <button  className="button"><Link to="/Report" style={{textDecoration:"none"}}><h4><b>Report</b></h4></Link></button>
                    
                   
                   
                    
                    <p></p>
                 </ul>
                </div>
            </td>
            <td>
            <table className="Rl" >
                <tr>
                    
                    <td>
                             <center>
                             <form className="divs"  className="Fb">
                                <center><div class="form-group" className="container"  style={{backgroundColor: "lightblue"}} >
                                <label className="labl"><h1><b>Date</b></h1></label>
           
                                 <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ender Order Number" className="margin"></input>
           
            
                                <div>
                                        <button className="btnn"><Link to="/StockManager">Generate report</Link></button> 
                                </div>
            
                                </div>
                                </center>

                
       
                                </form>
                                </center>
                    </td>
                </tr>
            </table>

            </td>
       
        
        </tr>
        </table>
        

    );



}

export default Report;