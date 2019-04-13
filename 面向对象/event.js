class Event {
	constructor(){
		this.handlers = {};//记录所有的事件及处理函数
	}
	//添加事件监听
	//@param type 事件类型
	//@param handler
	on(type,handler){
		if(!this.handlers[type]) {
			this.handlers[type]=[]
		}
		if(!this.handlers[type].includes(handler)){
			this.handlers[type].push(handler);
		}
	}
	//取消事件监听
	//@param type 取消事件类型
	//@param handler 要取消的事件函数。如果不写，则清除该类型的所有函数
	off(type,handler){
		if(this.handlers[type]){
			if(handler===undefined){
				this.handlers[type]=[];
			} else {
				this.handlers[type] = this.handlers[type].filter( f=>f!=handler
				)
			}
		}
	}
	//执行函数
	//@param type 要执行该类型下的函数
	trigger(type){
		if(this.handlers[type]) {
			this.handlers[type].forEach(f => {
				f();
			});
		}
	}
	//事件只执行一次
	once(){
		
	}
}
