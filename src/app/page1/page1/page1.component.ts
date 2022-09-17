import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, AfterViewInit {

  constructor() {

  }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    let banner = document.getElementsByClassName('banner')[0];
    let blocks = document.getElementsByClassName('blocks') as HTMLCollectionOf<HTMLElement>;
    for (let i = 1; i < 400; i++) {
      banner.innerHTML += `<div class='blocks'></div>`;
      let duration = Math.random() * 5;
      blocks[i].style.backgroundAttachment = 'fixed';
      blocks[i].style.width = '5vw';
      blocks[i].style.height = '5vw';
      blocks[i].style.animation = 'animate 2s ease-in-out forwards';
      blocks[i].style.animationDuration = 2 + duration + 's';
      blocks[i].style.animationDelay = duration + 's';
    }
    let section = document.querySelector('section');
    setTimeout(() => {
      section.classList.add('active')
    }, 14000);
  }

}
