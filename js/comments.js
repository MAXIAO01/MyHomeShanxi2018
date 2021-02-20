// JSP
var n=1;
	var s=0;//当前键选项目，初值为0
	window.onload=function()
	{
		
		var strCookie=document.cookie;
		//var arrCookie=strCookie.split("; ");
		var userId;
		//遍历cookie数组，处理每个cookie对
		//for(var i=0;i<arrCookie.length;i++){
        //var arr=arrCookie[i].split("=");
        //找到名称为userId的cookie，并返回它的值
		var arr=strCookie.split("=");
        if("username"==arr[0]){
			userId=arr[1];
		}	
		if(userId) alert("欢迎你,"+userId.toString());
			//document.getElementById("input2").value="~，"+userId;
		
		document.getElementById("add").addEventListener("click",additem,true);
		document.getElementById("selectall").addEventListener("click",selectallitems,true);
		document.getElementById("deselectall").addEventListener("click",deselectall,true);	document.getElementById("delete").addEventListener("click",deleteitem,true);
		document.getElementById("cookie").addEventListener("click",setCookie,true);
		window.onkeydown=function(a)
		{		
			//alert("a:"+a.keyCode+" n:"+n+" s:"+s);
			if(a.keyCode==40) //keycode=40，down
			{
				while(s<n)
				{
				s=(s+n+1)%n;
					
				for(var i=0;i<n;i++)
			{
				var item=document.getElementById(i.toString());
				if(item)item.parentNode.style.color="black";
			}
					
				var item=document.getElementById(s.toString());
				if(item){item.parentNode.style.color="red";break;}
				}
			}
			if(a.keyCode==38)//keycode=38，up
			{
				while(s>=0)
				{
				s=(s+n-1)%n;
					
				for(var i=0;i<n;i++)
			{
				var item=document.getElementById(i.toString());
				if(item)item.parentNode.style.color="black";
			}
					
				var item=document.getElementById(s.toString());
				if(item){ item.parentNode.style.color="red";break;}
				}
			}
			
			if(a.keyCode==13)//keycode=13,Enter
			{   
				var item=document.getElementById(s.toString());
				if(item)
				{
				if(item.checked==true){item.checked= false;}
				else{item.checked= true;}
				}
			}
		}
	}
	
	
	
	function additem()
	{
	var text=document.getElementById("textarea").value;//get内容
	if(text)
	{
	var newli=document.createElement("li");//创建“li”新项
	newli.setAttribute('id','li'+n.toString());
	
	var newitem=document.createElement("input");
	newitem.setAttribute('id',n.toString());
	newitem.setAttribute('type','checkbox');
	newli.appendChild(newitem);
	newli.appendChild(document.createTextNode(text));
	//newli.innerHTML='<input type="checkbox" id='+n.toString()+'>'+text;
	var items=document.getElementById('items');//获取列表
	items.appendChild(newli);//添加新项
	n++;
	}
	else{alert("输入不能为空！");}
	}
	
	function selectallitems()
	{
	for(var i=1;i<n;i++)
	{
		var item=document.getElementById(i.toString());
		if(item)item.checked=true;
	}
	}
	
	function deselectall()
    {
	for(var i=1;i<n;i++)
	{
		var item=document.getElementById(i.toString());
		if(item)item.checked=false;
	}
	}
	
	function deleteitem()
    {
	for(var i=1;i<n;i++)
	{
		var item=document.getElementById(i.toString());
		if(item)
		{
			if(item.checked==true)//选中条件
			{
				var li=document.getElementById('li'+i.toString());//确定对应的“li”项
				var items=document.getElementById('items');//获取ul
				items.removeChild(li);//删除"li"
			}
		}

	}
	}
	
	function setCookie() {
		document.cookie="username="+document.getElementById("input1").value.toString()+";";
		alert(document.getElementById("input1").value.toString());
		alert("Username has been stored in cookie!");
		
}
	