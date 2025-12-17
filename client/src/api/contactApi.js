
const BASE_URL = "http://localhost:5000/api/contact";

export const fetchContacts = async() => {
    const res = await fetch(BASE_URL);
    return res.json();
}

export const postContact = async(contactData) => {
    const res = await fetch(BASE_URL, {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(contactData)
    })
    return res.json();
}