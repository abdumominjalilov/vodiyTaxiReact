import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DrMijozTopdim = () => {
  return (
    <div className='container'>
      <div className="row col-8">
        <h3>Biz Bilan Mijoz Topganingizdan Hursandmiz</h3>
        
        <Link to='/' type='submit' className='btn btn-outline-primary m-3'>Boshidan Boshlash</Link>

      </div>
    </div>
  )
}

export default DrMijozTopdim