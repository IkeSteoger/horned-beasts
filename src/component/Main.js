import React from 'react';
import HornedBeast from './hornedbeast'


class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast 
                    title="Horned Beast 1" 
                    imageUrl="./img/hornedbeast1.jpg" 
                    description="The first horned beast"
                />
                <HornedBeast 
                    title="Horned Beast 2" 
                    imageUrl="./img/hornedbeast2.jpg" 
                    description="The second horned beast"
                />
            </>
        )
    }
}

export default Main;