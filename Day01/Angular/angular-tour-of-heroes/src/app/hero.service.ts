import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    console.log("Hero.Service: getHeroes called")
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }



  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    let heroNow = HEROES.find(hero => hero.id === id)
    this.messageService.add(`HeroService: fetched hero id=${id} (${heroNow.name})`);
    return of(HEROES.find(hero => hero.id === id));
  }

}