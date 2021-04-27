const dataMhs = [
    {
        nama : "Reyhan",
        nim : "xxx"
    },
    {
        nama : "Zakie",
        nim : "xxx"
    },
];

// function get(cb){
//     setTimeout(function(){
//         cb(dataMhs);
//     }, 1000);
// }

// get(function(res){
//     console.log(res)
// })



// contoh callback
// function cb(isiPesan){
//     return isiPesan;
// }

// function fetchAPI(msg, timer,callback){
//     setTimeout(function(){
//         callback(msg);
//     }, timer)
// }

// fetchAPI("Ini data1", 1000, function(data1){
//     console.log("=====================");
//     console.log("Hasil Data 1");
//     console.log(data1);
//     console.log("=====================");
//     fetchAPI( data1+ " Ini data2", 1500, function(data2){
//         console.log("=====================");
//         console.log("Hasil Data 2");
//         console.log(data2);
//         console.log("=====================");
//         fetchAPI( data2+ " Ini data3", 1500, function(data3){
//             console.log("=====================");
//             console.log("Hasil Data 3");
//             console.log(data3);
//             console.log("=====================");
//             fetchAPI( data2+ " Ini data3", 1500, function(data3){
//                 console.log("=====================");
//                 console.log("Hasil Data 3");
//                 console.log(data3);
//                 console.log("=====================");
//                 fetchAPI( data2+ " Ini data3", 1500, function(data3){
//                     console.log("=====================");
//                     console.log("Hasil Data 3");
//                     console.log(data3);
//                     console.log("=====================");
//                     fetchAPI( data2+ " Ini data3", 1500, function(data3){
//                         console.log("=====================");
//                         console.log("Hasil Data 3");
//                         console.log(data3);
//                         console.log("=====================");
//                     })
//                 })
//             })
//         })
//     })
// })
// const data2 = fetchAPI("Ini data1 + ini data2", 1000, cb);

// promise
function get(){
    return new Promise(function(resolve, reject){
        try {
            setTimeout(function(){
                resolve(dataMhs);
            }, 1000)
        } catch (err){
            reject(err);
        }
    })
}

console.log(get());

// get()
//     .then(function(data){
//         return data;
//     })
//     .then(function(data2){
//         console.log("Ini adalah data");
//         console.log({data2})
//         return data2;
//     })
//     .then(function(data3){
//         console.log("Ini adalah data");
//         console.log({data3})
//         return data3;
//     })

// Promise.all([get(), get()])
//     .then(function(value){
//         console.log(value[0]);
//     })

async function main(){
    const data1 = await get();
    const data2 = await get();

    console.log({data1, data2});
}

main();