import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const ViewDriver2 = () => {
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
    const { data } = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi`)
    setAllCustomer(data.Customers)
  }


  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='container col-8 d-flex align-items-center'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">
        <h3>Quyidagi Mijozlar Bor:</h3>
        <div className="row">
          {allCustomer.map((cs) => (
            <div key={cs.tg_id} className="card" style={sty}>
              <h6>🙎‍♂️ Ismi: <b>{cs.name}</b></h6>
              <h6>🏚 Manzili: <b>{cs.manzil}</b></h6>
              <h6>🔍 Qayeriga: <b>{cs.manzilTuman}</b></h6>
              <h6> 👨‍👩‍👦 Necha Kishi: <b>{cs.kishiSoni}</b></h6>
              <h6> 📞 Telefon: <b>{cs.phone}</b></h6>
              <h6> 💰 Narxi: <b>{cs.yolNarxi}</b></h6>
            </div>
          ))}
          <Link to='/Driver/ViewDriver' type='submit' className='btn btn-outline-success fw-bold'>Yangi Mijozlarni Ko'rish</Link>
          <Link to='/Driver/mijoz_topdim' type='submit' className='btn btn-outline-success fw-bold'>Mijoz Topdim</Link>
          <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/IsmPulTel'>Orqaga</Link>
        </div>
      </div>


    </div >
  )
}

export default ViewDriver2;
