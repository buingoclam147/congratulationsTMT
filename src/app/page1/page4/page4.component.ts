import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['page5']);
    }, 5100);
    // var textWrapper = document.querySelector('.ml16');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, `<div class='text-red-600 text-9xl letter relative' style='display:inline-block'>$& <div class="w-3 h-10 bg-[#161b22] text-[#161b22]  absolute top-[16px] left-[15px]"></div></div>`);
    var ml4 = { opacityIn: [], scaleIn: [], scaleOut: 0, durationIn: 0, durationOut: 0, delay: 0 }
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.95, 1];
    ml4.scaleOut = 1;
    ml4.durationIn = 600;
    ml4.durationOut = 300;
    ml4.delay = 500;

    anime.timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: '.ml4 .letters-4',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  }

}
