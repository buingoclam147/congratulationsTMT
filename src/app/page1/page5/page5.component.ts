import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {
  currentText = false
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.currentText = true
    }, 2500);
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      })
    // .add({
    //   targets: '.ml6',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
    // });
  }

}
