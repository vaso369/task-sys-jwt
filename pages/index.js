import React, { useState } from "react";
//import "./App.css";
//import axios from 'axios';
//import '../node_modules/jquery';
//import $ from "jquery";
import Background from "../components/Background/Background";
import Login from "../components/Login/Login";
import MessageAuth from "../components/MessageAuth/MessageAuth";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Head from "next/head";

const Index = () => {
  //  const [usrname, setUsrname] = useState("");
  //  const [pass, setPass] = useState("");
  //   const getAll = e => {
  //     console.log("radi");
  //     fetch('http://localhost/phpReact/backend/getAll.php')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((myJson) => {
  //     console.log(myJson);
  //   });

  //   }
  //   const setUsr = e => {
  //     setUsrname(e.target.value);
  //   }
  //   const setPassw = e => {
  //     setPass(e.target.value);
  //   }
  //   const loginUser = e => {
  //     e.preventDefault();
  //    // let username=
  //    console.log(usrname,pass);
  //    let username = usrname;
  //    let passwd=pass;
  //    let send=true;
  //    let userData = {
  //      username:username,passwd:passwd,send:send
  //    }
  //    console.log(userData)
  //  axios.post('http://localhost/phpReact/backend/login.php',
  //  {headers:{"Access-Control-Allow-Origin": "*","Content-Type":"text/html"}},
  //  {
  //   username,
  //   passwd,
  //   send
  // })
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });
  // $.ajax({
  //   url:"http://localhost/phpReact/backend/login.php",
  //   method:"POST",
  //   dataType:"json",
  //   data:userData,
  //   success:function(data){
  //     console.log(data)
  //   },
  //   error:function(xhr){
  //     console.log(xhr);
  //   }

  // })
  // fetch('http://localhost/phpReact/backend/login.php',{
  //    mode:"cors",
  //   headers:{
  //     'Accept': 'application/json',

  //     "Content-Type":"application/json",
  //     "Access-Control-Allow-Origin":"http://localhost:3000"
  //   },
  //   method:"POST",
  //   body:JSON.stringify(userData)

  // })
  // .then((response) => {
  //   return response;
  // })
  // .then((myJson) => {
  //   console.log(myJson);
  // });

  //}
  return (
    <React.Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <Background />
        <Login />
        <Logo />
        <MessageAuth />
      </div>
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </React.Fragment>

    // <div>
    //   <h1>RADI</h1>
    // </div>
  );
};

export default Index;
