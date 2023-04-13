import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/selectedbeast'
import imageUrls from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBeast: false,
      currentBeast: "",
      beastImg: "",
      beastDescription: "",
    }
  }

  beastSelectionHandler = (beast, url, description) => {
    this.setState({ 
      showBeast: true, 
      currentBeast: beast,
      beastImg: url,
      beastDescription: description,
    })
  }

  closeHandler = () => {
    this.setState({ showBeast: false })
  }

  render() {
      return (
            <div>
              <Header />
              <Main imageUrls={imageUrls} onSelection={this.beastSelectionHandler} />
              <SelectedBeast imageUrls={imageUrls} beastSelected={this.state.currentBeast} beastImg={this.state.beastImg} beastDescription={this.state.beastDescription} show={this.state.showBeast} onClose={this.closeHandler} />
              <Footer />
            </div>
          );
  }
}

export default App;
