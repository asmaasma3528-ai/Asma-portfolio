import React, {useState, useEffect} from "react";
import { postContact, fetchContacts } from "../api/contactApi";

export default function Contact(){

const [ form, setForm ] = useState({name:"", email:"", message:""});
const [ success, setSuccess ] = useState("");
const [ contacts, setContacts ] = useState([]);

const getContacts = async() => {
  const res = await fetchContacts();
  if(res.data){
    setContacts(res.data);
  }
}

useEffect(() => {
  getContacts()
}, []);

const handleChange = (e) => {
   setForm({...form, [e.target.name] : e.target.value});
}

const handleSubmit = async(e) => {
  e.preventDefault();
  console.log("Submit clicked", form);
  const res = await postContact(form);
  if(res.success){
    setSuccess("Form sent successfully");
    setForm({name:"", email:"", message:""});
    await getContacts();
  }else{
    setSuccess("Error in submiting the form")
  }
}

return(
  <div>
    <h2>Contact me 😊</h2>
    {success && <p>{success}</p>}
    <form onSubmit = {handleSubmit}>
    <h6>Name</h6>
    <input 
    type="text"
    name="name"
    placeholder="Your name"
    value={form.name}
    onChange={handleChange}
    />

    <h6>Email</h6>
    <input 
    type="email"
    name="email"
    placeholder="Your email"
    value={form.email}
    onChange={handleChange}
    />

    <h6>Message</h6>
    <textarea 
    name="message"
    placeholder="Please write a message here..."
    value={form.message}
    onChange={handleChange}
    />

    <button type="submit">Send</button>
    </form>

    <hr />

    {contacts.length === 0 ? (
      <h1>No messages yet 📭</h1>
    ) : (
      <div>
      <h2>Connections</h2>
      {contacts.map((c) => (
        <div key = {c._id}>
        <strong>{c.name}</strong><br />
        <small>{c.email}</small>
        <p>{c.message}</p>
        </div>
      ))}
    </div>
    )}
  </div>
)

}