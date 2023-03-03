function GenreItem(props){
    return(
        <div className="genreItem">
              <input type="checkbox" name="" id={props.id} />
              <label htmlFor={props.id}>{props.children}</label>
            </div>
    )
}

export default GenreItem;