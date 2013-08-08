Master = Class.create({
    masterName : '',
    dogs : [],
    initialize: function(name) {
        this.masterName = name;
        console.log ('Master name is ' + this.masterName + '. Hello!');
    },

    showAllDogs: function() {
        console.log ('Your dogs are: ' + this.dogs)
    },

    sellDog: function(name){
        this.dogs.splice(this.dog.indexOf(name), 1);
        console.log('You sold ' + name + ' and now you have only: ' + this.dogs);
    },

    comeHere: function(name) {
        if (this.dogs.indexOf(name) >=0 ){
            console.log (name + ' is running to his master ' + this.masterName)
        } else {
            console.log ('There is no dog with ' + name + ' name')
        }
    }
});

Dog = Class.create({
    dogName : '',
    initialize: function(name, master) {
        this.dogName = name;
        this.masterName = master.masterName;
        master.dogs.push(this.dogName);
        console.log (this.masterName + ' has bought a dog. Dog name is: ' + this.dogName)
    },

    voice: function(){
        console.log(this.dogName + ' woof woof');
    }
});