var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var partOfText = text.slice(0,73);

var textChangeAfter = partOfText.replace('Velociraptor', 'Triceratops');

console.log(textChangeAfter);