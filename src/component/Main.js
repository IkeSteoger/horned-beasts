import React from 'react';
import HornedBeast from './hornedbeast'

class Main extends React.Component {
    render() {
        return (
            <>
            {
                this.props.imageUrls.map(imageInfo => 
                    <HornedBeast 
                        title={imageInfo.title} 
                        imageUrl={imageInfo.image_url}
                        description={imageInfo.description}
                    />)
            }
            </>
        )
    }
}

export default Main;