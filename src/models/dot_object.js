DOT.DotObject = Backbone.Model.extend({
	defaults : {
		pos : {
			x : 0,
			y : 0
		},
		
		prev : {
			x : 0,
			y : 0
		},

		scale : 0,
		health : 0,
		velocity : 0,
		direction : 0,
	},

	initialize : function() {

	},

	update : function(delta_time) {
		var x = this.get('pos').x;
		var y = this.get('pos').y;
		var vel = this.get('velocity');
		var dir = this.get('direction');
		
		var step = (delta_time / 1000);
  	
  	var tmpX = step * vel * Math.cos(dir);
  	var tmpY = step * vel * Math.sin(dir);

  	this.set({
  		prev : {
	  		x 	: x,
  			y 	: y
  		},
  		pos : {
  			x : x+tmpX,
  			y : y+tmpY
  		}
  	});

	}
});
