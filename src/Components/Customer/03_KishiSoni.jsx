import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addkishiSoni } from '../../redux/action';
import { tg } from '../Tg';


const KishiSoniCs = () => {

  const tg_id = tg.initDataUnsafe.user.id;

  const dispatch = useDispatch();

  const KishiSoniBtn = (product) => {
    const nameProduct = product.val
    dispatch(addkishiSoni({ tg_id: tg_id, kishiSoni: nameProduct }));
  }
  const [kishiSoni, setKishiSoni] = useState([
    { text: "1", val: "1son" },
    { text: "2", val: "2son" },

    { text: "3", val: "3son" },
    { text: "4", val: "4son" },
    { text: "Undan Ko'p", val: "undanKopSon" }

  ])




  return (
    <div className='container' >
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h6 className='fw-bold'>Nechta Mijoz Ketadi ?</h6>

        {
          kishiSoni.map((msh) => (

            <Link onClick={() => KishiSoniBtn(msh)} key={msh.val} className="btn btn-outline-info fw-bold" to='/Customer/IsmPulTel'>{msh.text}</Link>
          ))
        }
        <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/Tuman'>Orqaga</Link>

      </div >
    </div >
  )
}

export default KishiSoniCs
