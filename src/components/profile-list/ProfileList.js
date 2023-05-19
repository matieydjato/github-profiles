import Profile from "../profile/Profile";
import { Context } from "../context/Context";
import { useQuery } from 'react-query';
import { useContext, useEffect } from "react";

const ProfileList = () => {
    const { state, dispatch, fetchProfiles } = useContext(Context);

    const { data, isError } = useQuery('profiles', fetchProfiles);

    useEffect(() => {
        if (data) {
          dispatch({ type: 'FETCH_PROFILES_SUCCESS', payload: data });
        }
    }, [data, dispatch]);
    
    useEffect(() => {
        if (isError) {
          dispatch({ type: 'FETCH_PROFILES_FAILURE', payload: 'Error fetching profiles' });
        }
    }, [isError, dispatch]);

    if (state.isLoading) {
        return <p>Loading profiles...</p>;
    }
    
    if (state.isError) {
        return <p>{`Error loading profiles :(`}</p>;
    }

    return (
        state.profiles.map((profile) => <Profile key={profile.id} avatar_url={profile.avatar_url} login={profile.login} html_url={profile.html_url}/>)
    )
}

export default ProfileList;