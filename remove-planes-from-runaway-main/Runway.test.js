const Runway = require('./Runway')


describe('Runway class', () => {
    const newRunway = new Runway('LAX')

    test('Max planes is 100', () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100)
    })

    test('Runway has name', () =>{
        expect(newRunway.name).toBe('LAX')
    })

    test('Runway can add planes', () =>{
        newRunway.add('X')
        newRunway.add('X')
        newRunway.add('X')
        expect(Runway.planes.length).toBe(3)
    })

    test('Runway throws error if # of planes is over 100', () =>{
        for(let i=0;i<97;i++){
            newRunway.add('X')
        }
        console.log(Runway.planes.length)
        expect(()=>{newRunway.add('X')}).toThrow()
    })

    test('Runway can remove planes', () =>{
        console.log(Runway.planes.length)
        newRunway.remove()
        console.log(Runway.planes.length)
        expect(Runway.planes.length).toBe(99)
    })

    test('Runway throws error if plane removed from empty array', () =>{
        Runway.planes.length = 0
       
        expect(()=>{newRunway.remove();}).toThrow();
  
    })
})