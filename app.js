

const allBtn=document.getElementsByClassName('add-btn')
/* for loop */
for (const btn of allBtn){
    //console.log(btn)
btn.addEventListener('click',function(event){


const name=event.target.parentNode.childNodes[1].innerText;
const price=event.target.parentNode.childNodes[3].childNodes[1].innerText;

const category=event.target.parentNode.childNodes[5].innerText;

const sselectedPlayersContainer=document.getElementById('selected-players-container')

const div=document.createElement('div')
div.classList.add('selected-player')
const p1=document.createElement('p1')
const p2=document.createElement('p2')
const p3=document.createElement('p3')

p1.innerText=name;
p2.innerText=price;
p3.innerText=category

div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)

sselectedPlayersContainer.appendChild(div)


updateTotalCost(price)
updateGrandTotal()

//console.log(name,price,category)

})

}


/* grand-total */

function updateGrandTotal(status){
    const totalCost=getConvertedValue("total-cost")
   // console.log(status)
if( status === undefined){

    document.getElementById('grand-total').innerText=totalCost;
    

}else{

const couponCode=document.getElementById('coupon-code').value;

if( couponCode === "love420"){
    

const discount=totalCost * 20 / 100;
document.getElementById('grand-total').innerText=totalCost - discount;




}else{
    alert("invalid coupon")
}

console.log(couponCode)



}
}

/* update-total-cost */
function updateTotalCost(value){
const totalCost=getConvertedValue("total-cost")
const sum=totalCost + parseInt(value)

document.getElementById("total-cost").innerText=sum;


}



/* utilties */
function getConvertedValue(id){

const price=document.getElementById(id).innerText;
const convertPrice=parseInt(price)
return convertPrice

}