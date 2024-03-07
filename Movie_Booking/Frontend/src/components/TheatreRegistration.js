import '../CSS/Style.css'
import {Col, Container, Row } from 'react-bootstrap';
import React, { useReducer, useState } from 'react'
import NavbarComponent from './NavbarComponent';
//import { useNavigate } from "react-router-dom";

function TheatreRegComponent() {

    const initialState = {
        username: { value: "", hasError: true, error: "", touched: false },
        password: { value: "", hasError: true, error: "", touched: false },
        email: { value: "", hasError: true, error: "", touched: false },
        firstname: { value: "", hasError: true, error: "", touched: false },
        lastname: { value: "", hasError: true, error: "", touched: false },
        phone_number: { value: "", hasError: true, error: "", touched: false },
        address: { value: "", hasError: true, error: "", touched: false },
        roleid: 2,
        isFormValid: false,
      };
    

   // const navigate = useNavigate();

    const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                
                const {name,value,hasError, error, touched, isFormValid} = action.data;
                return { ...state, [name]: {value, hasError, error, touched}, isFormValid }
    
             case 'reset':
                return initialState
        }
    
    }

    const[user, dispatch] = useReducer(reducer , initialState );
    const [msg,setMsg] = useState("...")

    const handleChange=(name,value) => {
        //a. call validation logic
                const {hasError, error} = validateData(name, value)

                //b. check form validity status
                let isFormValid = true;
                for(const key in user)
                {
                // console.log(key+" : "+user[key].hasError )
                    if(user[key].hasError === true)
                    {
                        isFormValid = false;
                        break;
                    }
                }

                    //c. call dispath method
                dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })   
        }         


        const validateData = (name,value) => {
            let hasError = false;
            let error = "";
            switch(name){
            
                case "username":
                var regex = /^[A-Za-z0-9]{6,15}$/;
                if (!regex.test(value)) {
                    hasError = true;
                    error = "UserId Should be between 6 - 15 characters no special symbol allowed"
                }
                break;

                case "password":
                    let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;
    
                    if (!regex1.test(value)) {
                        hasError = true;
                        error = "Password Should be more than 5 characters and having number and special symbol(Abc@123) "
                    }
                    break;

                case "firstname":
                    let regex2 = /^[A-Za-z]{1,15}$/;
    
                    if (!regex2.test(value)) {
                        hasError = true;
                        error = "First Name Should be valid and not more than 15 characters"
                    }
                    break;

                case "lastname":
                    let regex3 = /^[A-Za-z]{1,15}$/;
    
                    if (!regex3.test(value)) {
                        hasError = true;
                        error = "Last Name Should be valid and not more than 15 characters"
                    }
                    break;

                case "email":
                    let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
                    if (!regex4.test(value)) {
                        hasError = true;
                        error = "Email should be valid"
                    }
                    break;

                case "ContactNumber":
                    let regex5 = /^[0-9]{10}$/;
    
                    if (!regex5.test(value)) {
                        hasError = true;
                        error = "Contact Should be of 10 digits Only"
                    }
                    break;
                case "Address":
                    let regex6 = /^[A-Za-z0-9'\.\-\s\,]{1,200}$/;
    
                    if (!regex6.test(value)) {
                        hasError = true;
                        error = "Address should be valid"
                    }
                    break;                   
            }
            return {hasError,error}
        }

        const submitData = (ev) => {
            ev.preventDefault()
            //console.log(JSON.stringify(emp))
            //send data to server to insert into db
            const reqOptions = {
                method:'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    username: user.username.value,
                    password:  user.password.value,
                    email:  user.email.value,
                    firstname: user.firstname.value,
                    lastname: user.lastname.value,
                    phoneNumber: user.phone_number.value,
                    address: user.address.value,
                    roleid: user.roleid,
                    
                })
            }
    
            fetch("http://localhost:8080/users/register",reqOptions)
            .then(res => res.text())
            .then(data => setMsg(data) )
            alert("REGISTRATION SUCCESSFULLY")
            // navigate("/login")
    
        }

      
        
    



  return (
    <div>
        <NavbarComponent></NavbarComponent>
    <div className='c-signup'>
        <Container fluid>
           <Row>
              <Col md={{ span: 4, offset:5 }} xs={{ span: 10, offset:1 }} >
                 <div className='c-signupform'>
                        <h1><i>Registration form</i></h1>
                 </div>

                 <form>
                     <div className='form-group'>
                        <table className="table table-md c-table">
                            <tr>
                                <td colSpan={2}>
                                <input type="text" placeholder="username" id="username" name="uername" value={user.username.value} 
                                                        
                                onChange={(e)=>{handleChange("username",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.username.touched && user.username.hasError ? "block" : "none", color: "red" }}> {user.username.error} </p>
                                    </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="password" id="password" name="password" value={user.password.value}
                                     onChange={(e)=>{handleChange("password",e.target.value)}} className="form-control form-control-sm"/>

                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.password.touched && user.password.hasError ? "block" : "none", color: "red" }}> {user.password.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="Email" id="email" name="email" value={user.email.value}
                                    onChange={(e)=>{handleChange("email",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.email.touched && user.email.hasError ? "block" : "none", color: "red" }}> {user.email.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="Firstname" id="firstname" name="firstname" value={user.firstname.value}
                                    onChange={(e)=>{handleChange("firstname",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.firstname.touched && user.firstname.hasError ? "block" : "none", color: "red" }}> {user.firstname.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="Lastname" id="lastname" name="lastname" value={user.lastname.value}
                                    onChange={(e)=>{handleChange("lastname",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.lastname.touched && user.lastname.hasError ? "block" : "none", color: "red" }}> {user.lastname.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="ContactNumber" id="phone_number" name="phone_number" value={user.phone_number.value}
                                    onChange={(e)=>{handleChange("phone_number",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.phone_number.touched && user.phone_number.hasError ? "block" : "none", color: "red" }}> {user.phone_number.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <input type="text" placeholder="Adress" id="address" name="address" value={user.address.value}
                                    onChange={(e)=>{handleChange("address",e.target.value)}} className="form-control form-control-sm"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <p style={{ display: user.address.touched && user.address.hasError ? "block" : "none", color: "red" }}> {user.address.error} </p>
                                </td>
                            </tr>

                            <tr>
                                <td >
                                    <button type="submit" onClick={(e) => submitData(e)} className='btn btn-block' id='c-allbtn1'>Register</button>
                                </td>
                    
                                <td >
                                <button type="reset"  onClick={(e) => {handleChange(e)}} className='btn btn-block' id='c-allbtn1' >Reset</button>
                                </td>
                            </tr>
                        </table>
                     </div>
                 </form>
                 </Col>
           </Row>

        </Container>
      
    </div>
    </div>
  )
}

export default TheatreRegComponent;







