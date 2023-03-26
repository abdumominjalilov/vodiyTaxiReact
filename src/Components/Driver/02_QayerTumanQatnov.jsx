import React from 'react';
import { Link } from 'react-router-dom';


const QayerTumanQatnov = () => {

    const DrBtn = (value) => {
        console.log(value.target);

    }



    const AndMenu = () => {
        return (
            <div className="container">

                <div className="FirstBox d-grid gap-2 mx-auto m-5">
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold andijonsh2" to='/Driver/Mashina'>Andijon SH</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold andijontum2" to='/Driver/Mashina'>Andijon tum</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold boston2" to='/Driver/Mashina'>Bo'ston</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold buloqboshi2" to='/Driver/Mashina'>Buloqboshi</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold asaka2" to='/Driver/Mashina'>Asaka</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold baliqchi2" to='/Driver/Mashina'>Baliqchi</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold izboskan2" to='/Driver/Mashina'>Izboskan</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold oltinkol2" to='/Driver/Mashina'>Oltinko'l</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold ulugnor2" to='/Driver/Mashina'>Ulug'nor</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold shahrihon2" to='/Driver/Mashina'>SHahrihon</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold jalaquduq2" to='/Driver/Mashina'>Jalaquduq</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold marhamat2" to='/Driver/Mashina'>Marhamat</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold xojaobod2" to='/Driver/Mashina'>Xo'jaobod</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold qorgontepa2" to='/Driver/Mashina'>Qo'rg'ontepa</Link>
                    <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold xonobod2" to='/Driver/Mashina'>Xonobod</Link>
                </div>
            </div>
        )

    }

    return (
        <div className="container">
            {/* {loading ? <Loading /> : <ShowProduct />} */}
            <AndMenu />
        </div >
    )
}

export default QayerTumanQatnov
