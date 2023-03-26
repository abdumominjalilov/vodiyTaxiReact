import React from 'react';
import './Style/style.css';
import { Link } from 'react-router-dom';
// import tg from "./Components/Tg";
import { useDispatch } from 'react-redux';
import { addnameCustomer } from '../redux/action';



const First = () => {

    const dispatch = useDispatch();

    const tg = window.Telegram.WebApp;

    const tg_id = tg.initDataUnsafe.user.id;
    const lastname = tg.initDataUnsafe.user.last_name;
    const firstname = tg.initDataUnsafe.user.first_name;
    const username = tg.initDataUnsafe.user.username;

    const DrBtn = (value) => {
        console.log(value.target.childNodes[0].data);

        const namecus = value.target.childNodes[0].data
        dispatch(addnameCustomer({
            tg_id: tg_id, nameCustomer: namecus, lastname: lastname, firstname: firstname, username: username
        }));

    }

    const CrBtn = (value) => {

        console.log(value.target.childNodes[0].data);

        const namecust = value.target.childNodes[0].data

        dispatch(addnameCustomer({
            tg_id: tg_id, nameCustomer: namecust, lastname: lastname, firstname: firstname, username: username
        }));
    }
    return (
        <div className="container">
            <div className="FirstBox d-grid gap-2 mx-auto m-5">
                {/* {console.log(tg)} */}
                {/* <h3>Assalomu Alaykum</h3>
                <h3>Bo'limni tanlang</h3> */}
                <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold" to='/Driver'>Haydovchi</Link>
                <Link onClick={(r) => CrBtn(r)} className="btn btn-outline-info fw-bold" to='/Customer'>Mijoz</Link>
            </div>
        </div >
    )
}

export default First
