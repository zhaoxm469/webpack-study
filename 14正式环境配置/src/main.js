import('./fonts/iconfont.css');

import('./scss/index.scss');

const getList = () => Promise.resolve(123123);

(async () => {
    const data = await getList();
    data.b = 123;
})();
