const items=[
{name:"Avocado Toast",cat:"Brunch",price:480,desc:"Sourdough, smashed avocado, chilli flakes.",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=85"},
{name:"Classic Pancakes",cat:"Brunch",price:420,desc:"Fluffy pancakes, seasonal fruit, honey.",img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&q=85"},
{name:"Chicken Sandwich",cat:"Brunch",price:560,desc:"Grilled chicken, greens, house dressing.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=500&q=85"},
{name:"Cappuccino",cat:"Coffee",price:180,desc:"Espresso with silky steamed milk.",img:"https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=85"},
{name:"Iced Latte",cat:"Coffee",price:220,desc:"Double espresso, cold milk, ice.",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=85"},
{name:"Fresh Orange Juice",cat:"Drinks",price:250,desc:"Freshly squeezed, no added sugar.",img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=85"},
{name:"Chocolate Cake",cat:"Dessert",price:320,desc:"Rich chocolate layers, soft ganache.",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=85"},
{name:"Fruit Bowl",cat:"Dessert",price:290,desc:"A bright mix of fresh seasonal fruit.",img:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&q=85"}
];
let active="All";
const money=n=>"ETB "+n.toLocaleString("en-US");
function render(){const shown=active==="All"?items:items.filter(x=>x.cat===active);document.getElementById("count").textContent=shown.length+" ITEMS";document.getElementById("menu").innerHTML=shown.map(x=>`<article class="item"><img src="${x.img}" alt="${x.name}" loading="lazy"><div class="item-info"><h3>${x.name}</h3><p>${x.desc}</p></div><span class="price">${money(x.price)}</span></article>`).join("")}
const cats=["All",...new Set(items.map(x=>x.cat))];
document.getElementById("filters").innerHTML=cats.map(c=>`<button class="filter ${c==="All"?"active":""}" data-cat="${c}">${c}</button>`).join("");
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;active=b.dataset.cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));render()});render();