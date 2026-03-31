//! Printing Statement 

 // 1) document.write()    <-- deprecated , print data on UI     (not in use )
//     document.write("Hello") 
 // 2) document.writeln()    : to print data on viewport / UI      (it create space between words)
//     document.writeln("Bye")
 // 3) console.log()     to print data on console window 
//     console.log("Hello World");


//! Tokens :smallest unit of any programming language 
// there are four types of tokens 

// 1. keywords  -- predefined words with has specific meaning . All keywords must be in lower case . e.g: if ,else, var, let ,const etc
// 2.identifiers -- Name given to a class ,variables ,function etc 
// 3.Literals / Values -- data store into a variable 
// 4.Operators -- Used to perform some operation between operands 

//!  DATATYPES

// There are two types :
// 1. Primitive 
// 2. Non-Primitive

// 1. Primitive : call by value (Immutable)
//     -number 

//         var a1=10.1
//         console.log(a1); //10.1
//         console.log(typeof a1); //Number
        
// //     -string 

//         var a2="Hello World"
//         console.log(a1); //Hello World
//         console.log(typeof a1); // String 

//           var a3=`Heyy There  Welcome to Sagar World ${a2}`
//         console.log(a3); 
//         console.log(typeof a1); // String

        

// //     -boolean
//              var a4=true
//              console.log(a4); //true
//              console.log(typeof a4); //boolean
//              console.log(typeof typeof a4); //string 
             
             
             

// //     -undefined :default value provided by js-engine implicitly
//             var a5   
//         console.log(a5); //undefined
//         console.log(typeof a1); // undefined


// //     -null : provided by developer intentionally
//             var a6=null
//         console.log(a6); //null
//         console.log(typeof a6); // Object


// //     -BigInt : [-2^53 - 1 to 2^53 -1]
//             var a7=1n
//             console.log(a7);
//             console.log(typeof a7);//bigint
            
            

// //     -Symbol

// var a8= Symbol("Hello")
// var a9= Symbol("Hello")

// console.log(a8);// Symbol(Hello)
// console.log(a9);// Symbol(Hello)

// console.log(a8==a9);//false


// //! difference btw == and ===
       //  var n1=10;
       //  var n2="10"
       //  console.log(n1==n2);  //true ,check data - not datatype 
       //  console.log(n1===n2); // false , check data and datatype
         
         

// // 2.Non-Primitive : call by referance (mutable)
// //     -Object
//                 var obj={firstname : "Sagar" , lastname : "Raj"}
//                 console.log(obj); 
//                 console.log(obj.firstname); //Sagar
//                 console.log(typeof obj); //object         
         
// //     -array 

//             var arr=[10,20,30,40];
//             console.log(arr);
//             console.log(arr[2]); //30
//             console.log(typeof arr); //object

            
// //     -function 

//             function greet(){
//                 console.log("Welcome to sagar World ");
                
//             }

//             greet()

//             console.log(typeof greet); //function

//    // ----------------------------------

//                var SpecialNumber="Sgr" * 10
//             console.log(SpecialNumber ); //NaN  (Not a Number)
//             console.log(typeof SpecialNumber); //number


// //! mutable and Immutable Example 
//             var str1="Hello"
//             str1[0]="J"
//             console.log(str1); //Hello <-- immutable 
            

//             var arr1=[10,20,30,40];
//             arr1[0]=100;
//             console.log(arr1);  //[100,20,30,40]   <-- mutable

// //! Hosting  : Moving declaration part at the top of the code internally
//             console.log(a); //UD ,due to hosting 
//             var a9=10
//             console.log(a9); //10
            

// //! Difference between var ,let and const 

// //! var example 
//                 var a; // declaration 
//                 console.log(a); // undefined 

//                 a=10; //initialization
//                 console.log(a); //10

//                 var a; // re-declaration 
//                 a=20; //re-initialization 
//                 console.log(a); //20

//         var a1=30; //declaration and initialization 
//         console.log(a1); //30

//         var a1=40; //re-declare and re-initialize 
//         console.log(a1); //40

// //! let Example
//             let b;   // declaration 
//             console.log(b); //undefined 

//             b=100;
//             console.log(b); //100

//         //     let b //erroe due to re-declaration 

//             b=200;
//             console.log(b); //200

// //! const Example
//             const c=500;  //declare and initialize
//             console.log(c); //500


//                                            var                  let                   const

// Declare                                   yes                    yes                    no 

