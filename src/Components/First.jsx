import React from 'react';
import './Style/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addnameCustomer } from '../redux/action';
import { tg } from './Tg';



const First = () => {

    const dispatch = useDispatch();

    const manVal = useSelector((state) => state.handleCart)

    const tg_id = tg.initDataUnsafe.user.id;
    const lastname = tg.initDataUnsafe.user.last_name;
    const firstname = tg.initDataUnsafe.user.first_name;
    const username = tg.initDataUnsafe.user.username;

    const DrBtn = async (value) => {

        const user = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/${tg_id}`)

        if (user.data.User[0]) {
            await axios.put(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/${tg_id}`, {
                tg_id: tg_id, lastname: lastname, firstname: firstname, username: username
            })
        } else {
            await axios.post('http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/add', {
                tg_id: tg_id, lastname: lastname, firstname: firstname, username: username
            })
        }



        const namecus = value.target.childNodes[0].data
        dispatch(addnameCustomer({
            tg_id: tg_id, nameCustomer: namecus, lastname: lastname, firstname: firstname, username: username
        }));

    }

    const CrBtn = async (value) => {


        const user = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/${tg_id}`)

        if (user.data.User[0]) {
            await axios.put(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/${tg_id}`, {
                tg_id: tg_id, lastname: lastname, firstname: firstname, username: username
            })
        } else {
            await axios.post('http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/User/add', {
                tg_id: tg_id, lastname: lastname, firstname: firstname, username: username
            })
        }


        const namecust = value.target.childNodes[0].data

        dispatch(addnameCustomer({
            tg_id: tg_id, nameCustomer: namecust, lastname: lastname, firstname: firstname, username: username
        }));
    }
    return (
        <div className="container">
            <div className="FirstBox d-grid gap-2 mx-auto m-5">
                <h5 className='fw-bold'>Bo'limni Tanlang</h5>

                <Link onClick={(r) => DrBtn(r)} className="btn btn-outline-success fw-bold" to='/Driver'>Haydovchi</Link>
                <Link onClick={(r) => CrBtn(r)} className="btn btn-outline-info fw-bold" to='/Customer'>Mijoz</Link>
            </div>
        </div >
    )
}

export default First
