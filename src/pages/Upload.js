import React from 'react';
import UploadPreview from "../components/UploadPreview";

function Upload(props) {
    return (
        <div className="upload-form-main">
            <div className="uploadForm">
                <input type="text" placeholder="Vartotojo vardas"/>
                <input type="number" placeholder="Vartotojo amžius"/>
                <input type="email" placeholder="Vartotojo el. paštas"/>
                <input type="password" placeholder="Vartotojo slaptažodis"/>
                <button>Įkelti vartotoją</button>
            </div>
            <div className="uploadPreview-div">
                <UploadPreview/>
            </div>

        </div>
    );
}

export default Upload;