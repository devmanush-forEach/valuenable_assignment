import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import GenderInput from "../genderInput/GenderInput";
import inputs from "./formInputs";
import "./PolicyCalculationForm.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { axiosPost } from "../../helpers/axiosRequests";
import { set_Policy } from "../../redux/actions/policy.actions";
import { useDispatch, useSelector } from "react-redux";

const PolicyCalculationForm = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    dob: "",
    gender: "",
    sumAssured: "",
    modalPremium: "",
    premiumFrequency: "",
    pt: "",
    ppt: "",
  });

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    e.preventDefault();

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please Login!!");
      return;
    }

    if (data.ppt >= data.pt) {
      toast.error("PPT ciuld not be greater than or equal to PT.");
      return;
    }

    if (data.sumAssured < data.modalPremium * 10) {
      toast.error(
        "The minimum value of sum assured should be ten times of modal premium."
      );
      return;
    }
    const { status, data: res } = await axiosPost("/premiumCalculater", data);
    if (status === 200) {
      dispatch(set_Policy(res));
      navigate("/illustration");
    } else {
      toast.error(data.error);
    }
  };

  const PremiumFrequencyInput = () => {
    return (
      <div className="frequency_select_box">
        <select
          name="premiumFrequency"
          id="premiumFrequency"
          onChange={handleChange}
          className="frequency_select"
          value={data.premiumFrequency}
          required
        >
          <option value="" selected disabled>
            Select Premium Frequency
          </option>
          <option value="Yearly">Yearly</option>
          <option value="Half-Yearly">Half-Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <label className="premium_freq_label" htmlFor="premiumFrequency">
          Premium Frequency
        </label>
      </div>
    );
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="illustration_fom">
        {inputs.map((ele, i) => {
          if (i === 1) {
            return <GenderInput onchange={handleChange} />;
          }
          if (i === 4) {
            return <PremiumFrequencyInput />;
          }
          return (
            <FormInput
              name={ele.name}
              onchange={handleChange}
              label={ele.label}
              inputValue={data[ele.inputvalue]}
              errorMessage={ele.errorMessage}
              pattern={ele.pattern}
              type={ele.type}
              min={ele.min}
              max={ele.max}
            />
          );
        })}

        <button className="submit_button" type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default PolicyCalculationForm;
