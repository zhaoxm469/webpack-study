// import '@babel/polyfill';

import('./scss/index.scss');

// console.log(213);
// (async () => {
//     const data = await getList();
//     console.log(data);
//     // getList().then((res) => {
//     //     console.log(res);
//     // });
// })();

getList().then((res) => {
    console.log(res);
});

function getList() {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(123123123);
        }, 1000);
    });
}
