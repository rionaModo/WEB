


var data = [
    {
        status:3,
        code:1234567,
        money:50,
        name:'中秋大促销',
        peihuoshang:'红旗连锁',
        tiaojian:'100减50',
        active:[
            {
                name:'限购商品111',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年'
            },
            {
                name:'限购商品222',
                content:'限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500MLdajshbdfjkasnkdlnaklsd2er'
            },
            {
                name:'限购商品333',
                content:'235671238719084fnhjsdnvjkmnkvdsgn'
            },
        ],

    },
    {
        status:3,
        code:1234567,
        money:52,
        name:'zhognqiu',
        peihuoshang:'sjhakhdk',
        tiaojian:'100jian50',
        active:[
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
        ],
    },
    {
        status:3,
        code:1234567,
        money:53,
        name:'zhognqiu',
        peihuoshang:'sjhakhdk',
        tiaojian:'100jian50',
        active:[
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
            {
                name:'限购商品',
                content:'五粮液 60年 500ML 限购商品 五粮液 60年 500ML 五粮液 60年 500ML 限购商品 五粮液 60年 500ML 限购商品 五粮液 60年 500ML'
            },
        ],
    },
];

var str ='';
for(var i=0;i<data.length;i++){
    console.log(data[i]);
    str += '<div class="url">'+
        '<div class="code-content"><span class="quan-code">券码:'+data[i].code+'</span><span class="dotted"></span></div>'+
        '<div class="quan">';
    if(data[i].status==1){
        str+='<div class="quan-left Cant">';
    }else{
        str+='<div class="quan-left NoCant">';
    }
    str+='<div class="quan-left1">'+
        '<p  id="quancenter"><span class="quan-code5">券码:'+data[i].code+' </span><br><span class="quan-code6">¥'+data[i].money+'</span></p>'+
        '</div>'+
        '<div class="quan-left2">'+
        '<p class="quanbittom"><span class="quan-code7">'+data[i].name+'</span><br>'+
        '<span class="quan-code8">适合配货商：'+data[i].peihuoshang+'<br>适用条件：'+data[i].tiaojian+'</span>'+
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="quan-right">';
    for(var x=0;x<data[i].active.length;x++){
        str += '<p id="righter"><span>'+data[i].active[x].name+':</span>'+data[i].active[x].content+'<br><br></p>';
    }
    str+='</div>'+
        '</div>'+
        '</div>';
}

document.getElementById('weishiyong').innerHTML = str


document.getElementById('weishiyong-btn').onclick=function(){
    document.getElementById('weishiyong').style.display='block';
    document.getElementById('yishiyong').style.display='none';
    document.getElementById('yiguo').style.display='none';

}
document.getElementById('yishiyong-btn').onclick=function(){
    document.getElementById('weishiyong').style.display='none';
    document.getElementById('yishiyong').style.display='block';
    document.getElementById('yiguo').style.display='none';
}
document.getElementById('yiguoqi-btn').onclick=function(){
    document.getElementById('weishiyong').style.display='none';
    document.getElementById('yishiyong').style.display='none';
    document.getElementById('yiguo').style.display='block';
}


var nav=[
    {
        title:'企业管理',
        url:'/asss',
        num:[1,2],
        children:[
            {
                title:'企业信息',
                url:'/data/susuusu'
            },
            {
                title:'终端店审批列表',
                url:'/data/susuusuww'
            }

        ]
    },
    {
        title:'账号管理',
        url:'/assseee',
        num:[1,29],
        children:[
            {
                title:'企业信息',
                url:'/data/susuusu'
            },
            {
                title:'企业列表',
                url:'/data/susuusuww'
            }

        ]
    }
]


var cv="";
for(var a=0;a<nav.length;a++){
    var  title=nav[a].title;
    if(title=='账号管理'){
        title=title+"|yyyyy";
    }
    cv=cv+'<li class="choiceleft1" id="choiceleft1"><a href="'+nav[a].url+'">'+title+'</a></li>';
    var dta=nav[a].children;
    var html=''
    for(var i=0;i<dta.length;i++){ //children
        var item=dta[i];
        html=html+'<li class="choiceleft2" id="choiceleft2"><a href="'+item.url+'">'+item.title+'</a></li>';
    }
    cv=cv+html;


}
document.getElementById('choiceleft').innerHTML = cv;



