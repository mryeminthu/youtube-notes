let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let randomNum = Math.random();
    if(randomNum > 0.4){
        resolve("Fetch data successfully!");
    }else{
        reject("Fetch data fails!");
    }
    },2000)
});

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let data = "Fetch data successfully";
//     if(data){
//         resolve(data);
//     }else{
//         reject("Fetch data fails");
//     }
//     }, 1000);
// })

// myPromise.
// then((result)=>{
//     console.log(result);
// }).
// catch((err)=>{
//     console.log(err);
// })