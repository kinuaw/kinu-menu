const dishes=[
{name:"Herb-roasted chicken",cat:"MAINS",price:890,desc:"Tender roast chicken, garden herbs, lemon jus.",tag:"CHEF'S PICK",img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=85"},
{name:"Grilled beef tenderloin",cat:"MAINS",price:1250,desc:"Char-grilled beef, rosemary potatoes, pepper sauce.",tag:"SIGNATURE",img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=85"},
{name:"Creamy mushroom pasta",cat:"MAINS",price:760,desc:"Wild mushrooms, parmesan, silky cream sauce.",tag:"",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85"},
{name:"Burrata & tomato",cat:"STARTERS",price:620,desc:"Creamy burrata, ripe tomato, basil oil.",tag:"",img:"https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=700&q=85"},
{name:"Crispy calamari",cat:"STARTERS",price:580,desc:"Lightly fried calamari, citrus aioli.",tag:"",img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700&q=85"},
{name:"Molten chocolate cake",cat:"DESSERT",price:390,desc:"Warm chocolate centre, vanilla cream.",tag:"A SWEET FINISH",img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=85"},
{name:"Passion fruit spritz",cat:"DRINKS",price:310,desc:"Passion fruit, sparkling water, fresh mint.",tag:"",img:"https://images.unsplash.com/photo-1513558161293-could-not-use?w=700&q=85"}
];
let selected="ALL";const cats=["ALL",...new Set(dishes.map(d=>d.cat))];
document.getElementById("tabs").innerHTML=cats.map(c=>`<button class="tab ${c===selected?"active":""}" data-cat="${c}">${c}</button>`).join("");
function render(){const list=selected==="ALL"?dishes:dishes.filter(d=>d.cat===selected);document.getElementById("cards").innerHTML=list.map(d=>`<article class="dish"><img src="${d.img}" alt="${d.name}" loading="lazy"><div class="dish-body"><div class="dish-top"><h3>${d.name}</h3><span class="price">ETB ${d.price}</span></div><p>${d.desc}</p>${d.tag?`<span class="tag">${d.tag}</span>`:""}</div></article>`).join("")}
document.getElementById("tabs").addEventListener("click",e=>{let b=e.target.closest("button");if(!b)return;selected=b.dataset.cat;document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));render()});render();