// Initialize                                yes                    yes                    no 

// re-declare                                yes                    no                     no 

// re-Initialize                             yes                    yes                    no 

// declare & Initialize                      yes                    yes                   yes

// re-delcare & re-Initialize                yes                    no                     no







// var x= undefined   
// let y     <-- Temporal dead zone   
// let z  <-- Temporal dead zone 
            

// console.log(x);  //undefined 

// console.log(y); // error --> can not access before initializing 

// console.log(z); // error --> can not access before initializing 

        //   var x= 10;
        //   let y=20;
        //   const z=30;
          
        // console.log(x); //10
        // console.log(y); //20
        // console.log(z); //30
    

// debugger;
// var n1=10;
// let n2=20;
// const n3=30;

// console.log(n1,n2,n3);



//! Example 2

// // let variable get initialize during exxecution phase if no data provided .

// debugger;
// console.log(a); //undefined 
// var a;
// console.log(a); //undefined 
// let b;
// console.log(b); //undefined 

// const c=100;
// console.log(c); //undefined 

//! TYPES of Variables AND its Scope

//1.Global Variables
        //     -- A variable declare outside of conditional or loops or functions (globally) are known as Global Variables.
        //     --It can be accessed anywhere in the code 
 
        //     var a11=10      //Global Variable   --global scope 
        //     let a14=20      //Global Variable       --script scope    b/c TDZ (Temporary dead zone)
        //     const a13=30    //Global Variable     --script scope    b/c TDZ
        //     console.log(a11,a14,a13);



// 2.Local Variables 
        //     if(10>2){
        //         var b1=100    //Global Variable   --global scope 
        //           let b2=200  //Local Variable       --block scope   
        //     const b3=300  //Local Variable     --block scope   
        //     }
        //     console.log(b1); //100
        //     console.log(b2);  //!b2 not defined




        //         debugger;
        // function demo(){
        //          var a11=10          // Local Varaible  --Local Scope
        //    let a14=20         // Local Varaible  --Local Scope
        //    const a13=30         // Local Varaible  --Local Scope
        //    console.log(a11,a14,a13);
        // }

        // demo()
        // console.log(a11);  //c1 is not defined 
        

//! FUNCTIONS : Resusable Block of code used to perform some specific task 

//There are TEN types of functions 
          //!     1.NAMED FUNCTIONS 
          //!     2.ANONYMOUS FUNCTIONS 
          //!     3.FUNCTION EXPRESSION
          //!     4.RETURN TYPE FUNCTION
          //!     5.FUNCTION WITH PARAMETERS 
          //!     6.REST PARAMETER FUNCTION 
          //!     7.LIFE 
          //!     8.HIGHER ORDER AND CALLBACK FUNCTION 
          //!     9.ARROW FUNCTION 
          //!     10.CONSTRUCTOR FUNCTION 


// NOW EXPLAIN :---------

  //!     1.NAMED FUNCTIONS : a function which has name 
     // NOTE:- We can called name function before declaration due to function hoisting. 
     //        Function hoisting only occurs in name function.

                //   greet();  //due to hoisting 

                // function greet(){
                //         console.log("I am Sagar");
                // }

                // greet();

      //  --> Example 1


        // debugger;
        // console.log("start");
        // demo();
        // var a1=100;
        // console.log(a1);
        // function demo(){
        //         let d1="Hii"
        //         console.log("i am demo");
                
        // }

        // let a2;
        // console.log(a1,a2);
        // console.log("end");
        

