import React  from "react";
import {Container,Form,Button} from "react-bootstrap";
import {Link,createRoutesFromChildren,useNavigate} from "react-router-dom";
import { useState } from "react";
import '../styles/login.css'
const Login = ()=>{
    const [FormData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
  const handelChange=(e)=>{
   const {name,value}=e.target;
   setFormData({...FormData,[name]:value});
  };
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(FormData);
  };
    return(
        <Container>
            <h1>Registration Form</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                    name="name"
                    type="text" 
                    value={FormData.name} 
                    onChange={handelChange} required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gmail</Form.Label>
                    <Form.Control 
                    name="email"
                    type="email" 
                    value={FormData.email} 
                    onChange={handelChange} required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    name="password" 
                    type="password" 
                    value={FormData.password} 
                    onChange={handelChange} required
                    />
                </Form.Group>

            
            <Button variant="primary" type="submit">Login</Button>
            </Form>
          <a href="/signup">  <p>already have an account</p></a>
        </Container>
    )
}
export default Login;