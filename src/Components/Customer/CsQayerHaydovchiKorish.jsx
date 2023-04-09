import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tg } from '../Tg';


const CsQayerHaydovchiKorish = () => {

    const sty = {
        width: "15rem",
        margin: "10px"
    }


    const tg_id = tg.initDataUnsafe.user.id;
    const [allCustomer, setAllCustomer] = useState([])
    const [allview, setAllView] = useState([])
    const [load, setLoad] = useState(false)

    const manVal = useSelector((state) => state.handleCart)
    const customerManzil = manVal.find((x) => x.tg_id === tg_id)

    const getProduct = async () => {


        const { data } = await axios.get(`http://ec2-3-26-53-33.ap-southeast-2.compute.amazonaws.com:5003/api/AllTaxi/viewDriver/${customerManzil.viewDriver}`)

        if (data.User[0]) {
            setLoad(true)
            setAllCustomer(data.User)
        } else {
            setLoad(false)
        }
        // allview.map((x) => {
        //     x,
        //     x
        // })
    }


    useEffect(() => {
        getProduct()
    }, [])

    const Driver = () => {
        return (
            <div className="container">

                <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                    {allCustomer.map((x) => (
                        <div key={x.tg_id} className="card" style={sty}>
                            <h6>🙎‍♂️ Ismi: <b>{x.name}</b></h6>
                            <h6>🏚 Qatnov Manzili: <b>{x.driverQayerTaxi}</b></h6>
                            <h6>🚕 Mashinasi: <b>{x.driverMashina}</b></h6>
                            <h6> 📞 Telefon Raqami: <b>{x.phone}</b></h6>
                        </div>
                    ))}
                    <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/haydovchi_korish'>Orqaga</Link>

                </div>
            </div>
        )
    }

    const NotDriver = () => {
        return (
            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <div className="card" style={sty}>
                    <h5>Siz Tanlagan Viloyatga Haydovchi Yo'q</h5>
                </div>
                <Link className="btn btn-outline-success fw-bold my-3" to='/Customer/haydovchi_korish'>Orqaga</Link>

            </div >
        )
    }

    return (
        <div className="container col-8 d-flex align-items-center">
            {load ? <Driver />
                : <NotDriver />
            }

        </div>
    )
}

export default CsQayerHaydovchiKorish