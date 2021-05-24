'use strict';

{
  class Panel1 {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');
      
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

        
      this.stop =document.createElement('div');
      this.stop.textContent = '光乃椛';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains('inacive')) {
          return;
        }
        clearTimeout(this.timeoutId);
       
        panelsLeft--;

        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult();
        }
        
      });
  
      section.appendChild(this.img);
      section.appendChild(this.stop);
      
      const main = document.querySelector('main');
      main.appendChild(section);
    }
    
    getRandomImage() {
      const images = [
        'img/8.JPG',
        'img/9.JPG',
        'img/10.JPG',
        'img/11.JPG',
        'img/12.JPG',
        'img/13.JPG',
        'img/14.JPG',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }
  

    activate() {
      this.stop.classList.remove('inactive');
    }
    
  }
  class Panel2 {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');
      
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();
      
      this.stop =document.createElement('div');
      this.stop.textContent = '光乃椛＆陽桜乃';
      this.stop.classList.add('stop', 'inactive');

      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains('inacive')) {
          return;
        }
        this.stop.classList.add('inactve');
        clearTimeout(this.timeoutId);
        panelsLeft--;

        if (panelsLeft === 0) {
          checkResult();
          spin.classList.remove('inactive');
          panelsLeft = 3;
        }
        
      });
  
      section.appendChild(this.img);
      section.appendChild(this.stop);
      
      const main = document.querySelector('main');
      main.appendChild(section);
    }
    
    getRandomImage() {
      const images = [
        'img/29.JPG',
        'img/30.JPG',
        'img/31.JPG',
        'img/32.JPG',
        'img/33.JPG',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    activate() {
      this.stop.classList.remove('inactive');
    }
    
  }
  class Panel3 {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');
      
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();
      
      this.stop =document.createElement('div');
      this.stop.textContent = '陽桜乃';
      this.stop.classList.add('stop', 'inactive');

      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains('inacive')) {
          return;
        }
        this.stop.classList.add('inactve');
        clearTimeout(this.timeoutId);
        panelsLeft--;

        if (panelsLeft === 0) {
          checkResult();
          spin.classList.remove('inactive');
          panelsLeft = 3;
        }
        
      });
  
      section.appendChild(this.img);
      section.appendChild(this.stop);
      
      const main = document.querySelector('main');
      main.appendChild(section);
    }
    
    getRandomImage() {
      const images = [
        'img/1.JPG',
        'img/2.JPG',
        'img/3.JPG',
        'img/4.JPG',
        'img/5.JPG',
        'img/6.JPG',
        'img/7.JPG',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    activate() {
      this.stop.classList.remove('inactive');
    }
    
  }
  const panels = [
    new Panel1(),
    new Panel2(),
    new Panel3(),
  ];
  let panelsLeft = 3;

  const spin =document.getElementById('spin');
  spin.addEventListener('click', () => {
    if (spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    
    panels.forEach(panel1 => {
      panel1.activate();
      panel1.spin();
    });
  });

}

