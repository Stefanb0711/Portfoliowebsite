import React, {useState} from "react";



function SortByInput(props){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClick(){
        setDropdownOpen(!dropdownOpen);

    }

    function onSort(){

    }

    return (
        <div>
            <input onClick={handleClick} placeholder="Filtern nach..."  />
            {dropdownOpen ? <ul className="list-group">
                <li onClick={onSort} className="list-group-item">Programmiersprache</li>
                <li onClick={onSort} className="list-group-item">Thema</li>
            </ul> :
                <div> </div>
            }

        </div>
    )
}