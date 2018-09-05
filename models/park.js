const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];

}

  Park.prototype.addDino = function (dinosaur){
    return this.dinosaurs.push(dinosaur);
  }

  Park.prototype.countDinos = function(){
    return this.dinosaurs.length;
  }

  Park.prototype.removeDino = function(dinosaur){
    return this.dinosaurs.pop();
  }

  // Park.prototype.dinoWithMostVisitors = function(){
  //
  // }

  Park.prototype.findAllofSpecies = function(species){
    const dinosaursOfSpecies = [];
    for (const dinosaur of this.dinosaurs){
      if (dinosaur.species == species){
        dinosaursOfSpecies.push(dinosaur);
      }
    }
    return this.dinosaurs = dinosaursOfSpecies;
  }

  Park.prototype.removeAllofSpecies = function(speciesToRemove){
    const dinosaursLeft = []
    for (const dinosaur of this.dinosaurs){
      if (dinosaur.species !== speciesToRemove){
        dinosaursLeft.push(dinosaur);
      }
    }
    return this.dinosaurs = dinosaursLeft;
  }

module.exports = Park;
