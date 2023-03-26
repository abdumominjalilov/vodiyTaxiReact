import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addnamepultl } from '../../redux/action';

const IsmPulTelCs = async () => {

  const tg = window.Telegram.WebApp;

  const tg_id = tg.initDataUnsafe.user.id;

  const manVal = useSelector((state) => state.handleCart)
  const obj = manVal.find((x) => x.tg_id === tg_id)
  const dispatch = useDispatch();



  const [ism, setIsm] = useState('')
  const [nechaPul, setNechaPul] = useState('')
  const [telefon, setTelefon] = useState('')

  const navigate = useNavigate()

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

  const buttonOnChange = async (e) => {
    // console.log(e);
    // e.preventDefault()

    dispatch(addnamepultl({ tg_id: tg_id, name: ism, phone: telefon, yolNarxi: nechaPul }));

    const customer = await axios.get(`https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi/${tg_id}`)
    if (customer.data.Customer) {
      console.log(customer.data.Customer);

      // console.log(obj);
    } else {

      await axios.post('https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi/add', obj)
      const all = await axios.get(`https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi/${tg_id}`)

      console.log(obj);
      console.log('qoshildi');
      console.log(all);
    }
    // navigate('/')
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
          <Link to='/Customer/ViewCustomer' onClick={(r) => buttonOnChange(r)} type='submit' className='btn btn-outline-primary my-3'>submit</Link>
        </form>

      </div >
    </div>
  )
}

export default IsmPulTelCs;