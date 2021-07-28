//import { db } from '../Components/firebase.js';
import React, { useEffect, useState } from 'react';

export default Contact;

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        // db.collection('contacts').add({
        //     name:name,
        //     email: email,
        //     message: message,
        // }).then(()=>{
        //     alert("Message has been submitted")
        //     setLoader(false);
        // }).catch((error)=>{
        //     alert(error.message)
        //     setLoader(false);
        // })
        setName("")
        setEmail("")
        setMessage("")
    }
    return (
        <div class="contact-form" onSubmit={handleSubmit}>
            <form id="contact-form" method="post" action="">
                <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" class="form-control" placeholder="message" row="4" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <input class="button" id="submit" type="submit" value="SUBMIT" style={{color: loader ? "White" : "black"}} />
            </form>
            <Socials />
            <p><br></br><br></br><br></br>Designed & Built by Connor Guard</p>
        </div>
    )
}

function Socials() {
    return (
        <div class="Socials">
            <a href="https://www.linkedin.com/in/connor-guard/" target="popup"><img class="icon linkedin" src="./linkedin.png" height="50" widh="50"></img></a>
            <GitHub />
            <a href="mailto: connor.guard@gmail.com" target="popup"><img class="icon email" src="./email.png" height="31" widh="31"></img></a>
        </div>
    );
}

function GitHub() {
    return (
        <a class="github" href="https://github.com/ConnorGuard" target="popup"><img class="icon github" src="./github.png" height="50" widh="50" target="popup"></img></a>
    )
}

