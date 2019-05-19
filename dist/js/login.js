$(function () {
    //顶部切换登录方式的按钮
    //?用户按钮
    $('.login-nav .page1').on('click', function () {
        $(this).addClass('active');
        //其他的小三角形隐藏
        $(this).parents('.login-nav').find('i').hide();
        //小三角形高亮
        $(this).children().show();
        //另一个按钮取消高亮
        $(this).parents('.login-nav').find('.page2').removeClass('active');
        //用户名版块显示
        $(this).parents('.login-mode').find('#default').addClass('showflip').removeClass('hideflip');
        //手机版块隐藏
        $(this).parents('.login-mode').find('#mobile').addClass('hideflip').removeClass('showflip');
        //大盒子高度改变
        $(this).parents('.login-mode').find('.login-contents').addClass('height1').removeClass('height2');
    })
    //*手机按钮
    $('.login-nav .page2').on('click', function () {
        $(this).addClass('active');

        $(this).parents('.login-nav').find('i').hide();
        $(this).children().show();

        $(this).parents('.login-nav').find('.page1').removeClass('active');

        $(this).parents('.login-mode').find('#default').addClass('hideflip').removeClass('showflip');
        $(this).parents('.login-mode').find('#mobile').addClass('showflip').removeClass('hideflip');

        $(this).parents('.login-mode').find('.login-contents').addClass('height2').removeClass('height1');
    })


    // 用户名登录方式---------------------------------
    $('#user').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '用户名/邮箱/已验证手机') {
            $(this).val('').css('color', '#000');
        }
    })

    $('#user').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        //todo 非空验证
        if ($(this).val().trim() != '') {
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                async: true,
                data: {
                    'user': $('#user').val(),
                },
                dataType: 'json',
                success: function (str) {
                    if (str['user'] == 0) {
                        $('#user').next().show().html('<i class="iconfont icon-gantanhao"></i>该用户名不存在');
                    } else {
                        $('#user').next().hide();
                    }
                }
            })

        } else {
            $(this).val('用户名/邮箱/已验证手机').css('color', 'rgb(187, 187, 187)')
        }
    })
    //!密码输入
    $('#pwd').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '6-20个大小写英文字母、符号或数字') {
            $(this).val('').css('color', '#000');
        }
    })

    $('#pwd').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() != '') {

        } else {
            $(this).val('6-20个大小写英文字母、符号或数字').css('color', 'rgb(187, 187, 187)')
        }
    })
    //*图片验证码
    $('#code1').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '输入验证码') {
            $(this).val('').css('color', '#000');
        }
    })

    //todo 初始化图形验证码：

    //用户名登录的验证码
    var verifyCode1 = new GVerify("codeimage1");
    $('.make_code1').on('click', function () {
        verifyCode1.refresh();
    });
    //接收验证码匹配的结果
    var code_result1 = null;
    $('#code1').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($('#code1').val().trim() != '') {
            code_result1 = verifyCode1.validate($('#code1').val());
            if (code_result1 == false) {
                $(this).next().show();
            } else {
                $(this).next().hide();
            }
        } else {
            $(this).val('输入验证码').css('color', 'rgb(187, 187, 187)');
        }
        console.log(code_result1);
    })


    //7天免登录按钮
    var cook = false; //判断是否要7天登录
    $('.checkbox').on('click', function () {
        if ($('.checkbox').prop("checked")) {
            cook = true;
            $(this).next().show();
        } else {
            cook = false;
            $(this).next().hide();
        }
    });

    //开启定时器
    var time1 = null;
    var time2 = null;
    //开关 
    var isTrue1 = true;
    var isTrue2 = true;

    //?登录按钮(方式一)--用户名
    $('.btn1').on('click', function () {
        if (code_result1 && isTrue1 && isTrue2) {
            isTrue1 = false;
            isTrue2 = false;
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                async: true,
                data: {
                    'user': $('#user').val(),
                    'pwd': $('#pwd').val()
                },
                dataType: 'json',
                success: function (str) {
                    if (str['login1'] == 0) {
                        var sec1 = 5;
                        //失败弹窗
                        $('.pop1').show();
                        time1 = setInterval(function () {
                            sec1--;
                            if (sec1 < 0) {
                                clearInterval(time1);
                                isTrue1 = true;
                                $('.pop1').hide();
                            } else {
                                $('.countdown').html(sec1 + '秒后窗口关闭');
                            }
                        }, 1000)
                    } else if (str['login1'] == 1) {
                        //cook为真就7天免登录
                        if (cook) {
                            setCookie('username', $('#user').val(), 7);
                        } else {
                            setCookie('username', $('#user').val(), 1);
                        }
                        var sec2 = 3;
                        //成功弹窗
                        $('.pop2').show();
                        time2 = setInterval(function () {
                            sec2--;
                            if (sec2 < 0) {
                                clearInterval(time2);
                                isTrue2 = true;
                                $(location).attr('href', '../index.html');
                                $('.pop2').hide();
                            } else {
                                $('.countdown').html(sec2 + '秒后窗口关闭,自动跳转到首页');
                            }
                        }, 1000)
                    }
                }
            });
        }

    });


    //? 手机登录方式------------------------------------------------

    $('#tel').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '可填写已注册的手机号接收短信') {
            $(this).val('').css('color', '#000');
        }
    });

    $('#tel').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() != '') {
            //正则验证
            var result1 = validator.phones($(this).val());
            // result1返回true或 false
            if (result1 == false) {
                $(this).next().show();
            } else {
                $(this).next().css('display', 'none');
            }
        } else {
            $(this).val('可填写已注册的手机号接收短信').css('color', 'rgb(187, 187, 187)');
        }
    });


    $('#code2').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '输入验证码') {
            $(this).val('').css('color', '#000');
        }
    });

    //手机登录验证码
    var verifyCode2 = new GVerify("codeimage2");
    $('.make_code2').on('click', function () {
        verifyCode2.refresh();
    });
    //接收验证码匹配的结果
    var code_result2 = null;

    $('#code2').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });

        if ($('#code2').val().trim() != '') {
            code_result2 = verifyCode2.validate($('#code2').val());
            if (code_result2 == false) {
                $(this).next().show();
            } else {
                $(this).next().hide();
            }
        } else {
            $(this).val('输入验证码').css('color', 'rgb(187, 187, 187)')
        }
        console.log(code_result2);
    });

    $('#sms').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '2'
        });
        if ($(this).val() == '输入6位手机验证码') {
            $(this).val('').css('color', '#000');
        }
    });

    $('#sms').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() == '') {
            $(this).val('输入6位手机验证码').css('color', 'rgb(187, 187, 187)');
        } else if ($(this).val().trim() != '') {
            var result3 = validator.num($(this).val());
            if (!result3) {
                $(this).next().show();
            } else {
                $(this).next().css('display', 'none');
            }
        }
    });
    //获取登录手机的用户名
    var getName = null;
    //储存生成的短信随机数
    var random_code = numRandom();
    console.log(random_code);
    //定时器
    var time3 = null;
    //开始弹窗的开关
    var isTrue3 = true;
    //储存填写有效且数据库有的手机号
    var temp = null;
    // 发送短信
    $('.send_code').on('click', function () {
        var getdata = new Promise(function (res) {
            if (validator.phones($('#tel').val())) {
                $.ajax({
                    type: 'get',
                    url: '../api/login.php',
                    async: true,
                    data: {
                        'phone': $('#tel').val()
                    },
                    dataType: 'json',
                    success: function (str) {
                        res(str);
                    }

                })
            }
        });
        getdata.then(function (str) {
            getName = str['login2'];
            // console.log(getName);
            if (str['mobile'] == 0 && code_result2 && isTrue3) {
                //手机号没有注册
                isTrue3 = false;
                var sec3 = 5;
                //失败弹窗
                $('.pop1 div').html('<i class="iconfont icon-chahao"></i>当前手机号未注册，请检查号码是否正确');
                $('.pop1').show();
                time3 = setInterval(function () {
                    sec3--;
                    if (sec3 < 0) {
                        clearInterval(time3);
                        isTrue3 = true;
                        $('.pop1').hide();
                    } else {
                        $('.countdown1').html(sec3 + '秒后窗口关闭');
                    }
                }, 1000)

            } else if (str['mobile'] == 1 && code_result2) {
                //数据库找到手机号,验证码正确,才发送登录短信
                temp = $('#tel').val();
                $.ajax({
                    type: 'get',
                    url: '../api/sms.php',
                    data: {
                        tel: $('#tel').val(),
                        num: random_code
                    },
                    success: function (res) {
                        console.log(res);
                    }
                })
                $('.send_code').parents('.tip').hide();
                $('.send_code').parents('.tip').next().show();
            }
        })
    });

    //定时器
    var time4 = null;
    var time5 = null;
    //开关
    var isTrue4 = true;
    var isTrue5 = true;

    //*登录按钮(方式二)---手机号
    $('.btn2').on('click', function () {
        if ($('#sms').val() == random_code && temp == $('#tel').val() && isTrue4) {
            isTrue4 = false;
            var sec4 = 3;
            //成功弹窗
            $('.pop2').show();
            time4 = setInterval(function () {
                sec4--;
                if (sec4 < 0) {
                    clearInterval(time4);
                    isTrue4 = true;
                    setCookie('username', getName, 1);
                    $(location).attr('href', '../index.html');
                    $('.pop2').hide();
                } else {
                    $('.countdown2').html(sec4 + '秒后窗口关闭,自动跳转到首页');
                }
            }, 1000)
        } else if (isTrue5 && $('#sms').val() != random_code || temp != $('#tel').val()) {
            isTrue5 = false;
            var sec5 = 5;
            //失败弹窗
            $('.pop1').show();
            time5 = setInterval(function () {
                sec5--;
                if (sec5 <= 0) {
                    clearInterval(time5);
                    isTrue5 = true;
                    $('.pop1').hide();
                } else {
                    $('.countdown1').html(sec5 + '秒后窗口关闭');
                }
            }, 1000)

        }
    });
})