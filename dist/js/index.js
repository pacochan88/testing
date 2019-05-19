$(function () {
    // !检测是否登录
    if (getCookie('username')) {
        $('.page-login-link').show();
        $('.login-name').html(getCookie('username'));
        $('.page-explain-link').hide(getCookie('username'));
        $('.bar-login p').html(getCookie('username'));
    } else {
        $('.page-login-link').hide();
        $('.page-explain-link').show();
        $('.bar-login p').html('未登录');
    };

    $('.quit').on('click', function () {
        removeCookie('username');
        $('.page-login-link').hide();
        $('.page-explain-link').show();
    });

    $('.checkout').on('click', 'a', function () {
        if (getCookie('username')) {
            $(this).attr('href', 'html/cart.html');
        }
    })

    //轮播图插件
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 300,
        effect: 'fade',//淡入效果过度
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
    console.log(swiper);

    // 滑动到临界值就显示吸顶菜单
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 175) {
            $('.head-sticky').show();
        } else {
            $('.head-sticky').hide();
        }
    })

    //头部搜索按钮
    $('.tab').on('mouseover', function () {
        $('.store').show();
        $(this).find('i').addClass('over').removeClass('arrow');
    });
    $('.tab').on('mouseout', function () {
        $('.store').hide();
        $(this).find('i').addClass('arrow').removeClass('over');
    });

    $('.store').on('click', function () {
        $temp = $('.store span').html();
        $('.store span').html($('.ware span').html());
        $('.ware span').html($temp);
    })

    // 头部右边的按钮
    $('.my_mall').on('mouseover', function () {
        $('.my_mall dd').show();
        $('.my_mall dt').css({
            'background-color': '#fff',
            'border-bottom': 'none'
        });
    })
    $('.my_mall').on('mouseout', function () {
        $('.my_mall dd').hide();
        $('.my_mall dt').css({
            'background-color': '#FAFAFA',
            'border-bottom': '#F0F0F0 1px solid'
        })
    })

    $('.my_cart').on('mouseover', function () {
        $('.my_cart dd').show();
        $('.my_cart dt').css({
            'background-color': '#fff',
            'border-bottom': 'none'
        });
    })
    $('.my_cart').on('mouseout', function () {
        $('.my_cart dd').hide();
        $('.my_cart dt').css({
            'background-color': '#FAFAFA',
            'border-bottom': '#F0F0F0 1px solid'
        })
    })

    // 首页数据渲染
    var num = 0; //接受数据总条数
    var pageNo = 1;
    var number = 16;
    $.ajax({
        type: 'post',
        url: 'api/list.php',
        async: true,
        data: {
            'page': pageNo,
            'num': number,
        },
        dataType: 'json',
        success: function (str) {
            $html = str.data.map(function (item, sn) {
                // console.log(item, sn);
                num = sn;
                return ` <li class="index-list" data-uid="${item.id}">
                <div class="goods_pic">
                    <a href="javascript:void(0);"><img src="${item.backupBigImg}" alt=""></a>
                    <span class="tap_ap">今日</span>
                </div>
                <div class="goods_name">
                    <a href="javascript:void(0);">${item.goodsName}</a>
                </div>
                <div class="goods_price">
                    <span>￥${item.price}</span>
                    <a href="javascript:void(0);" class="icon_buy">去下单</a>
                </div>
            </li>`
            });
            // console.log($html);
            //渲染数据
            // $('.nro_list').eq(0).html($html.slice(0, 4).join(''));
            // $('.nro_list').eq(1).html($html.slice(4, 8).join(''));
            for (var i = 0; i < num; i++) {
                $('.nro_list').eq(i).html($html.slice(i * 4, i * 4 + 4).join(''));
            }

            skip();
        }
    })

    //!点击跳转
    function skip() {
        $('.nro_list').on('click', '.goods_pic', function () {
            var uid1 = $(this).parent('.index-list').attr('data-uid');
            $(this).children('a').attr('href', 'html/goods.html?' + uid1);
        });
        $('.nro_list').on('click', '.goods_name', function () {
            var uid2 = $(this).parent('.index-list').attr('data-uid');
            $(this).children('a').attr('href', 'html/goods.html?' + uid2);
        });
    }






    //侧边栏 点击回顶部

    $('.goTop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    })


    // 侧边栏切换

    //'叉'
    $('.close').on('click', function () {
        $(this).parents('#bigBar').animate({
            right: -60
        }, 450);
        $(this).parents('.toolBar').find('#smallBar').animate({
            right: 59
        }, 450);
    });
    //头像
    $('.minBar-bg').on('click', function () {
        $(this).parents('#bigBar').animate({
            right: 6
        }, 450);
        $(this).parents('#smallBar').animate({
            right: -86
        }, 450);
    })
})