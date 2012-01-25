DOT.ZombieView = Backbone.View.extend({

	initialize : function() {
		var that = this;
    this.collection.each(function(zombie){
    	zombie.bind.('change:pos', function(){that.__renderSingleZombie(that.options.ctx,zombie)}.bind(this));
    });
    //this.model.bind('change:pos', this.render.bind(this));
	},

	__renderSingleZombie : function(ctx,zombie) {
		var pos = zombie.get('pos');
		var prev = zombie.get('prev');
		ctx.save();
			ctx.clearRect(prev.x-1,prev.y-1,32,32);
			ctx.fillStyle = "#333333";
			ctx.fillRect(pos.x,pos.y,30,30);
		ctx.restore();
	}

	render : function() {
		var ctx = this.options.ctx;
		this.collection.each(function(zombie){
			that.__renderSingleZombie(ctz,zombie);
		});
	}
});