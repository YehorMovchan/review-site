import { useState } from "react";

function Sort(){

    const [sort, setSort] = useState("popularity");

    function sortChange(e){
        setSort(e.target.value);
    }

    return(
        <form>
            <select className="selectForm" name="Sorting" value = {sort} onChange={sortChange}>
                <option value="popularity">by popularity</option>
                <option value="YearOldToNew">by year (from old to new)</option>
                <option value="YearNewToOld">by year (from new to old)</option>
            </select>
        </form>
    );
}

export default Sort;