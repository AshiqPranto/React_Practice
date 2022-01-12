import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';
import {DISHES} from './shared/dishes';
import Menu from './components/MenuComponent';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
} 

// function App() {
//   return (
//     <div >
//       <Navbar dark color='primary'> 
//         <div className='container'>
//           <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu/>
//     </div>
//   );
// }

export default App;
