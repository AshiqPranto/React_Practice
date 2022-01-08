import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div >
      <Navbar dark color='primary'> 
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }

export default App;
