const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");

  let total = 0;
  prices.forEach(p => {
    total += Number(p.innerText);
  });

  const table = document.querySelector("table");

  if (document.querySelector("#ans")) return;

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.colSpan = 2;
  td.id = "ans";
  td.innerText = total;

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
