import React, {useRef, useState} from 'react';
import http from "../plugins/Fetch"
import UploadPreview from "../components/UploadPreview";


function Upload() {

    const [name, setName] = useState("Name")
    const [age, setAge] = useState("Age")
    const [email, setEmail] = useState("pavyzdys@pavyzdys.lt")
    const [password, setPassword] = useState("slaptažodis")
    const [error, setError] = useState("")

    const nameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    function uploadUser(){
        const data = {
            name,
            age,
            email,
            password
        }

        http.post('/upload', data).then(res => {
            setError(res.message)
            if (!res.error){
                alert("Vartotojas įkeltas")
                setError("")
                nameRef.current.value = ""
                ageRef.current.value = ""
                emailRef.current.value = ""
                passwordRef.current.value = ""
                setName("Name")
                setAge("Age")
                setEmail("pavyzdys@pavyzdys.lt")
                setPassword("slaptažodis")
            }
        })
    }

    return (
        <div className="upload-form-main">
            <div className="uploadForm">
                <input ref={nameRef} onChange={(e) => setName(e.target.value)} type="text" placeholder="Vartotojo vardas"/>
                <input ref={ageRef} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Vartotojo amžius"/>
                <input ref={emailRef} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Vartotojo el. paštas"/>
                <input ref={passwordRef} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Vartotojo slaptažodis"/>
                <button onClick={uploadUser}>Įkelti vartotoją</button>
                <div style={{color: "red"}}>{error}</div>
            </div>
            <div className="uploadPreview-div">
                <UploadPreview
                    userName={name}
                    userAge={age}
                    userEmail={email}
                    userPassword={password}
                />
            </div>

        </div>
    );
}

export default Upload;