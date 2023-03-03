import FilterButton from "./FilterButton";
import Search from "./Search";
import Sort from "./Sort";
import Filter from "./Filter";
import { useState } from "react";


function Nav(){
    const [filterShow, setFilterShow] = useState(null);
    const showFiltersFunc = () => {
        setFilterShow(<Filter></Filter>)
    }

    return(
        <div className="nav">
            <Search></Search>
            <Sort></Sort>
            <FilterButton showFilters = {showFiltersFunc}></FilterButton>
            {filterShow}
        </div>
    );
}

export default Nav;