const Profile = (props) => {
    return (
        <div className="col-md-3 mb-5">
            <div className="card" style={{flexDirection: 'row'}}>
                <img src={props.avatar_url} alt="Card image" style={{ width: '40%'}}/>
                <div className="card-body">
                    <h4 className="card-title">{props.login}</h4>
                    <p className="card-text">{props.company}</p>
                    <a href={props.html_url} className="btn btn-outline-dark">See Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;