import React from 'react';

function Home(props) {
    return (
        <div className="userMain">
            <div className="userCard">
                <h2>Name</h2>
                <h3>Age</h3>
                <p>labas@labas.lt</p>
                <p>vartotojo slaptažodis</p>
                <button>Ištrinti vartotoją</button>
                <button>Redaguoti vartotoją</button>
            </div>
        </div>
    );
}

export default Home;