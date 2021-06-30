var itemsArray = [
    {name:"juice",price:50, quantity:3},
    {name:"cookie",price:30, quantity:9},
    {name:"shirt",price:880, quantity:1},
    {name:"pen",price:100, quantity:2}]
console.log(itemsArray)
             
function totalPriceofEachItem()
{   var a,b,c,d;
    a=itemsArray[0].price*itemsArray[0].quantity;
    b=itemsArray[1].price*itemsArray[1].quantity;
    c=itemsArray[2].price*itemsArray[2].quantity;
    d=itemsArray[3].price*itemsArray[3].quantity;
    document.write("total price of ",itemsArray[0].name, " is "+a+"")
    document.write("<br/>total price of ",itemsArray[0].name, " is "+b+"")
    document.write("<br/>total price of ",itemsArray[0].name, " is "+c+"")
    document.write("<br/>total price of ",itemsArray[0].name, " is "+d+"")
    totalPriceofallitems(a,b,c,d);
}
function totalPriceofallitems(p,q,r,s)
{
   var total=(p)+(q)+(r)+(s);
    document.write("<br/>total price of all items is "+ total,"")
    
}
totalPriceofEachItem();

var student=
{
    name:"",
    email:"",
    password:"",
    age:"",
    gender:"",
    city:"",
    country:"",
}
if (student.age && student.country){
    document.write("<br/>age and country property exist")
}
else{document.write("<br/>age and country property does not exist")}


function Student(){

    this.name="ghous";
    this.email="ghous@gmail.com";
    this.phone=123456;
    this.id=212;
}
function Student(e,f,g,h)
{
    this.name=e;
    this.email=f;
    this.phone=g;
    this.id=h;
}
var test=[new Student("nadir","nadir@gmail.com",123456789,213),
          new Student("khan","khan@gmail.com",987456123,312)];

console.log(test)

function Population(){

    this.name="";
    this.gender="";
    this.address="";
    this.education="";
    this.profession="";
}
function Population(i,j,k,l,m)
{
    this.name=i;
    this.gender=j;
    this.address=k;
    this.education=l;
    this.profession=m;
}
var test1=[new Population("nadir","male","saddar","Bsc.","Teacher"),
          new Population("khan","male","gulshan","intermediate","plumber"),
          new Population("nabeel","male","gulistan e johar","matric","mason")
        ];

console.log(test1)