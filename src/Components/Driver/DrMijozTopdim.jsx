import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DrMijozTopdim = () => {
  const sty = {
    width: "15rem",
    margin: "10px"
  }
  return (
    <div className='container'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">
        <div className="card" style={sty}>
          <h3 className='fw-bold m-2'>Biz Bilan Mijoz Topganingizdan Hursandmiz</h3>
        </div>


        <Link to='/' type='submit' className='btn btn-outline-success'>Boshidan Boshlash</Link>
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/ViewDriver'>Orqaga</Link>

      </div>
    </div>
  )
}

export default DrMijozTopdim