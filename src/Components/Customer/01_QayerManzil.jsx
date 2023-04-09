import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addmanzil } from '../../redux/action';
import { tg } from '../Tg';


const QayerManzilCs = () => {


  // const tg_id = 55;
  const tg_id = tg.initDataUnsafe.user.id;

  const dispatch = useDispatch();

  const addCustomer = (product) => {
    const nameProduct = product.callback_data
    dispatch(addmanzil({ tg_id: tg_id, manzil: nameProduct }));
  }

  const [manzil, setManzil] = useState([

    { text: "Toshkent", callback_data: "toshkent" },
    { text: "Andijon", callback_data: "andijon" },
    { text: "Farg'ona & Marg'ilon", callback_data: "frmg" },
    { text: "Namangan", callback_data: "namangan" }
  ])


  return (
    <div className='container'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">
        <h6 className='fw-bold'>Qayerga Bormoqchisiz ?</h6>

        {manzil.map((msh) => (

          <Link onClick={() => addCustomer(msh)} key={msh.text} className="btn btn-outline-info fw-bold" to='/Customer/Tuman'>{msh.text}</Link>
        ))}
        <Link className="btn btn-outline-success fw-bold my-3" to='/'>Orqaga</Link>
      </div>
    </div>
  )
}

export default QayerManzilCs
