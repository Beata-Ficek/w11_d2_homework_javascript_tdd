const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;

  beforeEach(function () {
    park = new Park('great park', 10);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50)
    dino2 = new Dinosaur('stegosaurus', 'herbivore', 20);
    dino3 = new Dinosaur('velociraptor','omnivore', 30);
    dino4 = new Dinosaur('velociraptor','omnivore', 35);
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'great park');
});

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    const actual = park.dinosaurs[0];
    assert.deepStrictEqual(actual, dino1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1);
    park.removeDino(dino1);
    const actual = park.countDinos();
    assert.deepStrictEqual(actual, 0);
  });


  it('should be able to find the dinosaur that attracts the most visitors')




  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino3);
    park.addDino(dino4);
    park.findAllofSpecies('velociraptor');
    const expected = [dino3, dino4]
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino3);
    park.addDino(dino4);
    park.removeAllofSpecies('velociraptor');
    const expected = [dino1]
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });




});
