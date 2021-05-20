import React from 'react';

function EditPreview({userName, userAge, userEmail, userPassword}) {
    return (
        <div>
            <div className="userCard">
                <h2>{userName}</h2>
                <h3>{userAge}</h3>
                <p>{userEmail}</p>
                <p>{userPassword}</p>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}

export default EditPreview;