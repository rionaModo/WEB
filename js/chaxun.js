var inpue=document.getElementById("code-input").onblur=err
function err(){
    var tip = /^[\u4e00-\u9fa5]{2,4}$/i;
    if(!this.value) {
        document.getElementById('hide-id').innerHTML = '名字不能为空';
        document.getElementById('hide-id').style.display='block';
    }else if(!tip){
        document.getElementById('hide-id').innerHTML = '请您正确输入';
        document.getElementById('hide-id').style.display='block';
    }else {
        document.getElementById('hide-id').style.display='none';
    }
}
document.getElementById('code-input').onfocus=function (){
    document.getElementById('hide-id').style.display="none"
};

document.getElementById('code-button').onclick=mg;
function mg(img)	{

    var m=document.getElementById("ming").innerHTML;

    var tip=document.getElementById("code-input").value;
    x=document.getElementById("ming");
    x.innerHTML=tip+"，下午好";
}
document.getElementById("copy-button").onclick=sdd;
function sdd(){
    document.getElementById("copy").innerHTML=document.getElementById("ming").innerHTML;

}
var arr=[89,69,78,95];
ass=arr[0]+arr[1]+arr[2]+arr[3]
document.getElementById('zhi').innerHTML = ass;

var arr=[89,69,78,95];
var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=parseInt(arr[i]);
    };
var avg=Math.ceil(sum/arr.length);
document.getElementById('zhi-id').innerHTML = avg;

document.getElementById('addSort').onclick=function(){
   var s= this.getAttribute('data-xuehao');
    var name=this.innerHTML;
    document.getElementById('showSort').innerHTML=name+'学号是：'+s;

}
/*
var tds=doc.cla('score');
for(){
    tds[i].innerHTML+
}
*/



