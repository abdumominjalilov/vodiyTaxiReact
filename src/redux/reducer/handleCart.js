const cart = [{ id: 3, name: "ali" }];

const handleCart = (state = cart, action) => {

    const product = action.payload;

    switch (action.type) {

        case "DRMASHINA":
            const driverMashina = state.find((x) => x.tg_id === product.tg_id);
            if (driverMashina) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, driverMashina: product.driverMashina } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DRQAYERTAXI":
            const driverQayerTaxi = state.find((x) => x.tg_id === product.tg_id);
            if (driverQayerTaxi) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, driverQayerTaxi: product.driverQayerTaxi } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "KISHISONI":
            const kishiSoni = state.find((x) => x.tg_id === product.tg_id);
            if (kishiSoni) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, kishiSoni: product.kishiSoni } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "MANZIL":
            const manzil = state.find((x) => x.tg_id === product.tg_id);
            if (manzil) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, manzil: product.manzil } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "MANZILTUMAN":
            const manzilTuman = state.find((x) => x.tg_id === product.tg_id);
            if (manzilTuman) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, manzilTuman: product.manzilTuman } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "NAMECUSTOMER":
            const nameCustomer = state.find((x) => x.tg_id === product.tg_id);
            if (nameCustomer) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, tg_id: product.tg_id, nameCustomer: product.nameCustomer, lastname: product.lastname, firstname: product.firstname, username: product.username } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        tg_id: product.tg_id, nameCustomer: product.nameCustomer, lastname: product.lastname, firstname: product.firstname, username: product.username
                    }
                ]
            }
            break;
        case "NAMEPUL":
            const name = state.find((x) => x.tg_id === product.tg_id);
            if (name) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, name: product.name, phone: product.phone, yolNarxi: product.yolNarxi } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "VIEWDRIVER":
            const viewDriver = state.find((x) => x.tg_id === product.tg_id);
            if (viewDriver) {
                return state.map((x) =>
                    x.tg_id === product.tg_id ? { ...x, viewDriver: product.viewDriver } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;


        default:
            return state;
            break;
    }

};

export default handleCart;