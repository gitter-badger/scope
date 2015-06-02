;var Scope = function(s){
	this.template = (s!==undefined)? s.template || false : false;
	this.scope = (s!==undefined)? s.scope || false : false;
	var regexp = /{{[a-zA-Z]+}}/g;
	var r = function(tpl,scp){
		var arr;
		while((arr = regexp.exec(tpl))!= null){
				var j = arr[0].replace(/[^a-zA-Z]+/g,'');
				tpl = (scp[j]!=undefined)? tpl.replace('{{'+j+'}}',scp[j]) : tpl ;
			}
		return tpl;
	}
	this.render = function(){
		var rendered = '';
		if(this.template&&this.scope){
			if(this.scope instanceof Array){//ARRAY RENDER
				for(var i in this.scope){
					rendered += r(this.template,this.scope[i]);
				}
			}
			else{//OBJECT RENDER
				rendered = r(this.template,this.scope);
			}
		}
		return rendered;
	}
}
