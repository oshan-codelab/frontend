
import React, { Component } from "react";
import "./report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";



function OrderDetails(params) {

  return (
    <div>
      <div align="center">
        
        <button className="btn1">Current Order</button>
        <button className="btn1">Previos Order</button>
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
              <tr>
                <th scope="row">002</th>
                <td>stefaniya</td>
                <td>div@gmail.com</td>
                <td>Gampaha</td>
                <td>077565668</td>
                <td>Rs.300.00</td>
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
              <tr>
                <th scope="row">3</th>
                <td>Fastem Gel</td>
                <td>1 tube</td>
                <td>Rs.240.00</td>
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
              <tr>
                <th scope="row">4</th>
                <td>hbbububbubu Gel</td>
                <td>1 tube</td>
                <td>Rs.240.00</td>
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
              <tr>
                <th scope="row">5</th>
                <td>Fastem Gel</td>
                <td>1 tube</td>
                <td>Rs.240.00</td>
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
