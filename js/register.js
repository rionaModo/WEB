function checkPhone(){
  var phone=document.getElementById('tel-phone').value;
  if(!(/^1[34578]\d{9}$/.test(phone))){ 
       document.getElementById('phone-msg').className='aliasTip'; 
        return false; 
    } else{
		document.getElementById('phone-msg').className='aliasTip hide';
		return true; 
	}
}
document.getElementById('tel-phone').onblur=checkPhone;

document.getElementById('tel-phone').onfocus=function(){
    document.getElementById('phone-msg').className='aliasTip hide';
};



document.getElementById('code-btn').onclick=function(){

	if(!checkPhone()){
		document.getElementById('code-btn').value='获取验证码';
		return false;
	}else{
		var html= document.getElementById('code-btn').value;
		if(html=='获取验证码'){
			document.getElementById('code-btn').value='60s后重新回去验证码';
		}else{
			document.getElementById('code-btn').value='获取验证码';
		}
		
	}
}



document.getElementById('code-input').onblur=function(){
    var tips = document.getElementById("code-msg");
    //var input=document.getElementById('code-input')
    if(!this.value){
    	tips.innerHTML="验证码不能为空";
        tips.style.display="block";
    }else if(this.value.length!=6 || isNaN(this.value)){
    	tips.innerHTML="必须为6位数字的验证码";
        tips.style.display="block";
    }else{
    	tips.style.display="none";
    }
}

 




  document.getElementById("setpass").onblur=function(){
  		var tips = document.getElementById('setPass-msg');
  		if(!this.value) {
  			tips.innerHTML = '密码不能为空';
  			tips.style.display='block';
  		}else if(this.value.length!=6 || isNaN(this.value)){
  			tips.innerHTML = '格式不正确，请您正确密码。';
  			tips.style.display='block';
  		}else{
  			tips.style.display='none';
  		}
  }
document.getElementById('setpass').onfocus=function (){
    document.getElementById('setPass-msg').style.display="none"
};


document.getElementById("setpasss").onblur=function(){
       var tips = document.getElementById("setpasss-msg");
       if(!this.value){
       	tips.innerHTML = "密码不能为空";
       	tips.style.display='block';
       }else if(this.value.length!=6 || isNaN(this.value)){
       	tips.innerHTML = '格式不正确，请您正确密码。';
  			tips.style.display='block';
       }else if(document.getElementById('setpass').value!=this.value){
       	tips.innerHTML = "密码不一致"
       	tips.style.display='block';
       }else{
       	tips.style.display="none";
       }
}
document.getElementById("setpasss").onblur=function(){
	document.getElementById("setpasss-msg").style.display="none";
}