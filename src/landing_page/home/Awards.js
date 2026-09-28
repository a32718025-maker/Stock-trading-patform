
import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/media/largestBroker (1).svg' alt="largest broker"></img>
                     </div>
                <div className='col-6 p-5'>
                <h1>Largest stock broker in india</h1>
                <p> 2+ million zerodhe clients contribute to over 15% of all volumes in india dailey by trading and imitating in:</p>
                </div>
                <div className='row'>
                    <div className='col-6'>
                <ul>
                    <li>
                        <p>Features and Options</p>
                        </li>

                    <li>
                        <p> Comodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency Derivatives</p>
                    </li>
                </ul>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>
                            <p> Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>
                                Direct mutual funds
                            </p>
                        </li>
                        <li>
                            <p>
                                Bonds and Goverment Securities
                            </p>
                        </li>
                    </ul>
                </div>
            </div> 
            <img src='/media/media/pressLogos.png' alt='award' style={{width:"90%"}}></img>
            </div>   
        </div> 
      );  
}

export default Awards;
