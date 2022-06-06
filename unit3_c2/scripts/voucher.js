let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;


fetch(url)

.then(function(res){
    return res.json();
})
.then(function(res){
    append(res[0].vouchers)
    console.log(res[0].vouchers)
}).catch(function(err){
    console.log("err");
})





function append(data){

    document.querySelector("#voucher_list").innerHTML=null;

    data.map(function(el){

        let box=document.createElement("div");
        box.setAttribute("class","voucher");

        let img=document.createElement("img");
        img.src=el.image;

        let p=document.createElement("p");
        p.innerText=el.name;

        let price=document.createElement("p");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="Buy";
        btn.setAttribute("class","buy_voucher");


        btn.addEventListener("click",function(){
            purchase(el);
        })

        box.append(img,p,price,btn)
        document.querySelector("#voucher_list").append(box);
    })
}


let arr2=JSON.parse(localStorage.getItem("purchase"))||[];

function purchase(data){
    console.log(data);
    arr2.push(data);
    localStorage.setItem("purchase",JSON.stringify(arr2));
window.location.reload();
    // let o= document.querySelector("#amount").value

    // console.log("0",o)
}


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