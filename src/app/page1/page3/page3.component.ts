import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit, AfterViewInit {
  blockParent = false;
  nextPage = 0;
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    var curpage = 1;
    var sliding = false;
    var click = true;
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var pagePrefix = "slide";
    var pageShift = 500;
    var transitionPrefix = "circle";
    var svg = true;

    function leftSlide() {
      if (click) {
        if (curpage == 1) curpage = 5;
        console.log("woek");
        sliding = true;
        curpage--;
        svg = true;
        click = false;
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.className += " tran";
        }
        setTimeout(() => {
          move();
        }, 200);
        setTimeout(() => {
          for (let k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.classList.remove("tran");
          }
        }, 1400);
      }
    }

    function rightSlide() {
      if (click) {
        if (curpage == 4) curpage = 0;
        console.log("woek");
        sliding = true;
        curpage++;
        svg = false;
        click = false;
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.className += " tran";
        }
        setTimeout(() => {
          move();
        }, 200);
        setTimeout(() => {
          for (let k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.classList.remove("tran");
          }
        }, 1400);
      }
    }

    function move() {
      if (sliding) {
        sliding = false;
        if (svg) {
          for (let j = 1; j <= 18; j++) {
            var c = document.getElementById(transitionPrefix + j);
            c.classList.remove("steap");
            c.setAttribute("class", transitionPrefix + j + " streak");
            console.log("streak");
          }
        } else {
          for (let j = 19; j <= 36; j++) {
            var c = document.getElementById(transitionPrefix + j);
            c.classList.remove("steap");
            c.setAttribute("class", transitionPrefix + j + " streak");
            console.log("streak");
          }
        }
        setTimeout(() => {
          for (let i = 1; i <= 4; i++) {
            if (i == curpage) {
              var a = document.getElementById(pagePrefix + i);
              a.className += " up1";
            } else {
              var b = document.getElementById(pagePrefix + i);
              b.classList.remove("up1");
            }
          }
          sliding = true;
        }, 600);
        setTimeout(() => {
          click = true;
        }, 1700);

        setTimeout(() => {
          if (svg) {
            for (let j = 1; j <= 18; j++) {
              var c = document.getElementById(transitionPrefix + j);
              c.classList.remove("streak");
              c.setAttribute("class", transitionPrefix + j + " steap");
            }
          } else {
            for (let j = 19; j <= 36; j++) {
              var c = document.getElementById(transitionPrefix + j);
              c.classList.remove("streak");
              c.setAttribute("class", transitionPrefix + j + " steap");
            }
            sliding = true;
          }
        }, 850);
        setTimeout(() => {
          click = true;
        }, 1700);
      }
    }

    left.onmousedown = () => {
      leftSlide();
    };

    right.onmousedown = () => {
      rightSlide();
    };

    document.onkeydown = e => {
      if (e.keyCode == 37) {
        leftSlide();
      } else if (e.keyCode == 39) {
        rightSlide();
      }
    };

    //for codepen header
    // setTimeout(() => {
    // 	rightSlide();
    // }, 500);



    var ml11 = document.querySelector('.ml11 .letters');
    ml11.innerHTML = ml11.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
      }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.blockParent = true
    // }, 3500);
  }
  add() {
    this.nextPage = this.nextPage + 1;
    if (this.nextPage === 4) {
      this.router.navigate(['page7']);
    }
  }
}
