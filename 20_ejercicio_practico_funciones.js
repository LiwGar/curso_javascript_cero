// Create knights of the zodiac Objects

function KnightsOfTheZodiac (name, type, age, height, specialty, superpower, level){
    this.name = name;
    this.type = type;
    this.age = age;
    this.height = height;
    this.specialty = specialty;
    this.superpower = superpower;
    this.level = level;
    this.isLeader = false;
    this.displayInfo = function() {
        console.log(`Knights Of The Zodiac Information: 
        Name: ${this.name}
        Type: ${this.type}
        Age:  ${this.age}
        Height: ${this.height}
        Speciality: ${this.specialty}
        Superpower: ${this.superpower}
        Level: ${this.level}
        ${this.isLeader ? 'Team Leader' : 'Leader: No'}
        `);
    }

    this.becomeLeader = function(){
        this.isLeader = true;
        console.log(`${this.name} is the Team Leader of The Bronze Knights.`);
    }

};

const pegaso = new KnightsOfTheZodiac('Seiya', 'Bronce', 16, '1.65m', 'Pegaso', 'Meteoros Pegaso','80%' );
const shiryu  = new KnightsOfTheZodiac('Shiryu', 'Bronce', 17, '1.78m', 'Dragón', 'Cólera del Dragón', '85%' );
const hyoga  = new KnightsOfTheZodiac('Hyoga', 'Bronce', 16, '1.80m', 'Cisne', 'Polvo de Diamantes', '82%' );
const shun  = new KnightsOfTheZodiac('Shun', 'Bronce', 15, '1.65m', 'Andrómeda', 'Cadena Nebular', '78%' );
const ikki  = new KnightsOfTheZodiac('Ikki', 'Bronce', 18, '1.75m', 'Fénix', 'Ave Fénix', '88%' );

pegaso.becomeLeader()
pegaso.displayInfo();
shiryu.displayInfo();
hyoga.displayInfo();
shun.displayInfo();
ikki.displayInfo();