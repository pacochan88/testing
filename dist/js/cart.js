$(function () {

    $('.login-name').html(getCookie('username'));


    //点击退出
    $('.quit').on('click', function () {
        removeCookie('username');
        $(window).attr('location', '../index.html');
    })

    //todo 获取cookies,若果有登记再渲染数据
    if (getCookie('username')) {
        //数据渲染
        $.ajax({
            type: "get",
            dataType: 'json',
            url: '../api/cart.php',
            data: { "consumer": getCookie('username') },
            success: function (data) {
                // console.log(data);
                if (data.data1.length) {
                    //有长度表达有数据
                    $('.have-goods').show();
                    $('.null-shopping').hide();

                    var res = '';
                    $.each(data.data1, function (index1, item1) {
                        // console.log(data.data1);
                        // console.log(index1,item1);//!店铺名的下标,店铺名
                        //todo 渲染不同的店铺名的盒子
                        res += `        <div class="cartBox">
                        <div class="shop_info">
                            <div class="all_check">       
                                <input type="checkbox" id="checkbox${index1 + 1}" class="shopChoice" name="shopChoice">
                                <label for="" class="shop"></label>
                            </div>
                            <div class="shop_name">
                                店铺：<a href="javascript:;">${item1.shops}</a>
                            </div>
                        </div><div class ="small_box">`;
                        $.each(data.data2, function (index2, item2) {
                            if (item1.shops == item2.shops) {
                                //?如果有相同的店铺,这家店铺的不同的商品在这里渲染
                                res += `
                            <div class="order_content" data-gid="${item2.goodId}">
                            <ul class="order_lists">
                                <li class="list_chk">
                                    <input type="checkbox" class="son_check" name="son_check">
                                    <label for=""></label>
                                </li>
                                <li class="list_con">
                                    <div class="list_img"><a href="javascript:;"><img
                                                src="${item2.pic}"
                                                alt=""></a>
                                    </div>
                                    <div class="list_text"><a href="javascript:;">${item2.goodName}</a>
                                    </div>
                                </li>
                                <li class="list_price">
                                    <p class="price">${item2.price}</p>
                                </li>
                                <li class="list_amount">
                                    <div class="amount_box">
                                        <a href="javascript:;" class="reduce">-</a>
                                        <input type="text" value="${item2.counts}" class="sum" value maxlength="4">
                                        <a href="javascript:;" class="plus">+</a>
                                    </div>
                                </li>
                                <li class="list_sum">
                                    <p class="sum_price">${item2.price * item2.counts}</p>
                                </li>
                                <li class="list_op">
                                    <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                                </li>
                            </ul>
                        </div>
                            `;
                            }
                        })
                        res += `</div> <div class="shop_subtotal">
                        <div class="store-account">
                            <dl>
                                <dt>店铺合计：</dt>
                                <dd><em class="subAmount">0</em>元</dd>
                            </dl>
                        </div>
                    </div>
                </div>`;

                    })

                    $('#goods-box').html(res);
                    smallFn();

                } else {
                    $('.have-goods').hide();
                    $('.null-shopping').show();
                }

            }
        })
    } else {
        alert('请先登录');
        $(window).attr('location', 'login.html');
    }


    //?渲染后的功能的设置
    function smallFn() {

        // ?减
        $('.reduce').on('click', function () {
            var cut = $(this).next().val();
            cut--;
            $(this).next().val(cut);
            if ($(this).next().val() <= 1) {
                $(this).next().val(1);
                $(this).css('cursor', 'not-allowed');
            }
            var little1 = $(this).next().val() * $(this).parents('.order_lists').find('.price').html();
            $(this).parents('.order_lists').find('.sum_price').html(little1);
            var update = $(this).next().val();
            var gid = $(this).parents('.order_content').attr('data-gid');

            edit(update, gid);
            subMoney();
            totalMoney();
        })

        // !加
        $('.plus').on('click', function () {
            var add = $(this).prev().val();
            add++;
            $(this).prev().val(add);
            $(this).prev().prev().css({
                'cursor': 'default ',
            })
            var little2 = $(this).parents('.order_lists').find('.price').html() * $(this).prev().val();
            $(this).parents('.order_lists').find('.sum_price').html(little2);
            //改动数量的值
            var update = $(this).prev().val();
            //获取对应的商品id
            var gid = $(this).parents('.order_content').attr('data-gid');
            edit(update, gid);
            subMoney();
            totalMoney();
        })


        // *输入的值改变,订单库可以接收
        $('.sum').on('input', function () {
            if ($(this).val() == '' || /[^\d]/.test($(this).val())) {
                $(this).val(1);
            } else {
                var res = $(this).parents('.order_lists').find('.price').html() * $(this).val();
                $(this).parents('.order_lists').find('.sum_price').html(res);
            }
            var update = $(this).val();
            var gid = $(this).parents('.order_content').attr('data-gid');
            edit(update, gid);

        })

        //!删除商品
        var delGood = null;
        $('.delBtn').on('click', function () {
            $('.delWindow').show();
            delGood = $(this).parents('.order_content');

        });

        //todo点击删除后出现的弹窗
        $('.close_btn').click(function () { $('.delWindow').hide(); });
        $('#cancel').click(function () { $('.delWindow').hide(); });
        //弹窗的确认,才是最终删除
        $('#sure').click(function () {

            if (delGood.parents('.cartBox').find('.delBtn').size() == 1) {
                delGood.parents('.cartBox').remove();
            } else { delGood.remove(); };
            subMoney();
            totalMoney();
            var gid = delGood.attr('data-gid');
            del(gid);
            $('.delWindow').hide();
        });

        //!大全选
        $('#all').on('click', function () {
            $("[type='checkbox']").attr("checked", $(this).prop("checked"));
            subMoney();
            totalMoney();
        });
        //todo 店铺的选择框控制里面的所有商品
        $('.shopChoice').on('click', function () {
            $(this).parents('.cartBox').find("input[type='checkbox']").attr("checked", $(this).prop("checked"));
            subMoney();
            totalMoney();
        });

        //*店铺的选项框控制页面的选项框是否全选
        $('.shopChoice').on('click', function () {
            var tNum = $(this).parents('#goods-box').find('.shopChoice').size();
            var cNum = $(this).parents('#goods-box').find("'.shopChoice':checked").size();
            if (tNum == cNum) {
                $(this).parents('.have-goods').find('.whole_check').attr("checked", true);
            } else { $(this).parents('.have-goods').find('.whole_check').attr("checked", false); };
            subMoney();
            totalMoney();
        });

        //? 商品的选项框控制店铺的选项框是否全选
        $('.son_check').on('click', function () {
            var tNum = $(this).parents('.small_box').find("input[type='checkbox']").size();//店铺下一共有多少个复选框
            var cNum = $(this).parents('.small_box').find("input[type='checkbox']:checked").size();//已经勾选的个数
            if (tNum == cNum) {
                $(this).parents('.cartBox').find('.shopChoice').attr("checked", true);
            } else { $(this).parents('.cartBox').find('.shopChoice').attr("checked", false); };
            totalMoney();
            subMoney();
        });

        //todo 只有一个商品的勾没选中,全局的大全选则取消
        $('.son_check').on('click', function () {
            var tNum = $(this).parents('#goods-box').find('.son_check').size();
            var cNum = $(this).parents('#goods-box').find("'.son_check':checked").size();
            if (tNum == cNum) {
                $(this).parents('.have-goods').find('.whole_check').attr("checked", true);
            } else { $(this).parents('.have-goods').find('.whole_check').attr("checked", false); };
            subMoney();
            totalMoney();
        });


        // !计算整个页面被勾选的商品,把价格赋值到大总额
        function totalMoney() {
            var totalPrice = 0;
            $('.son_check').each(function () {
                if ($(this).is(':checked')) {
                    var tPrice = $(this).parents('.order_lists').find('.sum_price').html() * 1;
                    totalPrice += tPrice;
                }
            });
            $('#cartTotal').html(totalPrice);
        }
        totalMoney();

        //?每家店铺的合计
        function subMoney() {

            $('.cartBox').each(function () {
                var subPrice = 0;//!每个店铺的累计器,所以放在这里
                $(this).find('.son_check:checked').each(function () {
                    subPrice += $(this).parents('.order_lists').find('.sum_price').html() * 1;
                });
                $(this).find('.subAmount').html(subPrice);
            });

        };
        subMoney();

        //点击商品图片,跳回到对应的详情页
        $('.list_text a').on('click', function () {
            var gid = $(this).parents('.order_content').attr('data-gid');
            $(this).attr('href', 'goods.html?' + gid);
        })

    }

    //*把商品数量传入订单库
    function edit(quantum, gid) {
        // console.log(quantum, gid);
        $.ajax({
            type: "get",
            dataType: 'json',
            url: '../api/cart.php',
            data: {
                'consumer': getCookie('username'),
                'id': gid,
                'newCount': quantum
            }, success: function (update) {
                // console.log(update);
            }
        })
    }

    function del(gid) {

        $.ajax({
            type: "get",
            dataType: 'json',
            url: '../api/cart.php',
            data: {
                'consumer': getCookie('username'),
                'id': gid,
                'type': 'DELETE'
            }, success: function (update) {
                console.log(update);
            }
        })
    }

})