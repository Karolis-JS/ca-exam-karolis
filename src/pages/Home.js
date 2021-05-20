import React from 'react';
import http from "../plugins/Fetch";

function Home({users, setUsers}) {

    function removeUser(id){
        http.get('/delete/'+id).then(res => {
            setUsers(res.users)
            console.log(res)
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
                    <button>Redaguoti vartotoją</button>
                </div>
            )}

        </div>
    );
}

export default Home;