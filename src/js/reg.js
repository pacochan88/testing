$(function () {

    $('#phone').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '请输入手机号码') {
            $(this).val('').css('color', '#000');
        }
    })

    $('#phone').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });

        if ($(this).val().trim() != '') {
            var result1 = validator.phones($(this).val());
            // result1返回true或 false
            if (result1 == false) {
                $(this).next().show();
            } else {
                $(this).next().css('display', 'none');
            }
        } else {
            $(this).val('请输入手机号码').css('color', 'rgb(187, 187, 187)');
        }
    });

    $('#images').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '2'
        });
        if ($(this).val() == '输入验证码') {
            $(this).val('').css('color', '#000');
        }
    });

    // 初始化图形验证码：
    var verifyCode = new GVerify("code-image");
    $('.makecode').on('click', function () {
        verifyCode.refresh();
    });
    var result2 = null;
    // console.log(result2);
    $('#images').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });

        if ($('#images').val().trim() != '') {
            // verifyCode.validate(code);验证图形验证码，参数code为用户输入的验证码，返回值：正确：true,错误：false
            result2 = verifyCode.validate($('#images').val());
            if (result2 == false) {
                $('.code label').css('display', 'block');
            } else {
                $('.code label').hide();
            }
        } else {
            $(this).val('输入验证码').css('color', 'rgb(187, 187, 187)');
        }
    });


    $('#sms').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '2'
        });
        if ($(this).val() == '输入6位短信验证码') {
            $(this).val('').css('color', '#000');
        }
    });

    $('#sms').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() == '') {
            $(this).val('输入6位短信验证码').css('color', 'rgb(187, 187, 187)');
        } else if ($(this).val().trim() != '') {
            var result3 = validator.num($(this).val());
            if (!result3) {
                $(this).next().show();
            } else {
                $(this).next().css('display', 'none');
            }
        }
    });

    //储存生成的短信随机数
    var random_code = numRandom();
    console.log(random_code);
    //开启定时器
    var timer1 = null;
    var timer2 = null;
    var isTrue = true;

    // 发送短信,验证手机号是否注册了,没注册就发送短信,有注册就弹窗
    $('.send_code').on('click', function () {
        var verify = new Promise(function (res) {
            //再一遍正则
            if (validator.phones($('#phone').val().trim())) {
                $.ajax({
                    type: 'get',
                    url: '../api/reg.php',
                    async: true,
                    data: {
                        'phone': $('#phone').val(),
                    },
                    dataType: 'json',
                    success: function (str) {
                        res(str);
                    }
                })
            }
        });
        verify.then(function (str) {
            console.log(str);
            console.log(result2);
            if (str == '0' && result2) {
                //说明手机没注册,可以发短信
                $.ajax({
                    type: 'get',
                    url: '../api/sms.php',
                    data: {
                        tel: $('#phone').val(),
                        num: random_code
                    },
                    success: function (res) {
                        console.log(res);
                    }
                })
                $('.send_code').parents('.tip').hide();
                $('.send_code').parents('.tip').next().show();
            } else if (str == '1') {
                if (isTrue) {
                    isTrue = false;
                    var sec = 5;
                    //跳出弹窗
                    $('.pop1').show();
                    timer1 = setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            clearInterval(timer1);
                            isTrue = true;
                            $('.pop1').hide();
                        } else {
                            $('.countdown1').html(sec + '秒后窗口关闭');
                        }
                    }, 1000);
                }
            }
        })
    });

    //点击关闭弹窗
    $('.info em').on('click', function () {
        $('.pop-up').hide();
        clearInterval(timer1);
    });

    //点击'下一步',验证成功就跳到下一个表格
    $('#nextBtn').on('click', function () {
        //判断
        if ($('#sms').val().trim() == random_code) {
            $(this).parents('#form').css('display', 'none');
            $(this).parents('#form').next().css('display', 'block');
            //生成随机用户名和密码
            $('#username').val(getCode());
            $('#password').val(numRandom());
        }
    });

    //注册页第二版
    $('#username').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
    });

    var on_off1 = false;
    $('#username').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() != '') {
            var result4 = validator.accounts($(this).val());
            // result1返回true或 false
            if (result4 == false) {
                on_off1 = false;
                $(this).next().show().html('<i class="iconfont icon-gantanhao"></i>用户名必须在3-15个字符之间(英文字母开头)');
            } else {
                $(this).next().css('display', 'none');
                $.ajax({
                    type: 'post',
                    url: '../api/verify.php',
                    async: true,
                    data: {
                        'username': $('#username').val(),
                    },
                    dataType: 'json',
                    success: function (str) {
                        console.log(str['name']);
                        if (str['name'] != 0) {
                            on_off1 = false;
                            $('#username').next().show().html('<i class="iconfont icon-gantanhao"></i>该用户名已经存在');
                        } else {
                            on_off1 = true;
                        }

                    }
                });
            }
        }
    });

    $('#password').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
    });
    $('#password').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() != '') {
            var result5 = validator.passWeak($(this).val());
            // result1返回true或 false
            if (result5 == false) {
                $(this).next().show().html('<i class="iconfont icon-gantanhao"></i>密码长度应在6-20个字符之间');
            } else {
                $(this).next().css('display', 'none');
            }
        }
    });

    $('#mail').focus(function () {
        $(this).parents('dl').css({
            'border-color': '#7abd54',
            'z-index': '3'
        });
        if ($(this).val() == '输入常用邮箱作为验证及找回密码使用') {
            $(this).val('').css('color', '#000');
        }
    });

    var on_off2 = false;
    $('#mail').blur(function () {
        $(this).parents('dl').css({
            'border-color': '#E6E6E6',
            'z-index': '2'
        });
        if ($(this).val().trim() != '') {
            var result6 = validator.emails($(this).val());
            // result1返回true或 false
            if (result6 == false) {
                on_off2 = false;
                $(this).next().show().html('<i class="iconfont icon-gantanhao"></i>这不是一个有效的电子邮箱');
            } else {
                $(this).next().css('display', 'none');
                $.ajax({
                    type: 'post',
                    url: '../api/verify.php',
                    async: true,
                    data: {
                        'mail': $('#mail').val(),
                    },
                    dataType: 'json',
                    success: function (str) {
                        console.log(str['e-mail']);
                        if (str['e-mail'] != 0) {
                            on_off2 = false;
                            $('#mail').next().show().html('<i class="iconfont icon-gantanhao"></i>该电子邮箱已经存在');
                        } else {
                            on_off2 = true;
                        }

                    }
                });
            }
        } else {
            $(this).val('输入常用邮箱作为验证及找回密码使用').css('color', 'rgb(187, 187, 187)');
        }
    });

    var on_off3 = true;
    //勾选框
    $('.checkbox').on('click', function () {
        if (!$('.checkbox').prop("checked")) {
            on_off3 = false;
            $(this).next().next().show();
        } else {
            on_off3 = true;
            $(this).next().next().hide();
        }
    });

    //!点击提交,将资料传入数据库,然后出现恭喜的弹窗,跳转到首页
    $('#submitBtn').on('click', function () {
        if ($('#username').val().trim() == '') {
            $('#username').next().html(' <i class="iconfont icon-gantanhao"></i>用户名不能为空').show();
        };
        if ($('#password').val().trim() == '') {
            $('#password').next().html(' <i class="iconfont icon-gantanhao"></i>密码不能为空').show();
        };
        if ($('#mail').val().trim() == '' || $('#mail').val() == '输入常用邮箱作为验证及找回密码使用') {
            $('#mail').next().html(' <i class="iconfont icon-gantanhao"></i>邮箱不能为空').show();
        };

        if (validator.phones($('#phone').val()) && validator.passWeak($('#password').val()) && on_off1 && on_off2 && on_off3) {
            console.log(on_off1, on_off2, on_off3)
            // 把资料传入数据库

            $.ajax({
                type: 'post',
                url: '../api/submit.php',
                async: true,
                data: {
                    'phone': $('#phone').val(),
                    'username': $('#username').val(),
                    'password': $('#password').val(),
                    'mail': $('#mail').val()
                },
                dataType: 'json',
                success: function (str) {
                    if (str == 1) {
                        setCookie('username', $('#username').val(), 1);
                        var sec = 3
                        $('.pop2').show();
                        timer2 = setInterval(function () {
                            sec--;
                            if (sec < 0) {
                                clearInterval(timer2);
                                $(location).attr('href', '../index.html');
                                $('.pop2').hide();
                            } else {
                                $('.countdown2').html(sec + '秒后窗口关闭,自动跳转到首页');
                            }
                        }, 1000);
                    }

                }
            });
        }
    });
})