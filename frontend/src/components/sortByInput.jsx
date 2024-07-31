import React, {useState} from "react";



function SortByInput(props){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClick(){
        setDropdownOpen(!dropdownOpen);

    }


    return (

    <div style={{marginLeft: "100px"}}>

        <div style={{width: "200px", marginLeft: "100px"}} class="dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px" data-bs-theme="light">
            <input onClick={handleClick} type="search" class="form-control" autocomplete="false" placeholder="Filtern nach..."/>
            {dropdownOpen ? <ul style={{width: "200px"}} className="list-group list-unstyled mb-0">
                    <li onClick={() => props.sortByLanguage()}><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        Programmiersprache
                    </a></li>
                    <li onClick={() => props.sortByProperties()} ><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        Thema
                    </a></li>
                </ul> :
                <div></div>
            }

        </div>


    </div>
    )
}

export default SortByInput;