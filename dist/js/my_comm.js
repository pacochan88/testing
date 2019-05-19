//产生四位的验证码
//这是一个封装
function getCode() {
    var str = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'; //创造一个验证码的存放空间
    var code = ''; //存放产生的东西
    for (i = 0; i < 4; i++) {
        var spc = parseInt(Math.random() * str.length);
        code += str[spc]; //收集验证码

        // str += Math.floor(Math.random() * 10); //获得并收集验证码
    }
    return code;
}
getCode();


//产生随机数(1-100)
//这是一个封装
function getRandom() {
    var num = Math.floor(Math.random() * 100 + 1);
    return num;
}

//6位数的随机数
function numRandom() {
    var num = "";
    for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10)
    }
    return num;
}


//这是一个封装
function factorial(num) {

    for (i = num - 1; i >= 1; i--) {
        num *= i; //阶乘的过程
    }
    return num;
}


//生成表格
function fn(m, n) {
    var sheet = '';
    sheet += '<table>'
    for (i = 0; i < m; i++) {
        sheet += '<tr>'
        for (j = 0; j < n; j++) {
            sheet += '<td>单元</td>'
        }
        sheet += '</tr>'
    }
    sheet += '</table>'

    return sheet;
}





//任意两个数的加减乘除
//封装
//a和b是数字;c是运算符
function operation(a, b, c) {

    switch (c) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '*':
            answer = a * b;
            break;
        case '/':
            answer = a / b;
    }
    return answer;
}


//函数封装
//奇偶数作为分母的各自相加
function odd_even(n) {
    var sum = 0;
    if (n % 2 == 0) {
        i = 2; //偶数最小的数
    } else {
        i = 1 //奇数最小的数
    }
    while (i <= n) {
        sum += 1 / i;
        i = i + 2;
    }
    return sum;
}


//统计每个字符串出现的个数
function count(string) {
    strObj = {};
    for (i = 0; i < string.length; i++) {
        var key = string[i];
        if (strObj[key]) {
            //对象存在该索引
            strObj[key] = strObj[key] + 1;
        } else {
            strObj[key] = 1;
        }
    }
    return strObj;
}




//数组去重
function noRepeat(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


function toTwo(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

/*
       毫秒转：年月日时分秒
 */
function setTimes(timer) {
    var time = new Date(timer);
    var year = time.getFullYear(); //年
    var mon = toTwo(time.getMonth() + 1); //0 
    var day = toTwo(time.getDate()); //24
    var hour = toTwo(time.getHours()); //时
    var min = toTwo(time.getMinutes()); //分
    var sec = toTwo(time.getSeconds()); //秒

    return {
        secs: sec,
        mins: min,
        hours: hour,
        days: day,
        mons: mon,
        years: year
    }

}


//网址url转成对象

function urlToObj(url) {
    //创建对象空间
    var urlObj = {};
    //第一次分割,获取url中"?"符后的字串
    var str = url.split('?');
    //第二次分割
    var str1 = str[1].split('#');
    var str2 = str1[0].split('&');
    str2.forEach(function (item) {
        var newArr = item.split('=');
        urlObj[newArr[0]] = newArr[1];
    })
    return urlObj;
}


//将对象转成参数

function objToUrl(obj) {
    var url = ''; //创建拼接空间

    for (var key in obj) {
        url += key + '=' + obj[key] + '&';
    }

    return url.slice(0, -1);
}

//正则
var validator = {
    accounts: function (parameter) {
        //账号验证
        var str = /^[a-zA-Z][\w\-]{2,14}$/;
        return str.test(parameter);

    },
    names: function (parameter) {
        //昵称验证
        var str = /^[\u2E80-\u9FFF]{2,69}$/;
        return str.test(parameter);

    },
    emails: function (parameter) {
        var str = /^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/;
        return str.test(parameter);
        //邮箱验证

    },
    identitys: function (parameter) {
        var str = /^(\d{17}|\d{14})[\dxX]$/;
        return str.test(parameter);
        //身份证验证

    },
    phones: function (parameter) {
        var str = /^1[3-9]\d{9}$/;
        return str.test(parameter)
        //手机号验证
    },
    birthdays: function (parameter) {
        var str = /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/;
        return str.test(parameter);
        /* \1 的意思 后向引用，表示表达式中，从左往右数，第一个左括号对应的括号内的内容
            以此类推，\2表示第二个，\0表示整个表达式
        */
        //生日验证
    },
    num: function (parameter) {
        var str = /^[a-zA-Z0-9]{6}$/;
        return str.test(parameter);
    },
    /*
        密码
            长度6-20
            不能包含空格
     */
    // passwords: function (parameter) {
    //     var str = /^\S{6,20}$/;
    //     return str.test(parameter)
    // },


    //密码强度
    //弱
    passWeak: function (parameter) {
        var str = /^\S{6,20}$/;
        return str.test(parameter);
    },
    //中等
    passMedium: function (parameter) {
        var str = /^.*(?=.{7,20})(?=.*\d{1,})(?=.*[A-Za-z]{1,}).*$/;
        return str.test(parameter);
    },

    passStrong: function (parameter) {
        var str = /^.*(?=.{8,20})(?=.*\d{1,})(?=.*[A-Za-z]{1,})(?=.*[!@#$%^&*?\(\)]{1,}).*$/;
        return str.test(parameter);
    }
}


//Ajax
function ajax(opt) {
    function extend(obj1, obj2) {
        for (var key in obj1) {
            obj2[key] = obj1[key];
        }
    }

    var defaults = {
        data: '',
        async: true
    }

    extend(opt, defaults);

    //创建
    var xhr = new XMLHttpRequest();

    //发送请求
    if (defaults.type.toLowerCase() == 'get') {
        defaults.url += '?' + defaults.data;
        xhr.open('get', defaults.url, defaults.async);
        xhr.send(null);
    } else if (defaults.type.toLowerCase() == 'post') {
        xhr.open('post', defaults.url, defaults.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaults.data);
    }

    //接受数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                defaults.success(xhr.responseText);
            } else {
                alert('错误码是' + xhr.status);
            }
        }
    }
}


function setCookie(key, value, iDay) {
    //key:键名   value：键值    iDay：失效时间
    //document.cookie = 'name=malin;expires=20190527;path=/';
    var now = new Date();
    now.setDate(now.getDate() + iDay); //iDay:5天后失效， -1：立即失效
    document.cookie = key + '=' + value + ';expires=' + now + ';path=/';
}

function getCookie(key) {
    //获取cookie值
    var str = document.cookie; //name=malin; psw=123456
    var arr = str.split('; '); //[name=malin,psw=123456]
    for (var ele of arr) {
        var arr2 = ele.split('='); //[name,malin]
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

function removeCookie(key) {
    //删除cookie。把这个值变成失效
    setCookie(key, '', -1); //设置成过去的时间
}

//弹窗在屏幕居中


function popup(popupName) {
    _windowHeight = $(".wrap").height(), //获取当前窗口高度
        _windowWidth = $(".wrap").width(), //获取当前窗口宽度
        _popupHeight = popupName.height(), //获取弹出层高度
        _popupWeight = popupName.width(); //获取弹出层宽度
    _posiTop = (_windowHeight - _popupHeight) / 2;
    _posiLeft = (_windowWidth - _popupWeight) / 2;
    popupName.css({
        "left": _posiLeft + "px",
        "top": _posiTop + "px",
        //  "display": "block"
    }); //设置position
}