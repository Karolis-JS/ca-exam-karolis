import React, {useState} from 'react';
import http from "../plugins/Fetch";
import Edit from"../components/Edit";


function Home({users, setUsers}) {

    const [user, setUser] = useState([])
    const [display, setDisplay] = useState("")

    function removeUser(id){
        http.get('/delete/'+id).then(res => {
            setUsers(res.users)
        })
    }

    function setUserInfo(id){
        setDisplay("flex")
        http.get('/find/'+id).then(res => {
            setUser(res.findUser)
        })

    }

    return (
        <div className="userMain">
            <h2 className="user-delete-msg">Vartotojas ištrintas!</h2>
            {users.map(item =>
                <div key={item._id} className="userCard">
                    <h2>{item.name}</h2>
                    <h3>{item.age}</h3>
                    <p>{item.email}</p>
                    <p>{item.password}</p>
                    <button onClick={(id) => removeUser(item._id)}>Ištrinti vartotoją</button>
                    <button onClick={(id) => setUserInfo(item._id)}>Redaguoti vartotoją</button>
                </div>
            )}
            <Edit flex={display} findUser={user}/>
        </div>
    );
}

export default Home;