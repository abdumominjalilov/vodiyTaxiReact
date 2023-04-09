import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { tg } from '../Tg';
import { adddriverQayerTumanTaxi } from '../../redux/action';

const QayerTumanQatnov = () => {

    const tg_id = tg.initDataUnsafe.user.id;

    const manVal = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();

    const DrMnzTBtn = (product) => {

        const nameProduct = product.val
        dispatch(adddriverQayerTumanTaxi({ tg_id: tg_id, driverQayerTumanTaxi: nameProduct }));

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


    const AndijonW = () => {
        return (
            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <h6 className='fw-bold'>Andijonning Qayeriga ?</h6>

                {
                    andijon.map((msh) => (

                        <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/Mashina'>{msh.text}</Link>
                    ))
                }
                <Link className="btn btn-outline-info fw-bold my-3" to='/Driver'>Orqaga</Link>

            </div >
        )
    }

    const FrmrW = () => {
        return (

            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <h6 className='fw-bold'>Farg'onaning Qayeriga ?</h6>

                {
                    frmr.map((msh) => (

                        <Link onClick={() => DrMnzTBtn(msh)} key={msh.val} className="btn btn-outline-success fw-bold" to='/Driver/Mashina'>{msh.text}</Link>
                    ))
                }
                <Link className="btn btn-outline-info fw-bold my-3" to='/Driver'>Orqaga</Link>


            </div >
        )
    }

    const NamanganW = () => {
        return (
            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <h6 className='fw-bold'>Namanganning Qayeriga ?</h6>

                {
                    namangan.map((msh) => (

                        <Link onClick={() => DrMnzTBtn(msh)} key={msh.text} className="btn btn-outline-success fw-bold" to='/Driver/Mashina'>{msh.text}</Link>
                    ))
                }
                <Link className="btn btn-outline-info fw-bold my-3" to='/Driver'>Orqaga</Link>


            </div >
        )
    }
    const [valUser, setValUser] = useState('')


    const AndMenu = () => {

        manVal.map((x) => {
            if (x.tg_id === tg_id) {
                if (x.driverQayerTaxi === "toshkentAndijon2") {
                    setValUser('<AndijonW />')
                }
                if (x.driverQayerTaxi === "toshkentNamangan2") {
                    setValUser('<NamanganW />')
                }
                if (x.driverQayerTaxi === "toshkentFargona2") {
                    setValUser('<FrmrW />')
                }
            }
        })




    }
    useEffect(() => {
        AndMenu();
    }, [])

    return (
        <div className='container' >
            {valUser === '<AndijonW />' ? <AndijonW />
                : valUser === '<NamanganW />' ? <NamanganW />
                    : <FrmrW />
            }

        </div >
    )
}

export default QayerTumanQatnov