//!     2.ANONYMOUS FUNCTIONS : Function without name is known as Anonymous function.
                // function (){}

 //!     3.FUNCTION EXPRESSION  : used to call Anonymous function.

                // console.log(displayName); //undefined 
                // displayName();    //error 
                
                // var displayName=function(){
                //         console.log("i am sagar doe");
                        
                // };

                // console.log(displayName); //it print full function with body

                // displayName();   // i am sagar doe


                



          //!     4.RETURN TYPE FUNCTION
                //         function sum(){
                //                 let n1=10;
                //                 let n2=20;
                //                 let result=n1+n2;
                //                 return result;

                //         }
                //        let res= sum();
                //          console.log(res);



          //!     5.FUNCTION WITH PARAMETERS 
        //             //  here, fname and lname are parameters
        //                 function getFullName(fname,lname){
        //                         console.log(`My name is ${fname} ${lname}`);
                                
        //                 }

        //                 getFullName("Sagar","Raj");

        // // DEFAULT PARAMETER
        //          const multiply=function (n1=1,n2=1){
        //                 console.log(n1*n2);
                        
        //          };
                 
        //          multiply();  
        //          multiply(10,20);
        //        multiply(10);
          //!     6.REST PARAMETER FUNCTION 

               // NOTE:- rest parameter must be the last parameter in the parameter  list 
                        // function userLists(user1,...rest){
                        //         console.log(user1);   // Ram     // stored copy karke 
                        //         console.log(rest);     //['Raj', 'Ranjan', 'Singh']    //rest all argument 
                                
                        //         console.log(arguments); // ['Sagar', 'Raj', 'Ranjan', 'Singh']  // all arguments 

                                
                        // }

                        // userLists("Sagar","Raj","Ranjan","Singh");


          //!     7.IIFE   : Immediately invoked function expression 

        //                         (function(){
        //                                 console.log("IIFE");
        //                                 // bich m koi code ni likh skte .
        //                         })();


        //       let val=(function(){
        //                      console.log("IIFE");
        //                      // bich m koi code ni likh skte .
        //                      return n1+n2;
        //              })(10,20);

        //                      console.log(val);
                                
                                

          //!     8.HIGHER ORDER AND CALLBACK FUNCTION 
                     //sum is a callback function : a function which is passes as an arguments 
                        // function sum(n1,n2){
                        //         console.log(n1+n2);
                                
                      //  }
                     // calculate is HOF : a funtion which accepts another funation as an argument
                        // function calculate(x,y,fun){
                        //         fun(x,y);
                        // }

                        // calculate(10,20,sum);


          //!     9. NESTED FUNCTION : function inside another function 
                        // function parent(){
                        //         let money =1000;
                        //         console.log(money);

                        //         function child(){
                        //                 let savings =500;
                        //                 console.log(savings);
                                        
                        //         }

                        //         child();
                                
                        // }
                        // parent();

             //   Example 2:

                //   function parent(){
                //                 let money =1000;
                //                 console.log(money);

                //                 function child(){
                //                         let savings =500;
                //                         console.log(savings+money);
                                        
                //                 }

                //                 child();
                                
                //         }
                //         parent();


        //Example 3

                //          function parent(){
                //                 let money =1000;
                //                 console.log(money);

                //                 function child(){
                //                         let savings =500;
                //                         console.log(savings+money);
                                        
                //                 }

                //                return  child;
                                
                //         }
                //       let val=  parent();
                //          console.log(val);
                //          val();
                         
                //CLOSURE : it is a memory which is created whenever child function access the property of parents function 

                // LEXICAL SCOPING  : the ability of JS engine to search a variable outside of its local scope 


                //! closure and lexical scoping example

                // funtion counter(){
                //         let count=0;
                //         return function(){
                //                 counter++;
                //                 console.log("count is ",count);
                                
                //         };
                // }

                // let val1=counter();
                // val1();
                // val1();
                // val1();
                // val1();
                // val1();
                

          //!     10.ARROW FUNCTION   : introduced in ES6 
                        //way 1

                        let a1=() => {
                                console.log("i am arrow function 1");
                                
                        }
                        a1();
                        
                        //way 2
                         let a2= _  => {
                                console.log("i am arrow function 2");
                                
                        }
                        a2();

                         //way 3               agr ek parameter ho to bina ( ) bhi kam kar jayega but ek se jyda ho to () lgana pdega.
                         let a3= n1 => {
                                console.log("i am arrow function 3");
                                
                        }
                        a3();

                         //way 4              agr one line of code hoga to without using { } likh skte hai 
                         let a4= ()  =>  console.log("i am arrow function 4");
                        a4();

                         //way 5  --> Explicit return           agr return use hoga to { } hona jruri hai ,kyu na ek line ka code rhe fir bhi use krenge 
                         let a5= () => {
                                return "i am Explicit return";
                                
                        }
                       console.log(a5());

                         //way 6  -->implicit  return          
                           let a6= () =>  "i am Implicit  return";
                       console.log(a6());

                         //way 7  -->            ({name : "Sagar Raj"})     ---- esme ( ) jruri hona chahiye 
                           let a7= () => ({name : "Sagar Raj"})
                       console.log(a7());
             


          //!     11.CONSTRUCTOR FUNCTION 
                
            



        
                
                
                
            
            


            
            
            











