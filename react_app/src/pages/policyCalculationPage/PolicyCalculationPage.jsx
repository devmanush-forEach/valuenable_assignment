import React from "react";
import "./PolicyCalculationPage.css";
import PolicyCalculationForm from "../../components/policyCalculationForm/PolicyCalculationForm";

const PolicyCalculationPage = () => {
  return (
    <div className="policy_input_main_container">
      <div className="policy_input_box">
        <PolicyCalculationForm />
      </div>
    </div>
  );
};

export default PolicyCalculationPage;
