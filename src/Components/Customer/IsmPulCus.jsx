import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addnamepultl } from '../../redux/action';
import { tg } from '../Tg';


const IsmPulCus = () => {



    const tg_id = tg.initDataUnsafe.user.id;

    const manVal = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();
    const obj1 = manVal.find((x) => x.tg_id === tg_id)



    const [ism, setIsm] = useState('')
    const [nechaPul, setNechaPul] = useState('')
    const [telefon, setTelefon] = useState('')

    // // const navigate = useNavigate()

    const formOnchange = (e) => {
        // console.log(e.target.placeholder);
        if (e.target.placeholder === 'Ism') {
            setIsm(e.target.value)
        }
        if (e.target.placeholder === 'Narhi') {
            setNechaPul(e.target.value)
        }
        if (e.target.placeholder === 'Telefon') {
            setTelefon(e.target.value)
        } else {
            console.log(ism, nechaPul, telefon);
        }
    }
    const addCustomer = async () => {

        const obj = manVal.find((x) => x.tg_id === tg_id)

        // delete Driver
        // const driver = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/Driver/${tg_id}`)
        // if (driver.data.Driver[0]) {
        //     await axios.delete(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/Driver/${tg_id}`)

        // } else {
        //     console.log('Driver Not')
        // }

        // Add Customer

        const customer = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`)

        if (customer.data.Customer[0]) {
            await axios.put(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`, { ...obj, name: ism, phone: telefon, yolNarxi: nechaPul })
            console.log('customer updated');
        } else {
            await axios.post('http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/add', { ...obj, name: ism, phone: telefon, yolNarxi: nechaPul })
        }
    }

    const buttonOnChange = async (e) => {

        dispatch(addnamepultl({ tg_id: tg_id, name: ism, phone: telefon, yolNarxi: nechaPul }));
        addCustomer()
    }


    return (
        <div className='container FirstBox'>
            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <form onChange={formOnchange}>
                    <div className="form-group row">
                        {/* <label htmlFor="inputemail" className='labeltxt col-sm-2 col-form-label'>Ismingizni Kiriting</label> */}
                        <input type="text" className='form-control' id='inputem' placeholder='Ism' />
                    </div>
                    <div className="form-group row my-3">
                        {/* <label htmlFor="inputemail" className='col-sm-2 col-form-label labeltxt'>Bir Kishiga Necha So'm ?</label> */}
                        <input type="text" className='form-control' id='inputem' placeholder='Narhi' />
                    </div>
                    <div className="form-group row">
                        {/* <label htmlFor="inputemail" className='col-sm-2 col-form-label'>Telefon Raqamingizni Kiriting</label> */}
                        <input type="text" className='form-control' id='inputem' placeholder='Telefon' />
                    </div>
                    <Link onClick={(r) => buttonOnChange(r)} to='/Customer/ViewCustomer' type='submit' className='btn btn-outline-info my-3'>Yuborish</Link>
                    <Link className="btn btn-outline-success fw-bold m-3" to='/Customer/KishiSoni'>Orqaga</Link>
                </form>

            </div >


        </div>
    )
}

export default IsmPulCus
