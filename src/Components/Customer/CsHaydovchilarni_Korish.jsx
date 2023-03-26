import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewDriver } from '../../redux/action';

const CsHaydovchilarni_Korish = () => {

  const tg = window.Telegram.WebApp;

  const tg_id = tg.initDataUnsafe.user.id;

  const dispatch = useDispatch();

  const DrBtn = (value) => {
    console.log(value.target.classList[3]);
    const nameProduct = value.target.classList[3]
    dispatch(viewDriver({ tg_id: tg_id, viewDriver: nameProduct }));
  }



  return (
    <div className='container col-8'>
      <h5>Qayerni Haydovchilarini Ko'rmoqchisiz ?</h5>
      <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-primary m-3 toshkentAndijon2'>Toshkent --- Andijon</Link>
      <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-primary m-3 toshkentFargona2'>Toshkent --- Farg'ona</Link>
      <Link onClick={(r) => DrBtn(r)} to='/Customer/CsQayerHaydovchiKorish' type='submit' className='btn btn-outline-primary m-3 toshkentNamangan2'>Toshkent --- Namangan</Link>

    </div>

  )
}

export default CsHaydovchilarni_Korish