const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const getSum = () => {
  // select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach(price => {
    total += Number(price.innerText);
  });

  // get table
  const table = document.querySelector("table");

  // prevent adding total row multiple times
  if (document.querySelector(".total-row")) return;

  // create new row
  const tr = document.createElement("tr");
  tr.classList.add("total-row");

  const td = document.createElement("td");
  td.colSpan = 2;
  td.innerText = `Total Price: Rs ${total}`;

  tr.appendChild(td);
  table.appendChild(tr);
};

  
};

getSumBtn.addEventListener("click", getSum);

