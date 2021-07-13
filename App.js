import React, { useState } from "react"

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState()
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [list, setList] = useState([])


  // form validation 
  const addlist = (e) => {
    e.preventDefault()

    const regex = new RegExp("^[A-Za-z]\\w{5,29}$")
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const numbers = new RegExp("^[0-9]\\w{9}$")

    if (!regex.test(name)) {
      alert("name only in string")
      return false
    }
    if (!numbers.test(number)) {
      alert('give a crt number ')
      return false
    }
    if (!validEmail.test(email)) {
      alert('email not valid')
      return false
    }
    if (!validPassword.test(password)) {
      alert('password not valid ')
      return false
    }
    if (!validPassword.test(cpassword)) {
      alert('password not valid ')
      return false
    }
    if (password !== cpassword) {
      alert("password do not match ")
      return false
    }

    setList(...list, [name, email, number, password])

    console.log(list)
  }

  return (
    <div>
      <h1>hello world </h1>

      <form autoComplete="off" onSubmit={addlist}>
        <input placeholder="name" name="name" type="text" onChange={e => setName(e.target.value)} />
        <br />
        <input placeholder="email" name="name" type="text" onChange={e => setEmail(e.target.value)} />
        <br />
        <input placeholder="number" name="name" min="0" max="9" type="text" onChange={e => setNumber(e.target.value)} />
        <br />
        <input placeholder="password" name="pass" type="password" onChange={e => setPassword(e.target.value)} />
        <br />
        <input placeholder="confirm-password" name="confirm-pass" type="password" onChange={e => setCpassword(e.target.value)} />
        <br />
        <button className="btn" type="submit">submit</button>
      </form>


      {list.map((e, i) => {
        return (
          <div key={i}>
            <span>{e}</span>
          </div>)
      })}


    </div>
  )
}

export default App;