const dishes=[
{name:"Smash burger",cat:"BURGERS",price:690,desc:"Double beef patty, cheddar, pickles, house sauce.",label:"BEST SELLER",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=85"},
{name:"Crispy chicken burger",cat:"BURGERS",price:590,desc:"Crunchy chicken, slaw, spicy mayo.",label:"",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=85"},
{name:"Loaded fries",cat:"SIDES",price:360,desc:"Golden fries, melted cheese, spring onion.",label:"",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=85"},
{name:"Chicken wings",cat:"SIDES",price:520,desc:"Six wings tossed in smoky house glaze.",label:"",img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=85"},
{name:"Beef tacos",cat:"MAINS",price:640,desc:"Soft tortillas, seasoned beef, fresh salsa.",label:"",img:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=85"},
{name:"Grilled chicken wrap",cat:"MAINS",price:540,desc:"Grilled chicken, crunchy greens, garlic sauce.",label:"",img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=85"},
{name:"Mango cooler",cat:"DRINKS",price:240,desc:"Mango, lime and crushed ice.",label:"",img:"https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=85"},
{name:"Iced coffee",cat:"DRINKS",price:210,desc:"Cold brew, milk and a little sweetness.",label:"",img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=85"}
];
let category="ALL",term="";const cats=["ALL",...new Set(dishes.map(d=>d.cat))];
document.getElementById("categories").innerHTML=cats.map(c=>`<button class="category ${c===category?"active":""}" data-cat="${c}">${c}</button>`).join("");
function render(){const filtered=dishes.filter(d=>(category==="ALL"||d.cat===category)&&(d.name+" "+d.desc+" "+d.cat).toLowerCase().includes(term));document.getElementById("items").innerHTML=filtered.map(d=>`<article class="food"><img src="${d.img}" alt="${d.name}" loading="lazy"><div class="food-main"><div class="food-line"><h3>${d.name}</h3><span class="price">${d.price} ETB</span></div><p>${d.desc}</p>${d.label?`<span class="label">${d.label}</span>`:""}</div></article>`).join("");document.getElementById("empty").hidden=filtered.length>0}
document.getElementById("categories").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;category=b.dataset.cat;document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x===b));render()});
document.getElementById("search").addEventListener("input",e=>{term=e.target.value.toLowerCase().trim();render()});render();