var link=[
    {
        title:'新手入门',
        url:'ddddd'
    },
    {
        title:'诚招英才',
        url:'ddddd'
    },
    {
        title:'增值服务',
        url:'ddddd'
    },
    {
        title:'在线支付',
        url:'ddddd'
    },
    {
        title:'物流服务',
        url:'ddddd'
    }
]
/*var last=[
 {
 title:'新手入门uuuu',
 url:'ssss'
 },
 {
 title:'诚招英才rr',
 url:'ssss'
 },
 {
 title:'增值服务',
 url:'ssss'
 },
 {
 title:'在线支付',
 url:'ssss'
 },
 {
 title:'物流服务',
 url:'ssss'
 }
 ]*/

ajax('/php/getdata.php',{},function(last) {
    var last = JSON.parse(last);

    var er = "";
    for (var d = link.length - 1; d >= 0; d--) {
        er = er + '<li class="sfhgh"><a href="' + link[d].url + '">' + link[d].title + '</a></li>';

    }
    document.getElementById('sfhgh0').innerHTML = er;
    var sd = '';


    var num = parseInt(Math.random() * 10);
    var len = last.length;
    if (num >= len) {
        num = parseInt((num - 1) / 2)
    }

    for (var x = last.length - 1; x >= 0; x--) {
        if (num == x) {
            sd = sd + '<li class="sfhgh1" data-type="xiaohao"><a href="' + last[x].url + '">' + last[x].title + '</a></li>';
            continue;
        }
        sd = sd + '<li class="sfhgh1"><a href="' + last[x].url + '">' + last[x].title + '</a></li>';

    }
    document.getElementById('sfhgh2').innerHTML = sd;
    var items = document.getElementById("sfhgh2");
    var itemss = items.getElementsByTagName("li");
    for (var i = 0; i < itemss.length; i++) {
        var li = itemss[i];
        var type = li.getAttribute('data-type')
        if (type == "xiaohao") {
            var as = li.getElementsByTagName('a');
            as[0].innerHTML = 'xiaohao';
        }
    }
})
document.getElementById('img1').onclick=mg;

    function mg(img)	{
        x=document.getElementById("ee");
        x.innerHTML="我的丹露1";
    }
//////////////////////

var str='DanLuisaneco-alcoholicplatform！';
var arr=[1,3,4,5,'wwwww','sss','ssss','2'];

function rep(str){
    var str=str.toUpperCase();
    var arr=[];
    for(var i= 0,len=str.length;i<len;i++){
        var char=str.charAt(i);
        var d=str.indexOf(char);
        if(d==i){
            arr.push(char)
        }
    }
    console.log(arr)
}


rep(str);
function removeRepeat(str){
    var str=str.toUpperCase();
    var obj={};
    var code=[];
    var num;
    for(var i= 0,len=str.length;i<len;i++){
        var char=str.charAt(i);
        if(obj[char]){
            obj[char]=obj[char]+1;
        }else {
            obj[char]=1;
        }
    }
    for(var key in obj){
        var value=obj[key];

        if(!code||!num){
            code=[key];
            num=value;
        }else{
            if(value>num){
                code=[key];
                num=value;
            }else if(value==num){
                code.push(key);
            }
        }


       /* if(!code||!num){
            code=key;
            num=value;
        }else{
            if(value>num){
                code=key;
                num=value;
            }
        }*/
    }
    var ss={
        code:code,
        num:num
    };
    return ss;
//console.log(code,num);
}
console.log(removeRepeat(str));




//var items=document.getElementById ("sfhgh2");
//var itemss=items.getElementsByTagName("li");
document.getElementById('select-tab').onchange=function(){
    var tab=document.getElementById('select-tab');
    var option=tab.options[tab.selectedIndex];
    var value=option.value;
    if(value=='weishiyong'){
        document.getElementById('weishiyong').style.display='block';
        document.getElementById('yishiyong').style.display='none';
        document.getElementById('yiguo').style.display='none';
    }else if(value=='yishiyong'){
        document.getElementById('weishiyong').style.display='none';
        document.getElementById('yishiyong').style.display='block';
        document.getElementById('yiguo').style.display='none';
    }else if(value=='fiat'){
        document.getElementById('weishiyong').style.display='none';
        document.getElementById('yishiyong').style.display='none';
        document.getElementById('yiguo').style.display='block';
    }
}


