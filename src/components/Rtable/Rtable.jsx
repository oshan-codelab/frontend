
import React, { Component } from "react";
import "./report.css";

import {Link} from 'react-router-dom';



function OrderDetails(params) {

  return (
    <div>
      <div align="center">
        
        <button className="btn1"><Link  to="/form">Add Order </Link></button>
        <button className="btn1"><Link to="/Report" >Reportr</Link></button>
      </div>

      <br></br>
      <div className="row">
        

        <div className="col-sm">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Order No</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Date</th>

                <th scope="col">Value</th>
                <th scope="col"></th>
                

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">001</th>
                <td>oshan devinda</td>
                <td>devinda@gmail.com</td>
                <td>yakkala</td>
                <td>0750191639</td>
                <td>1999/10/07</td>
                <td>500.00</td>
                <td scope="row">
        
        <div class="form-group row">

         <div >
          <button >UPDATE</button>
         </div>

         <div >
          <button >DELETE</button>
         </div>

        </div>
       

      </td>
              </tr>
           
            </tbody>
          </table>
        </div>
       
          
        </div>
      </div>

      
   
  );

}
export default OrderDetails;
