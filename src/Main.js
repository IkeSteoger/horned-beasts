import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast title={"Horned Beast 1"} imageUrl={"PlaceHolder 1"} description={"The first horned beast"}/>
                <HornedBeast title={"Horned Beast 2"} imageUrl={"PlaceHolder 2"} description={"The second horned beast"}/>
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt="" title={this.props.title}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Main;