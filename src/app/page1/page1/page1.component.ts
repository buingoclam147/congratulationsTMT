import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, AfterViewInit {

  constructor(private router: Router) {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['page3']);
    }, 14200);
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter text-white' style='display:inline-block'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.imgLoad()
    }, 3300);
  }
  imgLoad() {
    let banner = document.getElementsByClassName('banner')[0];
    let blocks = document.getElementsByClassName('blocks') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < 400; i++) {
      banner.innerHTML += `<div class='blocks'></div>`;
      let duration = Math.random() * 5;
      // blocks[i].style.backgroundAttachment = 'fixed';
      blocks[i].style.width = '0vw';
      blocks[i].style.height = '0vw';
      blocks[i].style.animation = 'animate 0.1s ease-in-out forwards';
      blocks[i].style.animationDuration = 2 + duration + 's';
      // blocks[i].style.animationDelay = duration + 's';
    }
    let section = document.querySelector('section');
    setTimeout(() => {
      for (let i = 0; i < 400; i++) {
        let duration = Math.random() * 5;
        // blocks[i].style.backgroundAttachment = 'fixed';
        blocks[i].style.animation = 'animateTow 0.1s ease-in-out forwards';
        blocks[i].style.animationDuration = 2 + duration + 's';
      }
      section.classList.add('active')
    }, 7000);
  }

}
