

require.config({
    paths: {
        'jquery': '../lib/jquery-1.7.2.min',
        'zoom': '../lib/zoomsl.min',
        'comm': 'my_comm'
    },
    shim: {
        'zoom': { deps: ['jquery'] },
        'goods': { deps: ['jquery', 'comm'] }
    }

});

requirejs(['jquery', 'zoom', 'comm', 'goods'], function () { });