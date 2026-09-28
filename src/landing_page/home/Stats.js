import React from 'react';


function stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6'> 
                    <h1 className="fs-2 mb-5">Trust with confidence </h1>
                    <h3 className="fs-4">Customer-first always</h3>
                    <p className="text-muted">Thats why 1.3+ crore customers trust</p>
                </div>

                <div className='col-6' p-5>
                    <img src="/media/media/ecosystem.png" style={{width:"90%"}}></img>
                        <div className="text-centre">
                        <a href="" className="mx-5" style={{textDecoration:"none"}}> Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href="" > Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>

                    </div>
                </div>

                
            </div>

        </div>
     );
}

export default stats;