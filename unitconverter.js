let sections = document.getElementById("sections");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let number = document.getElementById("number-el").value;
  let numbers = [
    {
      title: "Length (Meter/Feet)",
      value: `${number} meters = ${(number * 3.281).toFixed(
        3
      )} feet | ${number}  feet = ${(number / 3.281).toFixed(3)}  meters`,
    },
    {
      title: "Volume (Liters/Gallons)",
      value: `${number} liters = ${(number * 0.264).toFixed(
        3
      )} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters`,
    },
    {
      title: "Mass (Kilograms/Pounds)",
      value: `${number} kilos = ${(number * 2.204).toFixed(
        3
      )} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kiols`,
    },
  ];
  renderNumbers(numbers);
});
function renderNumbers(numbers) {
  let items = "";
  for (let i = 0; i < numbers.length; i++) {
    items += `<p id="section">${numbers[i].title}
     <br><span>${numbers[i].value}</span></p> `;
  }
  sections.innerHTML = items;
}
