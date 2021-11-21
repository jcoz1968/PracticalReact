import logo from './GloboLogo.png';
import { Component } from 'react';

// class Header extends Component {
//   render() {
//     return (
//       <header className="row">
//         <div className="col-md-5">
//           <img src={logo} className="logo" alt="logo" />
//         </div>
//         <div className="col-md-7 subtitle">{this.props.subtitle}</div>
//       </header>
//     );
//   }
// }

const Header = ({ subtitle, title }) => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="col-md-7 subtitle">{subtitle}</div>
  </header>
);

export default Header;
