//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="Text Editor"/>
    <Body/>
    <TextForm heading="Text Editing Tools"/>
    </>
  );
}

export default App;
