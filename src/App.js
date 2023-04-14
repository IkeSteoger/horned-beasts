import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/selectedbeast'
import FilterForm from './component/filterform'
import imageUrls from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBeast: false,
      currentBeast: "",
      beastImg: "",
      beastDescription: "",
      array: imageUrls,
      beastSelection: imageUrls,
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

  onFilterHandler = (event) => {
    let renderHorns;
    let filter = Number(event.target.value)
    console.log(filter)
    if(filter === 10){
      this.setState({beastSelection: imageUrls})
    }
    else { 
      renderHorns = this.state.array.filter(beast => beast.horns === filter) 
      this.setState({beastSelection: renderHorns})
    }
  }

  render() {
      return (
            <div>
              <Header />
              <FilterForm onFilter={this.onFilterHandler}/>
              <Main imageUrls={this.state.beastSelection} onSelection={this.beastSelectionHandler} />
              <SelectedBeast imageUrls={imageUrls} beastSelected={this.state.currentBeast} beastImg={this.state.beastImg} beastDescription={this.state.beastDescription} show={this.state.showBeast} onClose={this.closeHandler} />
              <Footer />
            </div>
          );
  }
}

export default App;
