import React from "react";
import Faq from "./Components/Faq";
import Help from "./Components/Help";
import CustomerReview from "./Components/CustomerReview";
import ContactDetail from "./Components/ContactDetail";
import OrderServiceForm from "./Components/OrderServiceForm";

const App = () => {
  return (
    <>
<ContactDetail/>
<OrderServiceForm/>
<Faq></Faq>
<Help /> 
<CustomerReview />
  </>
  );
};

export default App;
