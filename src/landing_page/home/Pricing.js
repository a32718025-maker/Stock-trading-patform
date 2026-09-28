import React from 'react';

function Pricing() {
    return ( 
        <div classname="container ">
            <div className='row '>
                <div className="col-4 p-5">
                    <h1 className="mb-3 p-5"> Unbeatable pricing</h1>
                    <p className="fs-5">We pioneereed the concept of discount broking and price transperency in india. Flat fees and no hidden charges</p>
                    <a href=""> See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"> </div>
                <div className="col-6">
                    <div className="row text-center  ">
                        <div className="col p-2 border">
                            <h1 className="mb-5">₹0</h1>
                            <p>Free equality delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col p-2 border">
                            <h1 classname="mb-5">₹20</h1>
                            <p>Free equality delivery and <br/> direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}


export default Pricing;