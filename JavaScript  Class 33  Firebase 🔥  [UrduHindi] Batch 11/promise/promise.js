
















































// promise start work 

// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))


// Promise

// const getProducts = new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products/categories')
//     .then(res=>res.json())
//     .then(json=>resolve(json))
//     .catch(err=>reject(err))
// })
// getProducts
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// data
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// const dataPRPDUCT = ()=>{
// return  new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products')
//     .then( async (res)=>{
//         resolve( await res.json())
//     })
//     .catch(err=>reject(err))
// })
// }

// const dataCeg = ()=>{
//     return  new Promise((resolve, reject) => {
//         fetch('https://fakestoreapi.com/products/categories')
//         .then( async (res)=>{
//             resolve( await res.json())
//         })
//         .catch(err=>reject(err))
//     })
//     }
    
//     let getData = async () => {
//     try{

// let promises =[];
// promises.push(dataCeg(),dataPRPDUCT());
// console.log("🚀 ~ getData ~ promises:", promises);

//     }catch(err){
//         console.log(err);
//     }
// }
// getData()

// promise  work end
