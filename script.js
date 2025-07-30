/*arithmetic operator*/


// let a=10;
// let b=5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(b++);
// console.log(a--);
// console.log(b--);

/*assignment operator*/

// let a=20
// let b=10
// let c=5
// let d=24
// let e=9
// let f=3
// let g=8
// let i=15
// let j=18
// let k=16
// let l=11
// let m=5




// console.log(a+=d);
// console.log(a+=f);
// console.log(a-=e);
// console.log(a*=j);
// console.log(a/=k);
// console.log(a%=m);
// console.log(a**=b);
// console.log(b+=c/d*m);
// console.log(a+b-c*d/e*f+g-i+j-k+l*m)


/*comparison operator*/


// let a=20
// let b=10;
// let c="20";
// let d=24;
// let e=9;
// let f=20;
// let g=8;
// let i=15;
// let j=15;
// let k=16;
// let l=11;
// let m=5;

// console.log(a==c);
// console.log(a===c);
// console.log(a===f);
// console.log(i!=j);
// console.log(g!=j);
// console.log(k<m);
// console.log(k<=m);
// console.log(f>m);
// console.log(f>=a);



/*if statement*/

// let name="zahiya"
// {
//     console.log("hello zahiya")
// }



/*if else statement*/

// let string="zahiya"

//     if(string.length>5){
//     console.log("string is long")
//     }
//     else{
//         console.log("string is short")
//     }


/* else if statement*/
// let age=3 ;
// if(age>=18){
//     console.log("you are eligible to vote")
// }
// else if(age<18){
//     console.log("you are not eligible to vote")
// }
// else (age<10)
// {
//     console.log("you are a child")
// }







/*switch statement*/

// let month=5
// switch(month){
//     case 1:console.log("januvery")
//     break;
//     case 2:console.log("february")
//     break;
//     case 3:console.log("march")
//     break;
//     case 4:console.log("april")
//     break;
//     case 5:console.log("may")
//     break;
//     case 6:console.log("june")
//     break;
//     case 7:console.log("july")
//     break;
//     case 8:console.log("august")
//     break;
//     case 9:console.log("september")
//     break;
//     case 10:console.log("october")
//     break;
//     case 11:console.log("november")
//     break;
//     case 12:console.log("december")
//     break;
// }

/*ternary operator*/

// let num=40;
//   let mark=num>=35?"you are passd":"you are failed";
//   console.log(mark);

/* nested ternary operator*/

// let score = 85;
// let grade = score >= 85 ? "A" : score >= 75 ? "B" : score >= 65 ? "c" : score >= 45 ? "D" : "E you are failed";
// console.log(grade);

/* for loop*/

//  for(let i=0;i<=10;i++){
//     console.log(i);
//     console.log("hello")



//    }


// for (let i = 1; i <= 5; i++) {
//     let r="";
//     for (let j = 1; j <= i; j++) {
//         i=r+j;
//     }
//     console.log(r);
// }


/* do-while-loop*/

// let a = "zahiya";
// while (a = "zahiya"); {
//     a = prompt("enter integer exit the loop");
//     alert("entered string");
// }

/* for-of-loop*/

// let grade=["A","B","C","D","FAIL"]
// for
//     (let r of grade){
//    console.log(r);
//     }


/* project*/

/* for-in*/

// let obj={
//     rahul:90,
//     sooraj:80,
//     rifad:70,
//     nabeel:67
// }

// for(key in obj){
// console.log(key +" :"+ obj [key]);
// }




/* for-of*/
// let id=["fathima:50","aysha:60","khadeeja:70"]
// for(let r of id){
//     console.log(r)
// }

// for (let i=0;i<=100;i++){

//       if (i%2==0 && i!=0){
//         console.log(i);
//   }
// }

/* length propertie*/

// let a=" khadeejath zahiya vs";
// let b=a.length;
// console.log(b);




/* string method*/

// let a="khadeejath zahiya vs";
// let b=a.toLowerCase();
// let c=a.toUpperCase();
// console.log(b)
// console.log(c)

/*  concat method*/

// let a="khadeejath";
// let b="zahiya";
// let d=a.concat(b , " ","vs");
// console.log(d)

/*  slice*/
// let a="good morning guyss";
// let b=a.slice(0,12)
// console.log(b)


/*  replace*/
// let a="hello zahiya";
// let b=a.replace("zahiya","world")
// console.log(b)

/* DEFINITION FUNCTION*/
// function city(place){
//     return `i am coming from ${place}`
// }
// console.log(city("kasargod"));
// console.log(city("kannur"));
// console.log(city("kozhikode"));
// console.log(city("ernakulam"));
// console.log(city("kollam"));


/* function expression*/

// let greet=function(name,name2){
//     let a =` my name is ${name} ${name2}`
//     return a;
// }
// let a="khadeejath";
// let b="zahiya";
// let c=greet(a,b);
// console.log(c)


/* arrow function*/
// let greet=(name)=>{
//     let a=`hello ${name}`
//     return a;
// }
// let b="world";
// let c=greet(b);
// console.log(c);


/*  single line arrow function*/

// let greet = (name) => `welcome ${name}`;
// console.log(greet("juniors"));

/*  arrays method*/


/*  push*/

// let name=["zahiya","shihana","fathima"];
// name.push=["aysha","khadeja"];
// console.log(name)



// let name=["zahiya","shihana","fathima"];
// let nm=prompt();
// name.push(nm);

// console.log(name)

/*  pop*/

// let name=["zahiya","shihana","fathima"];
// name.pop()
// console.log(name)

/* tostring*/


// let name=["zahiya","shihana","fathima"];
// let names= name.tostring();
// console.log(names);

/* unshift*/

// let fruits=["mango","apple","orange"]; 
// fruits.unshift("kiwi","stawberry")
// console.log(fruits);

/* shift*/
// let fruits=["mango","apple","orange","kiwi","stawberry"]; 
// fruits.shift()
// console.log(fruits)

/* sort*/

// let name=["zahiya","shihana","fathima","aysha","khadeja"];
// name.sort();
// console.log(name);


/* for each loop in array*/


// let letters=["A","B","C","D","E","F","G","H"];
// letters.forEach(function(lett,i,newArray){
//    console.log(`${i}:${letters}`);
//    console.log(newArray)
// })


/* for each loop in object*/


// let id=[
//     {name:"zahiya",
//          age:18,
//          place:"paduvadukam",
//          gender:"female"
//     },
//      {name:"shihana",
//          age:18,
//          place:"4th mail",
//          gender:"female"
//     },
//      {name:"zahima",
//          age:19,
//          place:"paduvadukam",
//          gender:"female"
//     }
// ]
// id.forEach(id=>{
//     console.log(`name : ${id.name} : age: ${id.age} : place :${id.place} : gender: ${id.gender}`);
// })



/* map*/

// let numbers=[4,6,8,10,12,14];
// let num= numbers.map((element,i)=>{
//     return element/2
// })
// console.log(num);

/* filter*/

// let age=[12,13,14,15,18,17,18,13,18,15,18];
// let newage=age.filter((ele)=>{
//     return ele===18
// })
// console.log(newage);





// let name=["zahiya","fathima","zahiya","shiyana","khadeeja"]
// let search=prompt("enter name")
// let newName=name.filter((val)=>{
//     return val==="zahiya"
// })
// console.log(newName)


