import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tg } from '../Tg';





const ViewCustomer = () => {

  const manVal = useSelector((state) => state.handleCart)

  const [allCustomer, setAllCustomer] = useState([])
  // const tg_id = 55;
  const tg_id = tg.initDataUnsafe.user.id;

  const sty = {
    width: "15rem",
    margin: "10px"
  }

  const getProduct = async () => {
    const { data } = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`)
    setAllCustomer(data.Customer)
  }


  const deleteCustomer = async () => {
    console.log('customer deleted')
    await axios.delete(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`)
  }
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='container col-8 d-flex align-items-center'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">

        <h5>Malumotingiz Quyidagi Ko'rinishda Haydovchilarga Yuborildi:</h5>
        <div className="row d-flex">
          {console.log(allCustomer)}
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
        </div>

        <Link to='/Customer/haydovchi_korish' className='btn btn-outline-info fw-bold'>Haydovchilarni Ko'rish</Link>
        <Link to='/Customer/haydovchi_topdim' onClick={() => deleteCustomer()} className='btn btn-outline-info fw-bold'>Haydovchi Topdim</Link>
        <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/IsmPulTel'>Orqaga</Link>
      </div >

    </div >
  )
}

export default ViewCustomer
