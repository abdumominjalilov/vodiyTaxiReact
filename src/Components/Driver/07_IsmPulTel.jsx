import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addnamepultl } from '../../redux/action';
import { tg } from '../Tg';


const IsmPulTel = () => {


  const tg_id = tg.initDataUnsafe.user.id;

  const manVal = useSelector((state) => state.handleCart)

  const dispatch = useDispatch();

  const [ism, setIsm] = useState('')
  const [nechaPul, setNechaPul] = useState('')
  const [telefon, setTelefon] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

  }
  const formOnchange = (e) => {
    // console.log(e.target.placeholder);
    if (e.target.placeholder === 'Ism') {
      setIsm(e.target.value)
    }
    if (e.target.placeholder === 'Yolkira Narhi') {
      setNechaPul(e.target.value)
    }
    if (e.target.placeholder === 'Telefon Nomer') {
      setTelefon(e.target.value)
    } else {

      console.log(ism, nechaPul, telefon);
    }
  }
  const addMongo = async () => {
    const obj = manVal.find((x) => x.tg_id === tg_id)
    // Delete Customer
    const customer = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`)
    if (customer.data.Customer[0]) {
      await axios.delete(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/${tg_id}`)
      console.log('customer updated');
    } else {
      console.log('customer not');

    }
    // Add Driver
    const driver = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/Driver/${tg_id}`)
    if (driver.data.Driver[0]) {
      await axios.put(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/Driver/${tg_id}`, { ...obj, name: ism, phone: telefon, yolNarxi: nechaPul })

    } else {

      await axios.post('http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/Driver/add', { ...obj, name: ism, phone: telefon, yolNarxi: nechaPul })
    }
  }
  const buttonOnChange = async (e) => {

    dispatch(addnamepultl({ tg_id: tg_id, name: ism, phone: telefon, yolNarxi: nechaPul }));
    addMongo()

    // navigate('/')
  }
  return (
    <div className='container'>
      <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
        <form onChange={formOnchange}>
          <div className="form-group row">
            {/* <label htmlFor="inputemail" className='labeltxt col-sm-2 col-form-label'>Ismingizni Kiriting</label> */}
            <input type="text" className='form-control' id='inputem' placeholder='Ism' />
          </div>
          <div className="form-group row my-3">
            {/* <label htmlFor="inputemail" className='col-sm-2 col-form-label labeltxt'>Bir Kishiga Necha So'm ?</label> */}
            <input type="text" className='form-control' id='inputem' placeholder='Yolkira Narhi' />
          </div>
          <div className="form-group row">
            {/* <label htmlFor="inputemail" className='col-sm-2 col-form-label'>Telefon Raqamingizni Kiriting</label> */}
            <input type="text" className='form-control' id='inputem' placeholder='Telefon Nomer' />
          </div>
          <Link to='/Driver/ViewDriver' onClick={(r) => buttonOnChange(r)} type='submit' className='btn btn-outline-success my-3'>Yuborish</Link>
          <Link className="btn btn-outline-info fw-bold m-3" to='/Driver/KishiSoni'>Orqaga</Link>

        </form>

      </div >
    </div>
  )
}

export default IsmPulTel
