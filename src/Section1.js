// import logo from './images/logo.jpg';

function Section1(props) {
    const {handleBook}=props;
  return (
      <>
    <div className="section1 section">
        <div className="leftSide">
            <div>
                Best Bike Services In The Town
            </div>
            <div>
                We are committed to being a highly profitable, socially responsible, and leading manufacturer of high value for money, environmentally friendly, lifetime personal transportation products under the AKILAN BIKER brand, for customers predominantly in Asian markets and to provide fulfillment and prosperity for employees, dealers, and suppliers.
            </div>
            <div  className="" onClick={handleBook}>BOOK AN APPOINTMENT</div>
        </div>
        <div className="rightSide">
            <img src={require('./images/rightImage.jpeg').default} alt="logo"/>
        </div>
    </div>
</>
    );
}

export default Section1;
