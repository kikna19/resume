import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {fromEvent, generate, iif, interval} from "rxjs";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faHeartMusicCameraBolt} from "@fortawesome/free-solid-svg-icons/faHeartMusicCameraBolt";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('mainText', {static: true}) mainText!: ElementRef;
  @ViewChild('nav', {static: true}) nav!: ElementRef;
  @ViewChild('line', {static: true}) line!: ElementRef;
  @ViewChild('line2', {static: true}) line2!: ElementRef;
  @ViewChild('line3', {static: true}) line3!: ElementRef;
  @ViewChild('line4', {static: true}) line4!: ElementRef;
  @ViewChild('line5', {static: true}) line5!: ElementRef;
  @ViewChild('work', {static: true}) work!: ElementRef;
  @ViewChild('work2', {static: true}) work2!: ElementRef;
  @ViewChild('work3', {static: true}) work3!: ElementRef;
  @ViewChild('work4', {static: true}) work4!: ElementRef;
  @ViewChild('work5', {static: true}) work5!: ElementRef;
  @ViewChild('chip', {static: true}) chip!: ElementRef;
  @ViewChild('chip2', {static: true}) chip2!: ElementRef;
  @ViewChild('chip3', {static: true}) chip3!: ElementRef;
  @ViewChild('chip4', {static: true}) chip4!: ElementRef;
  @ViewChild('chip5', {static: true}) chip5!: ElementRef;
  @ViewChild('chip6', {static: true}) chip6!: ElementRef;
  @ViewChild('chip7', {static: true}) chip7!: ElementRef;
  @ViewChild('chip8', {static: true}) chip8!: ElementRef;
  @ViewChild('chip9', {static: true}) chip9!: ElementRef;
  @ViewChild('chip10', {static: true}) chip10!: ElementRef;
  @ViewChild('works', {static: true}) works!: ElementRef;
  @ViewChild('skills', {static: true}) skills!: ElementRef;
  @ViewChild('about', {static: true}) about!: ElementRef;
  @ViewChild('contact', {static: true}) contact!: ElementRef;
  @ViewChild('m') m!: ElementRef <HTMLAudioElement>


  facebook = faFacebook;
  gmail = faEnvelopeOpenText;
  github = faGithub;
  linkedin = faLinkedin;
  moon = faMusic;


  tl = gsap.timeline();
  public selectOne = false;
  public selectTwo = false;
  public selectThree = false;


  constructor() {
  }

  ngOnInit() {
    this.workAnimation();
    this.createStar();
    this.textAnimation();
  }


  enterAnimation(e: any, item: any) {
    gsap.fromTo(item, {
      width: '0',
      left: 0,
      delay: 0,
    }, {
      width: '100%',
    })
  }

  leaveAnimation(e: any, item: any) {
    gsap.fromTo(item, {
      width: "100%",
      left: "0%",
    }, {
      width: "0%",
      left: "100%",
      immediateRender: false,
    })
  }

  selectedOne() {
    this.selectOne = true;
    this.selectTwo = false;
    this.selectThree = false;
    this.tl.fromTo([
      this.chip.nativeElement,
      this.chip2.nativeElement,
      this.chip3.nativeElement,
      this.chip4.nativeElement,
    ], {
      scale: 1,
    }, {
      duration: .5,
      scale: 1.1,
      ease: "elastic",
      stagger: 0.05,
    })
  }

  selectedTwo() {
    this.selectTwo = true;
    this.selectThree = false;
    this.selectOne = false;
    gsap.fromTo([
      this.chip5.nativeElement,
      this.chip6.nativeElement,
      this.chip7.nativeElement,
    ], {
      scale: 1,
    }, {
      duration: .5,
      scale: 1.1,
      ease: "elastic",
      stagger: 0.05,
    })
  }

  selectedThree() {
    this.selectThree = true;
    this.selectTwo = false;
    this.selectOne = false;
    gsap.fromTo([
      this.chip8.nativeElement,
      this.chip9.nativeElement,
      this.chip10.nativeElement,
    ], {
      scale: 1,
    }, {
      duration: .5,
      scale: 1.1,
      ease: "elastic",
      stagger: 0.05,
    })
  }

  textAnimation() {
    this.tl.fromTo(this.mainText.nativeElement, {
      opacity: 0,
      y: 50,
    }, {
      delay: 1,
      opacity: 1,
      y: 0,
      duration: 1
    })
    this.tl.fromTo(this.nav.nativeElement, {
      opacity: 0,
      y: -10,
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    })

  }


  createStar() {
    interval(50).pipe().subscribe(() => {
      let top = Math.floor((Math.random() * 95) + 1);
      let left = Math.floor((Math.random() * 95) + 1);
      const star = document.createElement('i');
      gsap.from(star, {
        scale: 0,
      })
      star.setAttribute('class', 'material-icons');
      star.setAttribute('style', `position:fixed; top:${top}%; left:${left}%;
      font-size:.5rem;color:white; text-shadow: 0 0 2px #FFF, 0 0 2px #FFF, 0 0 2px #FFF, 0 0 2px white;`);
      star.innerHTML = 'star';
      document.body.appendChild(star);
      setTimeout(() => {
        gsap.to(star, {
          scale: 0,
          duration: 1,
        })
      }, 750)
    })
  }

  workAnimation() {
    this.tl.to(this.line.nativeElement, {
      scrollTrigger: {
        trigger: this.line.nativeElement,
        start: "bottom 80%",
        end: "bottom 60%",
      },
      duration: .2,
      backgroundColor: 'black',
      ease: "bounce",
    })
    gsap.from(this.work.nativeElement, {
      scrollTrigger: {
        trigger: this.work.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 60%',
      },
      duration: 1,
      x: -100,
      autoAlpha: 0,
      ease: "elastic",
      stagger: 0.05
    })

    this.tl.to(this.line2.nativeElement, {
      scrollTrigger: {
        trigger: this.line2.nativeElement,
        start: "bottom 80%",
        end: "bottom 60%",
      },
      duration: .2,
      backgroundColor: 'black',
      ease: "power2",
    });
    gsap.from(this.work2.nativeElement, {
      scrollTrigger: {
        trigger: this.work2.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 60%',
      },
      duration: 1,
      x: 100,
      autoAlpha: 0,
      ease: "elastic",
      stagger: 0.05
    })
    this.tl.to(this.line3.nativeElement, {
      scrollTrigger: {
        trigger: this.line3.nativeElement,
        start: "bottom 80%",
        end: "bottom 60%",
      },
      duration: .2,
      backgroundColor: 'black',
      ease: "power2",
    });
    gsap.from(this.work3.nativeElement, {
      scrollTrigger: {
        trigger: this.work3.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 60%',
      },
      duration: 1,
      x: -100,
      autoAlpha: 0,
      ease: "elastic",
      stagger: 0.05
    })
    this.tl.to(this.line4.nativeElement, {
      scrollTrigger: {
        trigger: this.line4.nativeElement,
        start: "bottom 80%",
        end: "bottom 60%",
      },
      duration: .2,
      backgroundColor: 'black',
      ease: "power2",
    });
    gsap.from(this.work4.nativeElement, {
      scrollTrigger: {
        trigger: this.work4.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 60%',
      },
      duration: 1,
      x: 100,
      autoAlpha: 0,
      ease: "elastic",
      stagger: 0.05
    })
    this.tl.to(this.line5.nativeElement, {
      scrollTrigger: {
        trigger: this.line5.nativeElement,
        start: "bottom 80%",
        end: "bottom 60%",
      },
      duration: .2,
      backgroundColor: 'black',
      ease: "power2",
    });
    gsap.from(this.work5.nativeElement, {
      scrollTrigger: {
        trigger: this.work5.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 60%',
      },
      duration: 1,
      x: -100,
      autoAlpha: 0,
      ease: "elastic",
      stagger: 0.05
    })
  }

  mailTo() {
    window.open('mailto:vazhiko199@gmail.com')
  }

  goWorks() {
    gsap.to(window,
      {
        ease: 'back',
        scrollTo: this.works.nativeElement,
      }
    );
  }

  goSkills() {
    gsap.to(window,
      {
        ease: 'back',
        scrollTo: this.skills.nativeElement,
      }
    );
  }

  goAbout() {
    gsap.to(window,
      {
        ease: 'back',
        scrollTo: this.about.nativeElement,
      }
    );

  }

  goContact() {
    gsap.to(window,
      {
        ease: 'back',
        scrollTo: this.contact.nativeElement,
      }
    );

  }


}
