// JSP
var n=1;
	var s=0;//��ǰ��ѡ��Ŀ����ֵΪ0
	window.onload=function()
	{
		
		var strCookie=document.cookie;
		//var arrCookie=strCookie.split("; ");
		var userId;
		//����cookie���飬����ÿ��cookie��
		//for(var i=0;i<arrCookie.length;i++){
        //var arr=arrCookie[i].split("=");
        //�ҵ�����ΪuserId��cookie������������ֵ
		var arr=strCookie.split("=");
        if("username"==arr[0]){
			userId=arr[1];
		}	
		if(userId) alert("��ӭ��,"+userId.toString());
			//document.getElementById("input2").value="~��"+userId;
		
		document.getElementById("add").addEventListener("click",additem,true);
		document.getElementById("selectall").addEventListener("click",selectallitems,true);
		document.getElementById("deselectall").addEventListener("click",deselectall,true);	document.getElementById("delete").addEventListener("click",deleteitem,true);
		document.getElementById("cookie").addEventListener("click",setCookie,true);
		window.onkeydown=function(a)
		{		
			//alert("a:"+a.keyCode+" n:"+n+" s:"+s);
			if(a.keyCode==40) //keycode=40��down
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
			if(a.keyCode==38)//keycode=38��up
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
	var text=document.getElementById("textarea").value;//get����
	if(text)
	{
	var newli=document.createElement("li");//������li������
	newli.setAttribute('id','li'+n.toString());
	
	var newitem=document.createElement("input");
	newitem.setAttribute('id',n.toString());
	newitem.setAttribute('type','checkbox');
	newli.appendChild(newitem);
	newli.appendChild(document.createTextNode(text));
	//newli.innerHTML='<input type="checkbox" id='+n.toString()+'>'+text;
	var items=document.getElementById('items');//��ȡ�б�
	items.appendChild(newli);//�������
	n++;
	}
	else{alert("���벻��Ϊ�գ�");}
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
			if(item.checked==true)//ѡ������
			{
				var li=document.getElementById('li'+i.toString());//ȷ����Ӧ�ġ�li����
				var items=document.getElementById('items');//��ȡul
				items.removeChild(li);//ɾ��"li"
			}
		}

	}
	}
	
	function setCookie() {
		document.cookie="username="+document.getElementById("input1").value.toString()+";";
		alert(document.getElementById("input1").value.toString());
		alert("Username has been stored in cookie!");
		
}
	