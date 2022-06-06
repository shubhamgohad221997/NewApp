
let data=JSON.parse(localStorage.getItem("purchase"));
console.log(data)

let sum=0;
let c=data.length;
for(i=0;i<c-(c-1);i++){
    data.map(function(el){
   let a= el.price
   sum=sum+a;
    })
  
    // console.log("price",el.price)
    
}
document.querySelector("#wallet_balance").innerHTML=sum;
// window.location.reload();
console.log("sum",sum)

data.map(function(el){

    let box=document.createElement("div");
    box.setAttribute("class","voucher");

    let img=document.createElement("img");
    img.src=el.image;

    let p=document.createElement("p");
    p.innerText=el.name;

    let price=document.createElement("p");
    price.innerText=el.price;
    box.append(img,p,price)
    document.querySelector("#purchased_vouchers").append(box);




})