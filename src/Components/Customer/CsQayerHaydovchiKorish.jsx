import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const CsQayerHaydovchiKorish = () => {

    const sty = {
        width: "15rem",
        margin: "10px"
    }
    
    const tg = window.Telegram.WebApp;

    const tg_id = tg.initDataUnsafe.user.id;
    const [allCustomer, setAllCustomer] = useState([])
    const [allview, setAllView] = useState([])
    const [load, setLoad] = useState(false)

    const manVal = useSelector((state) => state.handleCart)
    const customerManzil = manVal.find((x) => x.tg_id === tg_id)

    const getProduct = async () => {


        const { data } = await axios.get(`https://my-vodiy-taxi-nodejs.herokuapp.com/api/AllTaxi/viewDriver/${customerManzil.viewDriver}`)

        if (data.Customers) {
            setLoad(true)
            setAllCustomer(data.Customers)
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
            <div className="row">
                {allCustomer.map((x) => (
                    <div key={x.tg_id} className="card" style={sty}>
                        <h1>Ism: {x.name}</h1>
                        <h4>Qatnov Manzili: {x.driverQayerTaxi}</h4>
                        <h4>Mashinasi: {x.driverMashina}</h4>
                        <h6>Telefon Raqami: {x.phone}</h6>
                    </div>
                ))}
            </div>
        )
    }

    const noDriver = () => {
        return (
            <div className="row FirstBox d-grid gap-2 mx-auto m-5" >
                <h5>Siz Tanlagan Viloyatga Haydovchi Yo'q</h5>
            </div >
        )
    }

    return (
        <div className="container col-8 d-flex align-items-center">
            {load ? <Driver />
                : <noDriver />
            }

        </div>
    )
}

export default CsQayerHaydovchiKorish