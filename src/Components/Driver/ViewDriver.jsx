import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const ViewDriver = () => {
  const manVal = useSelector((state) => state.handleCart)


  const [allCustomer, setAllCustomer] = useState([])

  const sty = {
    width: "15rem",
    margin: "10px"
  }
  const styRow = {
    "align-items": "center"
  }
  const getProduct = async () => {
    const { data } = await axios.get(`https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi`)
    setAllCustomer(data.Customers)
  }


  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='container col-8 d-flex align-items-center'>
      <div className="row d-flex">
        {console.log(manVal)}

        <h3>Quyidagi Mijozlar Bor:</h3>
        <div className="row">
          {allCustomer.map((cs) => (
            <div key={cs.tg_id} className="card" style={sty}>
              <h1>{cs.name}</h1>
              <h4>{cs.tg_id}</h4>
              <h6>{cs.manzil}</h6>
            </div>
          ))}
          <div className="FirsBox">
            <Link to='/Driver/ViewDriver2' type='submit' className='btn btn-outline-primary m-3'>Yangi Mijozlarni Ko'rish</Link>
            <Link to='/Driver/mijoz_topdim' type='submit' className='btn btn-outline-primary m-3'>Mijoz Topdim</Link>
          </div>
        </div>
      </div>


    </div >
  )
}

export default ViewDriver
