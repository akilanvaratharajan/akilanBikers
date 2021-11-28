import React from 'react';
import {Services} from './Services';

class Section2 extends React.Component{
    render(){
        return(
            <div className="section2 section">
                <div className="header">Book Our Services</div>
                <div className="cardLayer">
                    {Services.map((data)=>(
                        <div className="card" key={data.id}>
                            <div className="imgLayer">
                                <img src={require(`${data.img}`).default} alt={data.serviceName}/>
                                <div>{data.smallName}</div>
                            </div>
                            <div className="content">
                            <div>
                                {data.serviceName}
                            </div>
                            <div>
                                <span>Price: </span><span>&nbsp;&#8377;.{data.price}</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Section2;
