import React, {useState} from "react";



function SortByInput(props){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClick(){
        setDropdownOpen(!dropdownOpen);

    }


    return (
        <div>
            <input onClick={handleClick} placeholder="Filtern nach..."  />
            {dropdownOpen ? <ul style={{width:"200px"}} className="list-group">
                <li onClick={() => props.sortByLanguage()} className="list-group-item">Programmiersprache</li>
                <li onClick={() => props.sortByProperties()} className="list-group-item">Thema</li>
            </ul> :
                <div> </div>
            }

        </div>
    )
}

export default SortByInput;