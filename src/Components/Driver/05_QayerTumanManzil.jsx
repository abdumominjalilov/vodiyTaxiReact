import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addmanzilTuman } from '../../redux/action';
import { tg } from '../Tg';



const QayerTumanManzil = () => {



  const tg_id = tg.initDataUnsafe.user.id;

  const manVal = useSelector((state) => state.handleCart)
  // const manVal = useSelector()
  const dispatch = useDispatch();

  const DrMnzTBtn = (product) => {
    const nameProduct = product.val
    dispatch(addmanzilTuman({ tg_id: tg_id, manzilTuman: nameProduct }));
  }


  const [andijon, setAndijon] = useState([


    { text: "Andijon SH", val: "andijonsh" },
    {
      text: "Andijon tum",
      val: "andijontum"
    },
    { text: "Bo'ston", val: "boston" },
    { text: "Buloqboshi", val: "buloqboshi" }
    ,
    { text: "Asaka", val: "asaka" },
    { text: "Baliqchi", val: "baliqchi" },
    { text: "Izboskan", val: "izboskan" },
    { text: "Oltinko'l", val: "oltinkol" }
    ,
    { text: "Ulug'nor", val: "ulugnor" },
    { text: "SHahrihon", val: "shahrihon" },
    { text: "Jalaquduq", val: "jalaquduq" },
    { text: "Marhamat", val: "marhamat" }
    ,
    { text: "Xo'jaobod", val: "xojaobod" },
    {
      text: "Qo'rg'ontepa",
      val: "qorgontepa"
    },
    { text: "Xonobod", val: "xonobod" }

  ])

  const [frmr, setFrmr] = useState([

    { text: "Beshariq", val: "beshariq" },
    { text: "Bog'dod", val: "bogdod" },
    { text: "Buvayda", val: "buvayda" },
    { text: "Dang'ara", val: "dangara" }
    ,
    {
      text: "Farg'ona SH",
      val: "fargonash"
    },
    {
      text: "Farg'ona Tum",
      val: "fargonatum"
    },
    { text: "Furqat", val: "furqat" },
    { text: "Marg'ilon", val: "margilon" }
    ,
    {
      text: "O'zbekiston",
      val: "ozbekiston"
    },
    { text: "Oltiariq", val: "oltiariq" },
    { text: "Qo'qon", val: "qoqon" },
    { text: "Qo'shtepa", val: "qoshtepa" }
    ,
    { text: "Quva", val: "quva" },
    { text: "Quvasoy", val: "quvasoy" },
    { text: "Rishton", val: "rishton" },
    { text: "So'x", val: "sox" }
    ,
    { text: "Toshloq", val: "toshloq" },
    { text: "Uchko'prik", val: "uchkoprik" },
    { text: "Yozyovon", val: "yozyovon" }

  ])

  const [namangan, setNamangan] = useState([

    { text: "CHortoq", val: "chortoq" },
    { text: "CHust", val: "chust" },
    { text: "Kosonsoy", val: "kosonsoy" },
    { text: "Mingbuloq", val: "mingbuloq" }
    ,
    {
      text: "Namangan SH",
      val: "namangansh"
    },
    {
      text: "Namangan Tum",
      val: "namangantum"
    },
    { text: "Norin", val: "norin" },
    { text: "Pop", val: "pop" }
    ,
    {
      text: "To'raqo'g'on",
      val: "toraqorgon"
    },
    {
      text: "Uchqo'rg'on",
      val: "uchqorgon"
    },
    { text: "Uychi", val: "uychi" },
    {
      text: "Yangiqo'rg'on",
      val: "yangiqorgon"
    }

  ])

  const [tashkent, setTashkent] = useState([
    { text: "Bektemir", val: "bektemir" },
    { text: "Sergili", val: "sergili" },
    { text: "Olmazor", val: "olmazor" },
    { text: "Uchtepa", val: "uchtepa" },
    { text: "Mirobod", val: "mirobod" },
    {
      text: "SHayhontohur",
      val: "shayhontohur"
    },
    { text: "Yashnabod", val: "yashnabod" },
    { text: "Yakkasaroy", val: "yakkasaroy" },
    {
      text: "Mirzo ulug'bek",
      val: "mirzoulugbek"
    },
    { text: "CHilonzor", val: "chilonzor" },
    { text: "Yunusobod", val: "yunusobod" },
    { text: "Qo'yliq", val: "qoyliq" }
  ])

  const AndijonW = () => {
    return (
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h6 className='fw-bold'>Andijonning Qayeriga ?</h6>

        {
          andijon.map((msh) => (

            <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/KishiSoni'>{msh.text}</Link>
          ))
        }
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/QayerManzil'>Orqaga</Link>


      </div >
    )
  }

  const FrmrW = () => {
    return (

      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h6 className='fw-bold'>Farg'onaning Qayeriga ?</h6>

        {
          frmr.map((msh) => (

            <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/KishiSoni'>{msh.text}</Link>
          ))
        }
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/QayerManzil'>Orqaga</Link>

      </div >
    )
  }

  const NamanganW = () => {
    return (
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h6 className='fw-bold'>Namanganning Qayeriga ?</h6>

        {
          namangan.map((msh) => (

            <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/KishiSoni'>{msh.text}</Link>
          ))
        }
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/QayerManzil'>Orqaga</Link>

      </div >
    )
  }

  const TashkentW = () => {
    return (
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <h6 className='fw-bold'>Toshkentning Qayeriga ?</h6>

        {
          tashkent.map((msh) => (

            <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/KishiSoni'>{msh.text}</Link>
          ))
        }
        <Link className="btn btn-outline-info fw-bold my-3" to='/Driver/QayerManzil'>Orqaga</Link>

      </div >
    )
  }
  const [valUser, setValUser] = useState('')

  const addMenu = () => {

    manVal.map((x) => {
      if (x.tg_id === tg_id) {
        if (x.manzil === "toshkent") {
          setValUser('<TashkentW />')
        }
        if (x.manzil === "andijon") {
          setValUser('<AndijonW />')
        }
        if (x.manzil === "namangan") {
          setValUser('<NamanganW />')
        }
        if (x.manzil === "frmg") {
          setValUser('<FrmrW />')
        }
      }

    })
  }
  useEffect(() => {
    addMenu();
  }, [])


  return (
    <div className='container' >
      {valUser === '<TashkentW />' ? <TashkentW />
        : valUser === '<AndijonW />' ? <AndijonW />
          : valUser === '<NamanganW />' ? <NamanganW />
            : <FrmrW />
      }
    </div >
  )
}

export default QayerTumanManzil
