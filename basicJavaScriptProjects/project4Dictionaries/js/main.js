//ANIMAL DICTIONARY//
function myDictionary() {
    var animal = {
        species: "dog",
        animalName: "Fawkes",
        breed: "Sheltie Mix",
        age: 3,
        sound: "bark"
    }; //closing bracket for var animal dictionary//
    document.getElementById("dictionary").innerHTML = animal.animalName + " is a " + animal.species; //produces result when clicking p id="same"//
}

//IDENTICAL KVPs//
function identical() {
    var dup = {
        species: "cat",
        animalName: "Neville",
        species: "Longhair Tabby",
        age: 5,
        species: "meow"
    }; //closing bracket for var duplicate dictionary//
    document.getElementById("same").innerHTML = dup.animalName + " is a " + dup.species;//this is to show what happens when you have multiple keys with the same name. JS will pick the last value paired with the key//
}

//DELETE VALUE//
function del() {
    var delOne = {
        species: "creep",
        animalName: "Olivia",
        age: 5,
        sound:"MOMMY!"
    };//closing bracket for var delOne dictionary//
    delete delOne.species;//delete KVP 'species'//
    document.getElementById("creep").innerHTML = delOne.animalName + " is a " + delOne.species;// return function when p id="same" is clicked, delOne.species was deleted so it will return'undefined'//
}