DOT.ZombieCollection = Backbone.Collection.extend({
	model : DOT.Zombie,

	update : function(delta_time) {
		this.collection.each(function(zombie){zombie.update(delta_time)});
	}
});