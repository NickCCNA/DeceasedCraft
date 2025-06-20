// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here

	// Porpsi
	event.create('incomplete_porpsi')
		.displayName('Incomplete Porpsi')
		.texture('apocalypsenow:item/can');
	
	// Coke
  	event.create('incomplete_coke')
		.displayName('Incomplete Coke')
		.texture('apocalypsenow:item/can');

	// Chips
	event.create('incomplete_chips')
		.displayName('Incomplete Chips')
		.texture('apocalypsenow:items/snack');

	// Cereal (skipped not needed)

	// Canned Beetroot
	event.create('incomplete_canned_beetroot')
		.displayName('Incomplete Canned Beetroot')
		.texture('apocalypsenow:item/can');

	// Canned Carrot
	event.create('incomplete_canned_carrot')
		.displayName('Incomplete Canned Carrot')
		.texture('apocalypsenow:item/can');
	
	// Canned Fish
	event.create('incomplete_canned_fish')
		.displayName('Incomplete Canned Fish')
		.texture('apocalypsenow:item/can');

	// Canned Melon
	event.create('incomplete_canned_melon')
		.displayName('Incomplete Canned Melon')
		.texture('apocalypsenow:item/can');
	
	// Canned Tomato
	event.create('incomplete_canned_tomato')
		.displayName('Incomplete Canned Tomato')
		.texture('apocalypsenow:item/can');
	
	// Canned Pork
	event.create('incomplete_canned_pork')
		.displayName('Incomplete Canned Pork')
		.texture('apocalypsenow:item/can');
	
	// Canned Rabbit
	event.create('incomplete_canned_rabbit')
		.displayName('Incomplete Canned Rabbit')
		.texture('apocalypsenow:item/can');
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})