import  { React, useState} from 'react';
import { Nav } from '@fluentui/react/lib/Nav';
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import Profile from "../profile/Profile";
import { useQuery } from 'react-query';

const navStyles = {
    root: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
    },
};

const fetchProfiles = async () => {
    const response = await fetch('https://api.github.com/users');
    const profiles = await response.json();
    return profiles;
};

const ProfileList = () => {
    const { data, isError, isLoading } = useQuery('profiles', fetchProfiles);
    const [selectedUser, setSelectedUser] = useState();

    if (isLoading) {
        return <p>Loading profiles...</p>;
    }
    
    if (isError) {
        return <p>{`Error loading profiles :(`}</p>;
    }

    const onNavClick = (event, item) => {
        const userClicked = data.find((user) => user.id === item.key);
        setSelectedUser(userClicked);
    }

    return (
    
        <div class="ms-Grid" dir="ltr">
            <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                <Nav
                    onLinkClick={onNavClick}
                    ariaLabel="Profiles List Nav"
                    styles={navStyles}
                    groups={[
                        {
                            links: data.map((user) => ({
                                key: user.id,
                                name: user.login,
                                onRenderIcon: () => (
                                <Persona
                                    imageUrl={user.avatar_url}
                                    text={user.login}
                                    size={PersonaSize.size40}
                                />
                                ),
                            })),
                        },
                    ]}
                />
                </div>

                <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                   {selectedUser ? <Profile {...selectedUser}/> : ''}
                </div>
            </div>
        </div>
    )
}

export default ProfileList;