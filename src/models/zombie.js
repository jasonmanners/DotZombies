DOT.Zombie = DOT.DotObject.extend({
	initialize : function() {
		this.set({
			range : 100,
			goal : {
				x : 0,
				y : 0
			},
			tot_time : 0
		});
	},

	update : function(delta_time) {
		this.set({tot_time : this.get('tot_time') + delta_time});
		
		var x = this.get('pos').x;
		var y = this.get('pos').y;
		
  	var tmpX = Math.cos(this.get('tot_time')/2500)*100 + 100;
  	var tmpY = 0;

  	this.set({
  		prev : {
	  		x 	: x,
  			y 	: y
  		},
  		pos : {
  			x : tmpX,
  			y : y+tmpY
  		}
  	});
	}
});