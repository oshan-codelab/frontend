import React from 'react';
import "./Forms.css";
import {Link} from 'react-router-dom';


function form(){
    return(

        <table className="tt">
        <tr>
            <td >
               
            <div class="dropdown" className="dropdown"  >
                 <ul class="list-group">
       
                     <h3  className="catogari">Categories</h3>
                    <button className="button"><Link  to="/form"><h5><b>ADD Order</b></h5></Link> </button>
                    <button  className="button"><Link to="/Report"><h4><b>Report</b></h4></Link></button>
                    
                    <p></p>
                 </ul>
                </div>
            </td>
       
        <td >
        <table className="l" >
        <tr>
        <td >

        <form >

       
        
        <div class="form-group" className="container mt-4"  style={{backgroundColor: "lightblue"}}>
            <label  ><b>Order Number</b></label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ender Order Number"></input>
            
            <label ><b>Rider Name</b></label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter rider Name"></input>

            <label ><b>Date</b></label>
            <input type="date" class="form-control" id="exampleInputPassword1"></input>
            
            <label ><b>Value</b></label>
            <input type="numbers" class="form-control" id="exampleInputPassword1" placeholder="Order value"></input>
           <center><button  className="btn" >Add</button></center> 
           

            


        </div>

        </form>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
       
    );
}

export default form;