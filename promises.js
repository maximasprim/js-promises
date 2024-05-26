// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     console.log('Fetching data');
//     setTimeout(() => {
//       resolve("Data fetched successfully");
//       reject('Fetching data failed!');
//     }, 100);
//   });
//   return promise;
// }

// fetchData().then((text) => {
//     console.log(`Data fetched: ${text}`);
// }).catch((error) =>{
//     console.log(`Data failed: ${error}`);
// })



const fetchData =()=> {
    const promise = new Promise((resolve,reject) =>{
         console.group('Fetching data');
         setTimeout(() =>{
            // resolve('Data fetched successfully');
            reject('Data fetch failure!');
         },500);
    });
    return promise;
}
fetchData().then((text) =>{
    console.log(`Data fetched: ${text}`);
}).catch((error) =>{
    console.log(`Data failure: ${error}`);
})
