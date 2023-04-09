import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addmanzil } from '../../redux/action';
import { tg } from '../Tg';


const QayerManzil = () => {



  const tg_id = tg.initDataUnsafe.user.id;

  const [manzil, setManzil] = useState([

    { text: "Toshkent", callback_data: "toshkent" },
    { text: "Andijon", callback_data: "andijon" },
    { text: "Farg'ona & Marg'ilon", callback_data: "frmg" },
    { text: "Namangan", callback_data: "namangan" }
  ])

  const dispatch = useDispatch();

  const addCustomer = (product) => {
    const nameProduct = product.callback_data
    dispatch(addmanzil({ tg_id: tg_id, manzil: nameProduct }));
  }


  const DrMnzBtn = (v) => {
    // console.log(v.target.firstChild.data);
  }


  return (
    <div className='container'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">
        <h6 className='fw-bold'>Qayerga Mijoz Olmoqchisiz ?</h6>

        {manzil.map((msh) => (

          <Link onClick={() => addCustomer(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/QayerTumanManzil'>{msh.text}</Link>
        ))}
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/Mashina'>Orqaga</Link>

      </div>
    </div>
  )
}

export default QayerManzil
