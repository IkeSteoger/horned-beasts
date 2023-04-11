import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import imageUrls from './imgUrls.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Main imageUrls={imageUrls}/>
      <Footer />
    </div>
  );
}

export default App;
