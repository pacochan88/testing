$(function () {

    if (getCookie('username')) {
        $('.page-login-link').show();
        $('.login-name').html(getCookie('username'));
        $('.page-explain-link').hide();
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
            $(this).attr('href', 'cart.html');
        }
    })


    //todo 头部搜索按钮
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

    // *头部右边的按钮
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

    //?滑到临界值就固定bar条
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 393) {
            $('.category').show().css('display', 'inline-block');
            $('.show-bar').css({
                'position': 'fixed',
                'top': 0,
                'box-shadow': '0 2px 2px rgba(0, 0, 0, 0.2)'
            })
        } else {
            $('.category').hide();
            $('.show-bar').css({
                'position': 'static',
                'box-shadow': 'none'
            })
        }
    })



    //*从数据库获取数据  //初始化数据

    var temp1 = null;//为了获取数据的总个数
    var temp2 = null;//每页显示的个数
    var types = '';//排序变量

    var number = 16;//每页显示的条数
    function int(pageNow) {
        $.ajax({
            type: 'post',
            url: '../api/list.php',
            async: true,
            data: {
                'page': pageNow + 1,
                'num': number,
                'type': types
            },
            dataType: 'json',
            success: function (str) {
                // console.log(str)
                temp1 = str.total;//数据总个数
                temp2 = str.num;//每页显示个数
                $show = str.data.map(function (item) {
                    return `
             <li class="goods" data-gid="${item.id}">
                <div class="goods-content">
                    <div class="goods-img">
                        <a href="javascript:void(0);" target="_blank"><img src="${item.bigImg}" alt=""></a>
                    </div>
                    <div class="goods-info">
                        <div class="scroll-show">
                            <ul>
                                ${ item.miniImg1 ? `<li><a href="javascript:void(0);"><img src="${item.miniImg1}"></a></li>` : ''}
                                ${ item.miniImg2 ? `<li><a href="javascript:void(0);"><img src="${item.miniImg2}"></a></li>` : ''}
                                ${ item.miniImg3 ? `<li><a href="javascript:void(0);"><img src="${item.miniImg3}"></a></li>` : ''}
                                ${ item.miniImg4 ? `<li><a href="javascript:void(0);"><img src="${item.miniImg4}"></a></li>` : ''}
                                ${ item.miniImg5 ? `<li><a href="javascript:void(0);"><img src="${item.miniImg5}"></a></li>` : ''}
                            </ul>
                        </div>
                        <div class="goods-name">
                            <a href="javascript:void(0);" target="_blank"title="">
                                ${item.goodsName}<em></em>
                            </a>
                        </div>
                        <div class="goods-price"> 
                            <em class="sale-price" title="商城价：¥${item.price}">¥${item.price}</em> 
                            <em class="market-price" title="市场价：¥${item.marketPrice}">¥${item.marketPrice}</em> 
                            <span class="raty"  title="很满意">
                                <img src="../css/img/star-on.png" alt="1" title="很满意">&nbsp;
                                <img src="../css/img/star-on.png" alt="2" title="很满意">&nbsp;
                                <img src="../css/img/star-on.png" alt="3" title="很满意">&nbsp;
                                <img src="../css/img/star-on.png" alt="4" title="很满意">&nbsp;
                                <img src="../css/img/star-on.png" alt="5" title="很满意">
                            </span>
                        </div>
                        <div class="goods-sub">
                            <span class="goods-compare">
                                <i></i>
                                加入对比
                            </span> 
                        </div>
                        <div class="sell-stat">
                            <ul>
                                <li>
                                    <a href="###" target="_blank" class="status">${item.salesVolume}</a>
                                    <p>商品销量</p>
                                </li>
                                <li>
                                    <a href="###" target="_blank">${item.comment}</a>
                                    <p>用户评论</p>
                                </li>
                                <li><em>&nbsp;</em></li>
                            </ul>
                        </div>
                        <div class="store">
                            <a href="###" title="${item.merchant}" class="name">${item.merchant}</a>
                        </div>
                        <div class="add-cart">
                            <a href="javascript:void(0);">
                                <i class="iconfont icon-gouwuche"></i>
                                加入购物车
                            </a>
                        </div>
                    </div>
                </div>
            </li>
                `
                }).join('');

                $('#lists-pic').html($show);//?数据渲染
                // *生成页码要在生成节点后
                items(pageNow);
            }
        })
    }

    int(1);//默认是第一页,所以初次调用传'1'



    // !滑过小图 大图地址更改
    $('#lists-pic').on('mouseover', 'a', function () {
        var path = $(this).children().attr('src');
        // console.log(path);
        $(this).parents('.goods-content').children('.goods-img').find('img').attr('src', path);
    })

    //?点击分页按钮 切换商品数据
    //等到数据渲染后再执行
    function items(pagesNO) {
        // console.log(temp1, temp2);
        $("#box").paging({
            pageNo: pagesNO, //!传参数,对应的高亮
            totalPage: Math.ceil((temp1 - 16) / temp2),//*总页数
            totalSize: temp1 - 16,//总数据的个数
            callback: function (num) {//?返回值是按钮的对应的数据
                console.log(num);
                 int(num);

                if (num == 1) {
                    $('#firstPage').addClass('gray');
                    $('#prePage').addClass('gray');
                } else {
                    $('#firstPage').removeClass('gray');
                    $('#prePage').removeClass('gray');
                };
                if (num == 8) {
                    $('#nextPage').addClass('gray');
                    $('#lastPage').addClass('gray');
                } else {
                    $('#nextPage').removeClass('gray');
                    $('#lastPage').removeClass('gray');
                };
            }
        })

    }


    //默认排序
    $('.sort').on('click', '#default', function () {
        types = '';
        $('.sort').find('a').css('color', '#555');
        $('.sort').find('li').css('background', '#F7F7F7');
        $('.sort').find('i').css('background-position', '0 -11px');
        $(this).css('color', '#2f97f0');
        $(this).parent().css('background-color', '#fff');
        int(1);
    });

    //!排序 三个按钮

    //销量排序
    $('.sort').on('click', '#sale', function () {
        types = 'salesVolume';
        int(1);

        $('.sort').find('a').css('color', '#555');
        $('.sort').find('li').css('background', '#F7F7F7');
        $('.sort').find('i').css('background-position', '0 -11px');
        $(this).css('color', '#2f97f0');
        $(this).parent().css('background-color', '#fff');
        $(this).children().css('background-position', '-7px -11px');
    });
    //人气排序
    $('.sort').on('click', '#popularity', function () {
        types = 'comment';
        int(1);
        $('.sort').find('a').css('color', '#555');
        $('.sort').find('li').css('background', '#F7F7F7');
        $('.sort').find('i').css('background-position', '0 -11px');
        $(this).css('color', '#2f97f0');
        $(this).parent().css('background-color', '#fff');
        $(this).children().css('background-position', '-7px -11px');

    });
    //价格排序
    $('.sort').on('click', '#tariff', function () {
        types = 'price';
        int(1);
        $('.sort').find('a').css('color', '#555');
        $('.sort').find('li').css('background', '#F7F7F7');
        $('.sort').find('i').css('background-position', '0 -11px');
        $(this).css('color', '#2f97f0');
        $(this).parent().css('background-color', '#fff');
        $(this).children().css('background-position', '-7px -11px');

    });


    //*点击跳转详情页
    //点击图片跳转
    $('#lists-pic').on('click', '.goods-img', function () {
        var gid1 = $(this).parents('.goods').attr('data-gid');
        $(this).children('a').attr('href', 'goods.html?' + gid1);
    })

    // 点击文字描述跳转
    $('#lists-pic').on('click', '.goods-name', function () {
        var gid2 = $(this).parents('.goods').attr('data-gid');
        $(this).children('a').attr('href', 'goods.html?' + gid2);
    })



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