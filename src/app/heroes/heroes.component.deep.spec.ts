import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs/internal/observable/of";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('HeroesComponent (deep tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;


    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDue', strength: 8 },
            { id: 2, name: 'Wonderful Women', strength: 27 },
            { id: 3, name: 'SuperMan', strength: 10 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHeroe'])

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);

    });

    it('should set herores correctky from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li for each heroe', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });

    it('should render each heroe as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        //run ngOnInit
        fixture.detectChanges();

        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDEs.length).toEqual(3);
        for (let index = 0; index < heroComponentDEs.length; index++) {
            expect(heroComponentDEs[index].componentInstance.hero).toEqual(HEROES[index]);
        }


    })
})