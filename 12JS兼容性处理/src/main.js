import('./scss/index.scss');

(async () => {
    const data = await getList();
    console.log(data);
    // getList().then((res) => {
    //     console.log(res);
    // });
})();

// getList().then((res) => {
//     console.log(res);
// });

function getList() {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(33);
        }, 1000);
    });
}
