
const checkValidate = (year, month, day) => {
  const userDate = new Date(year, month, day);

  const checkYear = userDate.getFullYear();
  const checkMonth = userDate.getMonth();
  const checkDay = userDate.getDate();

  const matchYear = year === checkYear;
  const matchMonth = month === checkMonth;
  const matchDay = day === checkDay;

  const isValid = matchDay && matchMonth && matchYear;
  return isValid
}
