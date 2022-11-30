import "./App.css";
import Header from "./Components.js/Header";
import BillContainer from "./Components.js/BillContainer";
import SelectTip from "./Components.js/SelectTip";
import PeopleContainer from "./Components.js/PeopleContainer";
import RecapContainer from "./Components.js/RecapContainer";
import { useEffect, useState } from "react";
import logo from "./icon/SPLITTER.png";

function App() {
  const [bill, setBill] = useState("null");
  const [tip, setTip] = useState("null");
  const [nbPeople, setNbPeople] = useState("null");
  const [tipAmount, setTipAmount] = useState("null");
  const [totalAmount, setTotalAmount] = useState("null");
  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      setTipAmount(parseFloat((bill * tip) / 100 / nbPeople).toFixed(2));
      setTotalAmount(
        parseFloat((tipAmount * nbPeople + bill) / nbPeople).toFixed(2)
      );
    }
  }, [bill, tip, nbPeople, tipAmount, totalAmount]);

  return (
    <div>
      <header role="banner" className="logo">
        <img src={logo} alt="" />
        <Header />
      </header>

      <main role="main">
        <form className="container" role="form">
          <div className="general-input-container">
            <BillContainer setBill={setBill} />
            <SelectTip setTip={setTip} />
            <PeopleContainer nbPeople={nbPeople} setNbPeople={setNbPeople} />
          </div>
          <RecapContainer
            tip={tip}
            bill={bill}
            nbPeople={nbPeople}
            setBill={setBill}
            setTip={setTip}
            setNbPeople={setNbPeople}
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
            tipAmount={tipAmount}
            totalAmount={totalAmount}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
