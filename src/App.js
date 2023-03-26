import { Routes, Route } from "react-router-dom";
import QayerManzilCs from "./Components/Customer/01_QayerManzil";
import QayerTumanManzilCs from "./Components/Customer/02_QayerTumanManzil";
import IsmPulTelCs from "./Components/Customer/04_IsmPulTel";
import KishiSoniCs from "./Components/Customer/03_KishiSoni";
import QayerQatnov from "./Components/Driver/01_QayerQatnov";
import QayerTumanQatnov from "./Components/Driver/02_QayerTumanQatnov";
import Mashina from "./Components/Driver/03_Mashina";
import QayerManzil from "./Components/Driver/04_QayerManzil";
import QayerTumanManzil from "./Components/Driver/05_QayerTumanManzil";
import KishiSoni from "./Components/Driver/06_KishiSoni";
import IsmPulTel from "./Components/Driver/07_IsmPulTel";
import First from "./Components/First";
import ViewDriver from "./Components/Driver/ViewDriver";
import ViewDriver2 from "./Components/Driver/viewDriver2";
import ViewCustomer from "./Components/Customer/viewCustomer";
import CsHaydovchi_Topdim from "./Components/Customer/CsHaydovchi_Topdim";
import CsHaydovchilarni_Korish from "./Components/Customer/CsHaydovchilarni_Korish";
import CsQayerHaydovchiKorish from "./Components/Customer/CsQayerHaydovchiKorish";
import DrMijozTopdim from "./Components/Driver/DrMijozTopdim";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />

        <Route path="/Driver" element={<QayerQatnov />} />
        <Route path="/Driver/Tuman" element={<QayerTumanQatnov />} />
        <Route path="/Driver/Mashina" element={<Mashina />} />
        <Route path="/Driver/QayerManzil" element={<QayerManzil />} />
        <Route path="/Driver/QayerTumanManzil" element={<QayerTumanManzil />} />
        <Route path="/Driver/KishiSoni" element={<KishiSoni />} />
        <Route path="/Driver/IsmPulTel" element={<IsmPulTel />} />

        <Route path="/Customer" element={<QayerManzilCs />} />
        <Route path="/Customer/Tuman" element={<QayerTumanManzilCs />} />
        <Route path="/Customer/KishiSoni" element={<KishiSoniCs />} />
        <Route path="/Customer/IsmPulTel" element={<IsmPulTelCs />} />

        <Route path="/Driver/mijoz_topdim" element={<DrMijozTopdim />} />
        <Route path="/Driver/ViewDriver" element={<ViewDriver />} />
        <Route path="/Driver/ViewDriver2" element={<ViewDriver2 />} />
        <Route path="/Customer/ViewCustomer" element={<ViewCustomer />} />
        <Route path="/Customer/haydovchi_topdim" element={<CsHaydovchi_Topdim />} />
        <Route path="/Customer/haydovchi_korish" element={<CsHaydovchilarni_Korish />} />
        <Route path="/Customer/CsQayerHaydovchiKorish" element={<CsQayerHaydovchiKorish />} />


        <Route>
          Not Found 404
        </Route>
      </Routes>
    </div>
  );
}

export default App;
