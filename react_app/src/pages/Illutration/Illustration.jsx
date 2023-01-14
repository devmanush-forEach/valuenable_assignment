import React from "react";
import "./Illustration.css";
import { useSelector } from "react-redux";

const Illustration = () => {
  const { policy } = useSelector((state) => state.policy);
  console.log(policy);
  return (
    <div className="illustration_main_container">
      <div className="illustration_table_box">
        <h2 className="illustration_table_heading">Illustration Heading</h2>
        <table className="illustration_table">
          <thead>
            <th>Inputs</th>
            <th>Values</th>
          </thead>

          <tbody className="illustration_table_body">
            <tr>
              <td>Age</td>
              <td>{policy?.age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{policy?.gender}</td>
            </tr>
            <tr>
              <td>Sum Assured</td>
              <td>Rs. {policy?.sumAssured}</td>
            </tr>
            <tr>
              <td>Modal Premium</td>
              <td>Rs. {policy?.modalPremium}</td>
            </tr>
            <tr>
              <td>Premium Frequenct</td>
              <td>{policy?.premiumFrequency}</td>
            </tr>
            <tr>
              <td>Premium Term</td>
              <td>{policy?.pt} Years</td>
            </tr>
            <tr>
              <td>Premium Paying Term</td>
              <td>{policy?.ppt} Years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Illustration;
