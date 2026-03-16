const products = [
  { name: "Áo thun", price: 150000 },
  { name: "Giày thể thao", price: 850000 },
  { name: "Mũ bóng chày", price: 120000 },
  { name: "Balo du lịch", price: 450000 },
  { name: "Đồng hồ", price: 1200000 },
];

const MAX_PRICE_VND = 500_000;

// Core requirement: filter (<500k) -> sort asc -> return names
function getAffordableProductNames(items, maxPrice = MAX_PRICE_VND) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((p) => p?.price < maxPrice)
    .sort((a, b) => a.price - b.price)
    .map((p) => p.name);
}

function renderList(listId, items, renderItem) {
  if (typeof document === "undefined") return;

  const el = document.getElementById(listId);
  if (!el) return;

  const fragment = document.createDocumentFragment();

  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = renderItem(item);
    fragment.appendChild(li);
  }

  el.innerHTML = ""; 
  el.appendChild(fragment); 

 
}

// Display all 3 steps on UI
const filtered = products.filter((p) => p.price < MAX_PRICE_VND);
const sorted = filtered.slice().sort((a, b) => a.price - b.price);
const names = getAffordableProductNames(products);

renderList("result1", filtered, (p) => `${p.name} - ${p.price.toLocaleString("vi-VN")} VND`);
renderList("result2", sorted, (p) => `${p.name} - ${p.price.toLocaleString("vi-VN")} VND`);
renderList("result3", names, (name) => name);

console.log({ filtered, sorted, names });
