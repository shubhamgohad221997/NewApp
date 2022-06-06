function Data(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
}


function storeData(e){
    e.preventDefault();

    let form=document.getElementById("form");

    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    let s1=new Data(name,email,address,amount)
    console.log(s1);
    let arr=JSON.parse(localStorage.getItem("user"))||[];
    arr.push(s1);

    localStorage.setItem("user",JSON.stringify(arr));

    window.location.reload();
   
}


