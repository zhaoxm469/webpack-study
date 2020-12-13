import('../scss/reset.scss');
// import { name } from './api';

function getList() {
    return [1, 2, 3];
}

// console.log(name);

(async () => {
    const data = await getList();
    document.body.innerHTML = data;
})();

// $('body').append('123');
