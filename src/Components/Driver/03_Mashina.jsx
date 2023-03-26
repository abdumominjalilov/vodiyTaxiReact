import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adddriverMashina } from '../../redux/action';

const Mashina = () => {

  const tg = window.Telegram.WebApp;

  const tg_id = tg.initDataUnsafe.user.id;

  const dispatch = useDispatch();


  const DrMshBtn = (value) => {
    const nameProduct = value.val
    dispatch(adddriverMashina({ tg_id: tg_id, driverMashina: nameProduct }));
  }


  const [mashina, setMashina] = useState([
    { text: "Captiva", val: "captiva" },
    { text: "Cobolt", val: "cobolt" },
    { text: "Jentra", val: "jentra" },
    { text: "Nexia 3", val: "nexia3" },
    { text: "Nexia 2", val: "nexia2" },
    { text: "Nexia 1", val: "nexia1" },
    { text: "Tracker", val: "tracker" },
    { text: "Spark", val: "spark" },
    { text: "Lacetti", val: "lacetti" },
    { text: "Lada", val: "lada" },
    { text: "Malibu", val: "malibu" },
    { text: "Epica", val: "epica" },
    {
      text: "Elektromobil",
      val: "elektroMobil"
    },
    { text: "Hyundai", val: "hyundai" },
    { text: "CHevrolet", val: "chevrolet" },
    { text: "Boshqa", val: "boshqaMoshina" }
  ])





  return (
    <div className='container'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5">
        {mashina.map((msh) => (

          <Link onClick={() => DrMshBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/QayerManzil'>{msh.text}</Link>
        ))}

      </div>
    </div>
  )
}

export default Mashina
