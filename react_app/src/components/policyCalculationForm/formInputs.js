const input = function (
  name,
  label,
  inputvalue,
  type,
  errorMessage,
  pattern,
  min,
  max
) {
  this.name = name;
  this.label = label;
  this.inputvalue = inputvalue;
  this.type = type;
  this.errorMessage = errorMessage;
  this.pattern = pattern;
  this.min = min;
  this.max = max;
};

const inputs = [
  new input(
    "dob",
    "Date of birth",
    "dob",
    "date",
    "Age of customer should be in between 23-56"
  ),
  new input(
    "gender",
    "Gender",
    "gender",
    "text",
    "Please selecter gender of the user."
  ),

  new input(
    "modalPremium",
    "Modal Premium",
    "modalPremium",
    "Number",
    "Modal Premium should in between 10,000-50,000.",
    "",
    10000,
    50000
  ),
  new input("sumAssured", "Sum Assured", "sumAssured", "Number"),
  new input("premiumFrequency", "Premium Frequency", "premium Frequency"),
  new input(
    "pt",
    "PT",
    "pt",
    "Number",
    "PT should in between 10-20 and PT > PPT",
    "",
    10,
    20
  ),
  new input(
    "ppt",
    "PPT",
    "ppt",
    "Number",
    "PPT should in between 5-10 and PPT < PT",
    "",
    5,
    10
  ),
];

export default inputs;
