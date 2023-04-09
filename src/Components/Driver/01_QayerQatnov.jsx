import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adddriverQayerTaxi } from '../../redux/action';
import { tg } from '../Tg';


const QayerQatnov = () => {


    const tg_id = tg.initDataUnsafe.user.id;

    const dispatch = useDispatch();


    const DrBtn = (value) => {
        const nameProduct = value.target.classList[3]
        dispatch(adddriverQayerTaxi({ tg_id: tg_id, driverQayerTaxi: nameProduct }));
    }


    return (
        <div className="container">
            <div className="FirstBox d-grid gap-2 mx-auto m-5">
                <h5 className='fw-bold'>Qayerga Qatnaysiz ?</h5>
                <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold toshkentAndijon2" to='/Driver/Tuman'>Toshkent --- Andijon</Link>
                <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold toshkentFargona2" to='/Driver/Tuman'>Toshkent --- Farg'ona</Link>
                <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold toshkentNamangan2" to='/Driver/Tuman'>Toshkent --- Namangan</Link>
                <Link className="btn btn-outline-info fw-bold my-3" to='/'>Orqaga</Link>
            </div>
        </div >
    )
}

export default QayerQatnov
