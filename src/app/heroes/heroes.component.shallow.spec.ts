import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs/internal/observable/of";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;


    @Component({
        selector: 'app-hero',
        template: '<div></div>',
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
        //@Output() delete = new EventEmitter();
    }


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
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            //schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    })
    it('should set herores correctky from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });
    it('should create one li for each heroe', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })
})