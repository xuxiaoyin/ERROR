function ajax(methods,url,data,success){
	var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microfit.XMLHTTP');
	
	if(methods=='get') {
		if(data){
			url=url+'?'+data
		}
	};
	xhr.open(methods,url,true);
	if(methods=='post') {
		xhr.send(data);
	}else{
		xhr.send();
	}
	
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4 && xhr.status==200) {
			success && success(xhr.responseText)
		}
	}
}
