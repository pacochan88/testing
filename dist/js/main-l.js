

require.config({
    paths: {
        'jquery': '../lib/jquery-1.7.2.min',
        'paging': '../lib/paging',
        'comm': 'my_comm'

    },
    shim: {
        'paging': { deps: ['jquery'] },
        'list': { deps: ['jquery', 'paging', 'comm'] }

    }
});


requirejs(['jquery', 'paging', 'comm', 'list'], function () { });


