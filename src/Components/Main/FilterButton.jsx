function FilterButton(props){
    return(
        <button className="selectForm selectButton" onClick={props.showFilters}>
            <span>Filter</span> <span className="arrowDown"></span>
        </button>
    )
}

export default  FilterButton;