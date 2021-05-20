import React, {useRef, useState, useEffect} from 'react';
import http from "../plugins/Fetch"
import { AiFillCloseCircle } from 'react-icons/ai';
import EditPreview from "./EditPreview";



function Edit({findUser, flex}) {



    const [name, setName] = useState(findUser.name)
    const [age, setAge] = useState(findUser.age)
    const [email, setEmail] = useState(findUser.email)
    const [password, setPassword] = useState(findUser.password)
    const [error, setError] = useState("")
    const [display, setDisplay] = useState(flex)

    useEffect(()=>{
        setDisplay(flex)

    }, [findUser])

    const nameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    function EditUser(){
        const data = {
            name,
            age,
            email,
            password,
            id: findUser._id
        }

        http.post('/edit', data).then(res => {
            setError(res.message)
            if (!res.error){
                alert("Vartotojas sėkmingai atnaujintas")
               setDisplay("none")
            }
        })
    }

    function showEditComponent (){
        setDisplay("none")
    }

    return (
        <div style={{display: display}} className="edit-main">
            <AiFillCloseCircle onClick={showEditComponent} className="close-icon"/>
            <div className="editForm">
                <input ref={nameRef} onChange={(e) => setName(e.target.value)}  type="text" placeholder={findUser.name} />
                <input ref={ageRef} onChange={(e) => setAge(e.target.value)}  type="number" placeholder={findUser.age}/>
                <input ref={emailRef} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={findUser.email}/>
                <input ref={passwordRef} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={findUser.password}/>
                <button onClick={EditUser}>Atnaujinti</button>
                <div style={{color: "red"}}>{error}</div>
            </div>
            <EditPreview
                userName={name}
                userAge={age}
                userEmail={email}
                userPassword={password}
            />
        </div>
    );
}

export default Edit;