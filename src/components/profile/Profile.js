import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
  } from '@fluentui/react/lib/DocumentCard';
  import { ImageFit } from '@fluentui/react/lib/Image';
import { DefaultButton } from '@fluentui/react';

const Profile = (props) => {
    const previewProps = {
        previewImages: [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
              href: 'props.html_url',
              target: '_blank',
            },
            previewImageSrc: props.avatar_url,
            // iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
    };
    
    return (
        <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
            <DocumentCard
                aria-label={props.login}
                onClickHref={props.html_url}
            >
                <DocumentCardPreview {...previewProps} />
                <DocumentCardTitle
                    title={props.login}
                    shouldTruncate
                />
                    <DefaultButton text="Go to profile" allowDisabledFocus/>

            </DocumentCard>
            <br/>
        </div>
    );
};

export default Profile;