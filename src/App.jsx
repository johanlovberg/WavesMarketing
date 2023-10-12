import {
  BasicFooter,
  Blog,
  Possibility,
  Features,
  Service,
  Header,
  About,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='gradient__bg'>
        <Header />
        <Service />
        <About />
        <Possibility />
      </div>
      <BasicFooter />
    </div>
  );
}

export default App;
