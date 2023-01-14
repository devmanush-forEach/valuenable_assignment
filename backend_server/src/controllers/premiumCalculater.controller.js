const premiumCalculaterController = async (req, res) => {
  try {
    const { dob, gender, modalPremium, sumAssured, premiumFrequency, pt, ppt } =
      req.body;
    //  calculate the age

    const now = new Date();
    const dobYear = parseInt(dob.substring(0, 4), 10);
    const dobMonth = parseInt(dob.substring(5, 7), 10);
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    let age = nowYear - dobYear;
    if (dobMonth > nowMonth) {
      age = age - 1;
    }
    const data = {
      age,
      gender,
      sumAssured,
      modalPremium,
      premiumFrequency,
      pt,
      ppt,
    };

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = premiumCalculaterController;
