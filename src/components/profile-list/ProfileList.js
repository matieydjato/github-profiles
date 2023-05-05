import Profile from "../profile/Profile";

const ProfileList = ({profilesList}) => {
    return (
        profilesList.map((profile) => <Profile avatar_url={profile.avatar_url} login={profile.login} html_url={profile.html_url}/>)
    )
}

export default ProfileList;