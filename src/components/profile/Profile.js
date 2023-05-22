import { DefaultButton, Persona, PersonaPresence, PersonaSize } from '@fluentui/react';

const Profile = ({login, avatar_url, html_url}) => {
    const examplePersona = {
      imageUrl: avatar_url,
      imageInitials: login,
      text: login,
      url: html_url,
    };
    
    return (
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
            <Persona
                    {...examplePersona}
                    size={PersonaSize.size120}
                    presence={PersonaPresence.away}
                    imageAlt="Annie Lindqvist, status is away"
                    url={html_url}
            />
            <br/>
            <DefaultButton href={html_url} text='Go to profile'/>
        </div>
    );
};

export default Profile;