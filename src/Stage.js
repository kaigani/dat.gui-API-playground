(function(window){

	var Stage = function(root){

		this.root = root || document.body;
		this.count = 0;
	};

	Stage.prototype.addModule = function(description,params,result,callback){

		this.count++;

		// Container
		var module = document.createElement('div');
		module.id = 'module-'+this.count;
		module.className = 'module clearfix';

		// Description
		var pre = document.createElement('pre');
		pre.id = 'description-'+this.count;
		pre.className = 'description';
		pre.innerHTML = description;

		// GUI
		var gui = new dat.GUI({ autoplace: false });

		var f = gui.addFolder('Parameters');
		for(var item in params){

			if( params.hasOwnProperty(item) ){
				f.add(params,item).onChange(callback);
			}
		}
		f.open();

		f = gui.addFolder('Result');
		for(item in result){

			if( result.hasOwnProperty(item) ){

				f.add(result,item).listen();
			}
		}
		f.open();

		module.appendChild(gui.domElement);
		module.appendChild(pre);
		this.root.appendChild(module);
	};

	window.Stage = Stage;

})(window);

