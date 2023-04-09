import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CsHaydovchi_Topdim = () => {

    const sty = {
        width: "15rem",
        margin: "10px"
      }

    return (
        <div className="container">
            <div className="row FirstBox d-grid gap-2 mx-auto m-5">
                <div className="card" style={sty}>
                    <h6>Biz Bilan Haydovchi topganingizdan Hursandmiz</h6>
                </div>
                <Link className="btn btn-outline-info fw-bold my-3" to='/'>Boshidan Boshlash</Link>
                <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/ViewCustomer'>Orqaga</Link>

            </div>
        </div>
    )
}

export default CsHaydovchi_Topdim