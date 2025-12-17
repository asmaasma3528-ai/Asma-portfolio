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
  <div className="container mt-5 bg-warning form-control rounded">
  <div className="row g-5">

    <div className="col-md-6">
      <h2 className="mb-3 text-warning">Contact Me</h2>

      {success && (
        <div className="alert alert-success">{success}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary fw-bold">
          Send
        </button>
      </form>
    </div>

    <div className="col-md-6">
      <h2 className="text-info mb-3">Connections</h2>

      {contacts.length === 0 ? (
        <p className="text-light">No messages yet 📭</p>
      ) : (
        contacts.map((c) => (
          <div key={c._id} className="card mb-3 bg-dark text-light">
            <div className="card-body">
              <h5 className="card-title">{c.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{c.email}</h6>
              <p className="card-text">{c.message}</p>
            </div>
          </div>
        ))
      )}
    </div>

  </div>
</div>

)

}