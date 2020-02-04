import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service'

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });


  describe("HeroService Test Test", () => {
    let a;
    it("should be true", () => {
      a = true;
      expect(a).toBe(true);
    });
  });


  describe("HeroService: GetHeroes Test", () => {
    let heroserv = new HeroService(new MessageService())
    let heroEleven = heroserv.getHero(11);
    let expectedName = "Dr Nice";

    let myhero = this.heroserv.getHero(11)
    .subscribe(hero => this.hero = hero);

    expect(myhero.name).toBe("Dr Nice");

  }

  )

});
