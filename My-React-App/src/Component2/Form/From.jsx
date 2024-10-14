import React, { useState } from "react";

export default function From() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlerNameSubmite = (e) => {
        setName(e.target.value)
    }
    const handlerEmailSubmite = (e) => {
        setEmail(e.target.value)
    }
    const handlerPasswordSubmite = (e) => {
        setPassword(e.target.value)
    }
    const handlerSubmite = (e) => {
        console.log("From is Submited");
        const userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
        e.preventDefault();
    }

  return (
    <div>
      <h1>Register Now</h1>
      <form action="#" onSubmit={handlerSubmite}>
        <label htmlFor="name">Name:</label>
        <input
          style={{ margin: "10px" }}
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={handlerNameSubmite}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          style={{ margin: "10px" }}
          type="text"
          name="email"
          id="email"
          value={email}
          required
          onChange={handlerEmailSubmite}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          style={{ margin: "10px" }}
          type="number"
          name="password"
          id="password"
          value={password}
          required
          onChange={handlerPasswordSubmite}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

{/* 04 How to Access of From Value in React.Js */}