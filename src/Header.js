import React from 'react';
import logo from './images/logo.jpg';

class Header extends React.Component{
    render(){
        return(
            <div className="headerLayout">
                <div className="headerSubLayer">
                    <div className="imageLyer">
                        <img src={logo} alt="logo"/>
                        <span>AKILAN BIKER</span>
                    </div>
                    <div className="rightSection">
                        <div>Home</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Contact</div>
                        <div>Cell : 8610559839</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
