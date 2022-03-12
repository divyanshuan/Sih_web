import './App.css';
import Nav from "./component/nav/nav"
import Body from "./component/body/body"
import Footer from './component/footer/footer'

function App() {
  return (
    <div className="App">
      <div className='head'>
        <Nav/>
        <Body/>
        <Footer/>
         
      </div>

    </div>
  );
}

export default App;
