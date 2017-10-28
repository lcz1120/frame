(function(){
    //common
	function tagName(tagName){
	    return document.getElementsByTagName(tagName);
	}
	function $(id){
	    return document.getElementById(id);
	}
	function addEvent(obj,type,func){
	    if(obj.addEventListener){
	        obj.addEventListener(type,func,false);        
	    }else if(obj.attachEvent){
	        obj.attachEvent('on'+type,func);
	    }
	}
	
	//建立某些参数
	var v = {
	    eleGroup:null,
	    eleTop:null,
	    eleHeight:null,
	    screenHeight:null,
	    visibleHeight:null,
	    scrollHeight:null,
	    scrolloverHeight:null,
	    limitHeight:null
	}
	
	//对数据进行初始化
	function init(id,img){
		v.eleGroup = document.getElementById(id).getElementsByTagName(img)
		screenHeight=document.documentElement.clientHeight;
		scrolloverHeight=document.body.scrollTop;
		for(var i=0,j=v.eleGroup.length;i<j;i++){
	        if(v.eleGroup[i].offsetTop<=screenHeight && v.eleGroup[i].getAttribute('_src')){
	            v.eleGroup[i].setAttribute('src',v.eleGroup[i].getAttribute('_src'));
	            v.eleGroup[i].removeAttribute('_src')
	        }        
		}
	}
	function lazyLoad(){
	    if(document.body.scrollTop == 0){
	        limitHeight=document.documentElement.scrollTop+document.documentElement.clientHeight;
	    }else{
	        limitHeight=document.body.scrollTop+document.documentElement.clientHeight+400;
	    }
	    for(var i=0,j=v.eleGroup.length;i<j;i++){
	        if(v.eleGroup[i].offsetTop<=limitHeight && v.eleGroup[i].getAttribute('_src')){
	            v.eleGroup[i].src=v.eleGroup[i].getAttribute('_src');
	            v.eleGroup[i].removeAttribute('_src')
	    	}        
	    }
	}
	init('box','img')
	addEvent(window,'scroll',lazyLoad);
})()