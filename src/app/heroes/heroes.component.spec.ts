import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';


describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDue', strength: 8},
            { id: 2, name: 'Wonderful Women', strength: 27},
            { id: 3, name: 'SuperMan', strength: 10}
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })
    describe('delete',()=>{

        it('should remove the indicated hero from the heroes list', () =>{
            // mockHeroService.deleteHeroe.andReturnValue(of(true))
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2);
        })
    })
})