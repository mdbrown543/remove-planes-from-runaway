class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    constructor(name) {
        this.name = name
    }
    
    add(plane) {

        if (Runway.planes.length>=Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error ("runways at full capacity!")
        }
        Runway.planes.push(plane)
    }
    remove(){
        if (Runway.planes.length <= 0) {
            throw new Error ("nothing to remove!")
        }
        Runway.planes.shift()
    }
}

module.exports = Runway