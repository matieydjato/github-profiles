const Search = (props) => {
    return (
        <div className="col-sm-12 mt-4 mb-5">
            <input type="search" className="search" placeholder="Search here..." onChange={props.filter}/>
        </div>
    );
}

export default Search