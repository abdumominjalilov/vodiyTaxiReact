import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const ViewCustomer = () => {
  const manVal = useSelector((state) => state.handleCart)

  const [allCustomer, setAllCustomer] = useState([])

  const sty = {
    width: "15rem",
    margin: "10px"
  }
  const getProduct = async () => {
    const { data } = await axios.get(`https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi/${tg_id}`)
    setAllCustomer(data)
  }


  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='container col-8 d-flex align-items-center'>
      <div className="row d-flex">

        <h5>Malumotingiz Quyidagi Ko'rinishda Mijozlarga Yuborildi:</h5>
        <div className="row d-flex">
          {allCustomer.map((cs) => (
            <div key={cs.tg_id} className="card" style={sty}>
              <h1>{cs.name}</h1>
              <h4>{cs.tg_id}</h4>
              <h6>{cs.manzil}</h6>
            </div>
          ))}
        </div>
        <div className="FirsBox d-flex">

          <Link to='/Customer/haydovchi_korish' className='btn btn-outline-primary m-3'>Haydovchilarni Ko'rish</Link>
          <Link to='/Customer/haydovchi_topdim' className='btn btn-outline-primary m-3'>Haydovchi Topdim</Link>
        </div>
      </div>

    </div >
  )
}

export default ViewCustomer
