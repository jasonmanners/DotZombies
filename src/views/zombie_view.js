DOT.ZombieView = Backbone.View.extend({

	initialize : function() {
    console.log(this.ctx);
    this.model.bind('change:pos', this.render.bind(this));
	},

	render : function() {
		var pos = this.model.get('pos');
		var prev = this.model.get('prev');
		var ctx = this.options.ctx;
		ctx.clearRect(prev.x-1,prev.y-1,32,32);
		ctx.fillStyle = "#000000";
		ctx.fillRect(pos.x,pos.y,30,30);
	}
});