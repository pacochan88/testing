require.config({
    paths: {
        'jquery': '../lib/jquery-1.7.2.min',
        'comm': 'my_comm'

    },
    shim: {
        'gVerify': { deps: ['jquery'] },
        'cart': { deps: ['jquery', 'comm'] },//购物车
    }
});


//订单页
requirejs(['jquery', 'comm', 'cart'], function () { });


