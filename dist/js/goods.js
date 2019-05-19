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

    // !数据渲染
    //接受列表页传过来的商品id

    var getGid = $(location).attr('search').slice(1);


    $.ajax({
        type: 'get',
        url: '../api/goods.php',
        async: true,
        data: { 'id': getGid },
        dataType: 'json',
        success: function (str) {

            $goods = str.map(function (item) {
                return `
                <!-- ?商品页 图 -->
                <div id="goods-picture" class="goods-picture">
                    <div class="gallery-big">
                        <div class="img-area ">
                            <img class="my-foto" src="${item.bigImg}" alt="">
                        </div>
                    </div>
                    <div class="gallery-s">
                        <div class="controller">
                            <ul>
                            ${ item.miniImg1 ? `<li><img src="${item.miniImg1}"></li>` : ''}
                            ${ item.miniImg2 ? `<li><img src="${item.miniImg2}"></li>` : ''}
                            ${ item.miniImg3 ? `<li><img src="${item.miniImg3}"></li>` : ''}
                            ${ item.miniImg4 ? `<li><img src="${item.miniImg4}"></li>` : ''}
                            ${ item.miniImg5 ? `<li><img src="${item.miniImg5}"></li>` : ''}
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- *商品页 详细  -->
                <div class="goods-summary">
                    <div class="name">
                        <h1>${item.goodsName}</h1>
                    </div>
                    <div class="meta">
                        <dl>
                            <dt>市&nbsp;场&nbsp;价：</dt>
                            <dd class="cost-price"><strong>¥${item.marketPrice}</strong></dd>
                        </dl>
                        <dl>
                            <dt>商&nbsp;城&nbsp;价：</dt>
                            <dd class="price">
                                <strong>¥${item.price}</strong>
                            </dd>
                        </dl>
                        <dl class="rate">
                            <dt>商品评分：</dt>
                            <dd>
                                <span class="raty" data-score="5" title="很满意">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="1"
                                        title="很满意">&nbsp;<img
                                        src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="2"
                                        title="很满意">&nbsp;<img
                                        src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="3"
                                        title="很满意">&nbsp;<img
                                        src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="4"
                                        title="很满意">&nbsp;<img
                                        src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="5"
                                        title="很满意">
                                </span>
                                <a href="#ncGoodsRate">共有${item.comment}条评价</a>
                            </dd>
                        </dl>
                        <div class="g-code">
                            <p><img src="https://www.nanshig.com/data/upload/shop/store/14/219474.png" alt=""></p>
                            <span>客户端扫购有惊喜</span>
                        </div>
                    </div>
                    <dl class="service">
                        <dt>服&nbsp;&nbsp;务：</dt>
                        <dd>
                            由
                            <a href="####" title="进入店铺"><b>${item.merchant}</b></a>
                            发货并提供售后服务。
                            <span id="store-free-time">18:00 前完成下单，预计(<b>3天内</b>) 送达</span>
                        </dd>
                    </dl>
                    <div class="logistics">
                        <dl class="freight">
                            <dt>配&nbsp;&nbsp;送&nbsp;&nbsp;至：</dt>
                            <dd class="freight_box">
                                <div class="freight-select">
                                    <div class="text">
                                        广东广州市天河区
                                        <b>∨</b>
                                    </div>
                                </div>
                                <div class="freight-prompt">
                                    <strong>有货</strong>
                                    免运费
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="opt">
                        <hr>
                        <dl class="color-box">
                            <dt>颜色：</dt>
                            <dd>
                                <ul>
                                    ${ item.miniImg1 ? `<li class="sp-img"><a href="javascript:void(0);"><img src="${item.miniImg1}">粉色<i></i></a></li>` : ''}
                                    ${ item.miniImg2 ? `<li class="sp-img"><a href="javascript:void(0);"><img src="${item.miniImg2}">黑色<i></i></a></li>` : ''}
                                    ${ item.miniImg3 ? `<li class="sp-img"><a href="javascript:void(0);"><img src="${item.miniImg3}">黄色<i></i></a></li>` : ''}
                                    ${ item.miniImg4 ? `<li class="sp-img"><a href="javascript:void(0);"><img src="${item.miniImg4}">蓝色<i></i></a></li>` : ''}
                                    ${ item.miniImg5 ? `<li class="sp-img"><a href="javascript:void(0);"><img src="${item.miniImg5}">紫色<i></i></a></li>` : ''}
                                </ul>
                            </dd>
                        </dl>
                        <dl class="size-box">
                            <dt>尺码：</dt>
                            <dd>
                                <ul>
                                    <li class="sp-txt"><a href="javascript:void(0)">M<i></i></a>
                                    </li>
                                    <li class="sp-txt"><a href="javascript:void(0)">L<i></i></a>
                                    </li>
                                    <li class="sp-txt"><a href="javascript:void(0)">XL<i></i></a>
                                    </li>
                                    <li class="sp-txt"><a href="javascript:void(0)">S<i></i></a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                    <div class="buy">
                        <div class="input-num">
                            <input type="text" name="" id="" value="1" maxlength='4' class="input-text">
                            <a href="javascript:void(0)" class="increase">&nbsp;</a>
                            <a href="javascript:void(0)" class="decrease">&nbsp;</a>
                        </div>
                        <div class="btns">
                            <a href="###" class="addcart">
                                <i class="iconfont icon-gouwuche"></i>
                                添加购物车
                            </a>
                            <a href="###" class="buynow">立即购买</a>
                            <div class="cart-popup">
                            <dl>
                                <dt>成功添加到购物车</dt>
                                <dd>购物车共有 <strong id="bold_num"></strong> 种商品 总金额为：<em id="bold_mly" class="saleP"></em></dd>
                                <dd class="see-cart"><a href="cart.html" class="btn-mini btn-green">查看购物车</a> <a href="javascript:void(0);" class="btn-mini continue" value="">继续购物</a></dd>
                            </dl>
                        </div>
                        </div>
                    </div>
                </div>
                <!-- 补充栏 -->
                <div class="more-info">
                    <a href="###" class="share">
                        分享
                        <span>
                            (<em>0</em>)
                        </span>
                    </a>
                    <a href="###" class="favorite">
                        收藏商品
                        <span>
                            (<em>${item.collection}</em>)
                        </span>
                    </a>
                    <a href="###" class="compare">
                        <i></i>
                        加入对比
                    </a>
                    <a href="###" class="report">
                        举&nbsp;报
                    </a>
                </div>
                <!-- !对应商铺 -->
                <div class="mall-info">
                <div class="shop-info">
                    <dl class="shop-title">
                        <h4>${item.merchant}</h4>
                    </dl>
                    <div class="shop-content">
                        <dl class="all-rate">
                            <dt>综合评分：</dt>
                            <dd>
                                <div class="rating"><span style="width: 88%"></span></div>
                                <em>4.6</em>分
                            </dd>
                        </dl>
                        <div class="detail-rate">
                            <h5>
                                <strong>店铺动态评分</strong>
                                与行业相比
                            </h5>
                            <ul>
                                <li> 描述相符
                                    <span class="credit">4.8 分</span>
                                    <span class="high"><i></i>高于<em>6%</em></span>
                                </li>
                                <li> 服务态度
                                    <span class="credit">4.8 分</span>
                                    <span class="high"><i></i>高于<em>2%</em></span>
                                </li>
                                <li> 发货速度
                                    <span class="credit">4.8 分</span>
                                    <span class="high"><i></i>高于<em>4%</em></span>
                                </li>
                            </ul>
                        </div>
                        <dl class="messenger">
                            <dt>联系方式：</dt>
                            <dd>
                                <span></span>
                            </dd>
                        </dl>
                        <dl class="no-border">
                            <dt>公司名称：</dt>
                            <dd>${item.merchant}</dd>
                        </dl>
                        <dl>
                            <dt>所&nbsp;&nbsp;在&nbsp;&nbsp;地：</dt>
                            <dd>广东 广州市 越秀区</dd>
                        </dl>
                        <dl>
                            <dt>电　　话：</dt>
                            <dd>下载男士购app联系客服</dd>
                        </dl>
                        <div class="goto">
                            <a href="###">进入商家店铺</a>
                            <a href="###">收藏店铺<em></em></a>
                        </div>
                        <div class="shop-other">
                            <ul>
                                <li class="btn-map">
                                    <a href="javascript:void(0);" class="pngFix">
                                        <span>店铺地图</span>
                                        <div class="map-img"></div>
                                    </a>
                                </li>
                                <li class="btn-qrcode">
                                    <a href="javascript:void(0);" class="pngFix">
                                        <span>店铺二维码</span>
                                        <p class="code-img">
                                            <img src="../css/img/store.png" alt="">
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                `
            }).join('');

            $('.details').html($goods);
            effects();
        }
    })




    //?特效渲染
    function effects() {
        //放大镜
        $(".my-foto").imagezoomsl({

            zoomrange: [2.12, 12],
            magnifiersize: [360, 360],
            scrollspeedanimate: 10,
            loopspeedanimate: 5,
            cursorshadeborder: "10px solid black",
            magnifiereffectanimate: "slideIn"
        });

        // *滑过小图的样式及大图地址更改
        $('.controller').on('mouseover', 'li', function () {
            $(this).addClass('current');
            var newPath = $(this).children().attr('src');
            $(this).parents('.goods-picture').find('.my-foto').attr('src', newPath);

        });

        $('.controller').on('mouseout', 'li', function () {
            $(this).removeClass('current');
        })

        // !点击颜色 的样式
        $('.color-box').on('click', 'a', function () {
            $(this).parents('.color-box').find('a').css('color', '#999').removeClass('hovered');
            $(this).css('color', '#2f97f0').addClass('hovered').children('i').show();
        })

        //* 点击颜色  的样式

        $('.size-box').on('click', 'a', function () {
            $(this).parents('.size-box').find('a').removeClass('hovered');
            $(this).addClass('hovered').children('i').show();
        })

        //?购物车旁的加减按钮
        //+
        $('.increase').on('click', function () {
            var add = $(this).prev().val();
            add++;
            $(this).prev().val(add);
            $(this).next().css({
                'cursor': 'default ',
            })
        });
        //-
        $('.decrease').on('click', function () {
            var cut = $(this).prev().prev().val();
            cut--;
            $(this).prev().prev().val(cut);
            if ($(this).prev().prev().val() <= 1) {
                $(this).prev().prev().val(1);
                $(this).css('cursor', 'not-allowed');
            }
        });

        //*在输入框输入数量
        $('.input-text').on('keyup', function () {
            if ($(this).val() == '' || /[^\d]/.test($(this).val())) {
                $(this).val(1);
            }
        });



        //?点击加入购物车
        $('.addcart').on('click', function () {

            if (getCookie('username')) {
                var qty = $(this).parents('.buy').find('.input-text').val();
                // console.log(qty);
                $.ajax({
                    type: 'get',
                    url: '../api/cart.php',
                    async: true,
                    data: {
                        'consumer': getCookie('username'),
                        'id': getGid,
                        'qty': qty,
                        'on_off': true
                    },
                    dataType: 'json',
                    success: function (str) {
                        var countable = str.res1[0]["SUM(counts)"];
                        var tariffs = str.res2[0]["SUM(counts*price)"];
                        $('.cart-popup').show();
                        $('#bold_num').html(countable);
                        $('#bold_mly').html('¥' + tariffs);
                    }
                })
            } else { 
                alert('请先登录'); 
            }

        })

        $('.continue').on('click', function () {
            $(this).parents('.cart-popup').hide('');
        })

        //!点击 立即购买
        $('.buynow').on('click', function () {
            if (getCookie('username')) {
                $(window).attr('location', 'cart.html');
            } else {
                alert('请先登录');
                $(window).attr('location', 'login.html');
            }
        })



    }


    //*评价按钮
    $('.assess').on('click', function () {
        $('.message-pop').show();
        $('.message-head p').html(getCookie('username'));
    });

    $('.cancelBtn').click(function () {
        $(this).parents('.message-pop').hide();
        $(this).parents('.message-pop').find('.message-comment-box').val('');
    });

    $('.submitBtn').on('click', function () {

        if (getCookie('username')) {
            $.ajax({
                type: 'post',
                url: '../api/message.php',
                data: {
                    'uid': getCookie('username'),
                    'comment': $('.message-comment-box').val().trim(),
                    'new': true
                },
                dataType: 'json',
                success: function (str) {

                    createMessage(str.totalM, true);
                    $('.message-pop').hide();
                }
            })
        } else { alert('请登录再留言') };

    });

    //渲染留言
    function createMessage(data, type) {
        $res = '';
        $res = data.map(function (item) {
            return `
            <div class="commend-box" data-id="${item.mid}">
                        <div class="user-avatar">
                            <a href="javascript:void(0);">
                                <img src="../css/img/default_user_portrait.gif">
                            </a>
                        </div>
                        <dl>
                            <dt>
                                <span class="user-name">
                                    <a href="javascript:void(0);">${item.userName}</a>：
                                </span>
                                <time>时间&nbsp;[${item.dateline}]</time>
                            </dt>
                            <dd class="content">评价详情：<span>${item.comments}</span></dd>
                        </dl>
                    </div>`;
        }).join('');

        $('#comment-floor').html($res);

    };

    //初始化留言板
    function showM() {

        $.ajax({
            type: 'post',
            url: '../api/message.php',
            dataType: 'json',
            success: function (str) {
                console.log(str.totalM);
                createMessage(str.totalM);
            }
        });
    };

    showM();


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

});