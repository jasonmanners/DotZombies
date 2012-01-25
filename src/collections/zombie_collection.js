DOT.ZombieCollection = Backbone.Collection.extend({
	model : DOT.Zombie,
	initialize : function() {
		console.log(this.models);
	},
	update : function(delta_time) {
		_(this.models).each(function(zombie){zombie.update(delta_time)});
	}
});
