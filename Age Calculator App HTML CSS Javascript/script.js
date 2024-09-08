// ambil element element
const input = document.querySelector("#input-date");
const calcBtn = document.querySelector("#calc-btn");
const result = document.querySelector(".result");

calcBtn.addEventListener("click", () => {
  let born = new Date(input.value);
  let now = new Date();
  let [year, month, day] = calculateDateDifference(born, now);
  result.textContent = `you are ${year} years, ${month} months, ${day} days old`;
});

function calculateDateDifference(date1, date2) {
  if (date1 > date2) {
    [date1, date2] = [date2, date1];
  }

  let year = date2.getFullYear() - date1.getFullYear();
  let month = date2.getMonth() - date1.getMonth();
  let day = date2.getDate() - date1.getDate();

  if (day < 0) {
    day += new Date(date1.getFullYear(), date1.getMonth(), 0).getDate();
  }

  if (month < 0) {
    year--;
    month = 12 + month;
  }

  return [year, month, day];
}
