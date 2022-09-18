import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['page1']);
    }, 3600);
  }

  ngAfterViewInit(): void {

    var textWrapper = document.querySelector('.ml16');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, `<div class='text-red-600 text-9xl letter relative' style='display:inline-block'>$& <div class="w-3 h-10 bg-[#161b22] text-[#161b22]  absolute top-[16px] left-[15px]"></div></div>`);

    anime.timeline({ loop: true })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 30 * i
      }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    var ml17 = document.querySelector('.ml17');
    ml17.innerHTML = ml17.innerHTML.replace(/\S/g, `<div class='letter text-9xl text-red-600' style='display:inline-block'>$&</div>`);

    anime.timeline({ loop: true })
      .add({
        targets: '.ml17 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 3100,
        delay: (el, i) => 30 * i
      }).add({
        targets: '.ml17',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    var ml18 = document.querySelector('.ml18');
    ml18.innerHTML = ml18.innerHTML.replace(/\S/g, `<div class='letter text-9xl text-red-600' style='display:inline-block'>$&</div>`);

    anime.timeline({ loop: true })
      .add({
        targets: '.ml18 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 3200,
        delay: (el, i) => 30 * i
      }).add({
        targets: '.ml18',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    // var ml11 = document.querySelector('.ml11 .letters');
    // ml11.innerHTML = ml11.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // anime.timeline({ loop: true })
    //   .add({
    //     targets: '.ml11 .line',
    //     scaleY: [0, 1],
    //     opacity: [0.5, 1],
    //     easing: "easeOutExpo",
    //     duration: 700
    //   })
    //   .add({
    //     targets: '.ml11 .line',
    //     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    //     easing: "easeOutExpo",
    //     duration: 700,
    //     delay: 100
    //   }).add({
    //     targets: '.ml11 .letter',
    //     opacity: [0, 1],
    //     easing: "easeOutExpo",
    //     duration: 600,
    //     offset: '-=775',
    //     delay: (el, i) => 34 * (i + 1)
    //   }).add({
    //     targets: '.ml11',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   });
  }


}
