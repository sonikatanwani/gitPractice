// Hamster model
function Hamster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl;
}

// Hamster Instances
var hamster1 = new Hamster('hamster1', 'Syrian', 14, 'chu chu','hamster1.jpg');
var hamster2 = new Hamster('hamster2', 'Dwarf Campbell Russian', 11, 'chi chi','hamster2.jpg');

// Hamster Array
var hamsterArray = [hamster1, hamster2];

//Output to HTML
for (i=0;i < hamsterArray.length; i++) {
    name = hamsterArray[i].name,
        img = hamsterArray[i].imgUrl,
        breed = hamsterArray[i].breed,
        sound = hamsterArray[i].sound;
    var animalDiv = document.createElement('div');
    animalDiv.className = 'animalContainer'
    animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
    var sectionContainer = document.getElementById('dogs');
    sectionContainer.appendChild(animalDiv);
}

