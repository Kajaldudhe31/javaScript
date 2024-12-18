// console.log used for print the value
a=123;
console.log(a) 
let fullName = "Kajal Dudhe"
console.log(fullName)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
const age = 26;
console.log(age)

const isEdit = true;
console.log(isEdit)

const Test = null
console.log(Test)

let mark;
console.log(mark)

const y = BigInt("1224214")
console.log(y)

var z = Symbol("hello")
console.log(z)
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Lets print Object

const student ={
    studName :'Jiaxu',
    class    : 10,
    mark     : 88,
    age      : 15,
}

console.log(student) //all object show in student variable      

student['age'] = student['age']+5 //20
// student['age']Value assign to variable and add value whatever you want
console.log(student.age)
student['studName']="Kajal"
//Update value assign to variable student
console.log(student['studName'])    

const product={
    Milk : 'Katraj Dairy',
    Types : 'Cow , Buffalo',
    Dairy$Product : 'Panner,Cheese,Ghee,Curd',
    FAT_SNF:0.5
}
console.log(product)
console.log(product['Types'])
product['FAT_SNF'] = product['FAT_SNF'] + 0.6;
console.log(product['FAT_SNF'])

product['Milk']="Milk Dairy Name"
console.log(product['Milk'])

product ['Dairy$Product'] = [{panner:'any',Cheese:'Milk',Ghee:'Loni',Curd:'C vitamin',Rasmalai:'Sweet Dish',Aamarkhand:'Type of Curd'}]
console.log(product['Dairy$Product'])
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const products = {
    productName:'Ball Pen',
    rating:4,
    offer:5,
    price:270,
    isDeal:true,
}
console.log(products)
products['productName']='blue pen'
console.log(products.productName);

products['rating']=products['rating']+1
console.log(products['rating'])

products['offer'] = products['offer']+5
console.log(products.offer)
products['isDeal']=false
console.log(products.isDeal)

products['price'] = products['price']+20
console.log(products.price)


const profile = {
    userName : "Kajal Dudhe",
    isFollow :false,
    followers :44,
    following :4
}
console.log(profile)
console.log(typeof profile['isFollow'])
console.log(profile.userName)
console.log(typeof profile.userName)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arithmetic opertation
//  (+,-,*,/,%,**)(Unary Operator (Post Increment a++,a--),(Pre Increment)++a,--a)
const s=14 ,d=3;
console.log("s =",s ,"d =",d)
console.log("s+d =",s+d)
console.log("s-d =",s-d)
console.log("s*d =",s*d)
console.log("s/d =",s/d)
console.log("s%d =",s%d)
console.log("s**d =",s**d)
                                
let e = 3
let f = 2
let c = e + f //e and f variable value save to c variable
console.log("e + f =", c)

//Unary Operator Start(Unary Operator (Post Increment a++,a--),(Pre Increment)++a,--a)
//Pre Increment and Decrement Start)
// Note: in preincrement first change value show then print the value 
console.log(++e)
console.log(++f)
console.log(--e)
console.log(--f)
//Pre Increment and Decrement End)

//Post Increment and Decrement Start)
// Note: in postincrement first print the show then change value 
console.log(e++)
console.log(f++)
console.log(e--)
console.log(f--)
//Post Increment and Decrement End)
//Unary Operator End

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment operator(+=,-=,*=,/=,%=,**=)
let Z = 12 , V = 2
console.log("Z += V =", Z += V)//14
// console.log("Z -= V =", Z -= V)10
// console.log("Z *= V =", Z *= V)24
// console.log("Z *= V =", Z /= V)6
// console.log("Z %= V =", Z %= V)0
// console.log("Z **= V =", Z **= V)144

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Comparision Operator(==,!=,===,!==,< , <=,> , >=)
const A = 10, B = 5//A = 5, B = 5 & A = 5, B = '5'
console.log("A == B", A == B)//false in double equal to checking only Value 
console.log("A != B =",A != B)//True (return, condition is true then not equal to return False and when condition false not equal to return true)
console.log("A === B =",A === B)//false in tripple equal to checking Value as well as Datatype(checking condition stricktly)
console.log("A !== B", A !== B)//True(because this is a correct statement 10 is not equal to 5 valuewise and datatypewise also) 
console.log("A < B",A < B)//false
console.log("A <= B", A <= B)//false (if value is greater than or equal one possibility have i <= condition)
console.log("A > B",A > B)//true
console.log("A >= B",A >= B) //true
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Logical Operator
// (Note:- in OR operator at least two expression/two condition) ((AND Operator &&),(OR Operator ||),(NOT Operator !))
// Logical AND Operator &&(both condition is true that time AND operator return true otherwise return False)

let W = 6;
let S = 5;
// let W = 5;
// let S = 5;

// let cond1 = W > S //true() (using this also)
// let cond2 = W === 6 //true (using this also)
console.log("W && S",W > S && W === 6)//true 
// console.log("W && S",cond1 && cond2)//true (using this also)

// Logical OR Operator ||(Note:- in OR operator at least two expression/two condition)
// (at least one condition is true Or Both condition is true then that time OR operator return true and both condition are false that time OR Operator return False)
console.log("W || S =", W < S || W === 6) //true


// Logical NOT Operator ||(Note:- in NOT operator always One expression.one condition)
// (condition is true that time NOT Operator retrun False then that time OR operator return true and condition is false that time NOT Operator return True it's vice versa )
console.log("!(W < S) =", !(W < S)) //false condition but true in NOT
console.log("!(W === '6') =", !(W === 6)) //true condition but false in NOT

// Conditional Statements

let AgeofSanket = 27;
let Married =  'Engaged';
if(AgeofSanket >= 30 || Married === 'Engaged'){
 console.log("Sanket Engaged at age of 27")
}else{
    console.log("Sanket Not Engaged at age of 27")
}

let mode = "Dark";
let message;
if(mode == "Dark"){
    message = alert('Hey I am Kajal Welcome to Javascript Session')
}
if(mode == "Light"){
    message = alert('Hey I am Kajal Not Welcome to Javascript Session')
}
console.log(mode                               )
