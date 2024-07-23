import React, {useState} from "react";



function SortByInput(){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClick(){
        setDropdownOpen(!dropdownOpen);

    }

    return (
        <div>
            <input onClick={handleClick} placeholder="Filtern nach..."  />
            {dropdownOpen ? <ul className="list-group">
                <li className="list-group-item">Programmiersprache</li>
                <li className="list-group-item">Thema</li>
            </ul> :
                <div> </div>
            }

        </div>
    )
}