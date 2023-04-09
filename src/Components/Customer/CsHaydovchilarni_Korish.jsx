import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewDriver } from '../../redux/action';
import { tg } from '../Tg';


const CsHaydovchilarni_Korish = () => {


  const tg_id = tg.initDataUnsafe.user.id;

  const dispatch = useDispatch();

  const DrBtn = (value) => {
    const nameProduct = value.target.classList[3]
    dispatch(viewDriver({ tg_id: tg_id, viewDriver: nameProduct }));
  }



  return (
    <div className='container col-8'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h5>Qayerni Haydovchilarini Ko'rmoqchisiz ?</h5>
        <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-info fw-bold toshkentAndijon2'>Toshkent --- Andijon</Link>
        <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-info fw-bold toshkentFargona2'>Toshkent --- Farg'ona</Link>
        <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-info fw-bold toshkentNamangan2'>Toshkent --- Namangan</Link>

        <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/ViewCustomer'>Orqaga</Link>
      </div>
    </div>

  )
}

export default CsHaydovchilarni_Korish