import { Panel } from "./Panel";
import { Particle } from "./Particle";
import { Track } from "./Track";

export class Transition {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width!: number;
  height!: number;

  // Middle os screen
  oX!: number;
  oY!: number;

  v = 2;
  obj_max = 60;
  max = 20; //20
  amax = 0;
  interval: number;
  finished = new Set();

  fp!: Particle; // first particle
  track: Track;
  panel: Panel;

  constructor(panel: Panel) {
    this.track = new Track();
    this.panel = panel;

    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.max = this.panel.slider.valueAsNumber;

    this.oX = this.width / 2;
    this.oY = this.height / 2;

    this.createParticles();

    this.canvas.addEventListener("click", () => this.restart(), true);
    this.panel.slider.addEventListener("change", () => this.restart(), false);
    requestAnimationFrame(() => this.update());

    if (!this.panel.slow) {
      this.panel.audio.play();
    }
  }

  createParticles() {
    this.fp = new Particle();
    let p = this.fp;

    for (let i = 0; i < this.max; i++) {
      p.id = i;
      p.ang = i * this.max; // ângulo inicial, 0, 20, 40, ..., 400
      p.v_ang = 1;
      p.r = 10; // raio inicial
      p.v_r = 0;

      // Start in middle
      p.x = this.oX;
      p.y = this.oY;

      if (i != this.max - 1) {
        p.next = new Particle();
        p = p.next;
      }
    }
  }

  restart() {
    this.max = this.panel.slider.valueAsNumber;
    this.context.clearRect(0, 0, this.width, this.height);
    this.finished.clear();
    //Restart!
    this.createParticles();
  }

  update() {
    let count = 0;
    let p = this.fp;

    while (p) {
      count++;

      if (p.r > 400) {
        p = p.next;
        this.finished.add(p);
        continue;
      }

      if (p.id < 2) {
        this.track.clear();
        this.track.log("ᵜ", p.x, p.y);
        this.panel.update(p);
      }

      let ran = Math.random(); // 0 a 1

      if (ran < 0.1) {
        // aumenta o raio, mantem o ângulo
        p.v_ang = 0;
        p.v_r = this.v;
      } else if (ran < 0.2) {
        // diminui o ângulo, mantem o raio
        p.v_ang = -this.v;
        p.v_r = 0;
      } else if (ran < 0.3) {
        // aumenta o ângulo, mantem o raio
        p.v_ang = this.v;
        p.v_r = 0;
      } else if (ran < 0.304 && this.amax < this.obj_max) {
        // cria nova particula
        // p.next = this.createParticlePoint(p);
      }

      // Soma do raio
      p.r = p.r + p.v_r;

      // Novo angulo, caso vang diferente de 0
      let nang = p.ang + p.v_ang;
      let rad = (Math.PI / 180) * nang;
      let ax = p.r * Math.cos(rad);
      let ay = p.r * Math.sin(rad);
      let px = ax + this.oX;
      let py = ay + this.oY;

      this.draw(p, px, py);

      p.x = px;
      p.y = py;
      p.ang = nang;
      p = p.next;
    }

    this.amax = count;

    if (this.finished.size >= this.amax) return;

    if (this.panel.slow) {
      setTimeout(() => {
        requestAnimationFrame(() => this.update());
      }, 500);
    } else {
      setTimeout(() => {
        requestAnimationFrame(() => this.update());
      }, 23);
    }
  }

  draw(p: Particle, px: number, py: number) {
    this.context.beginPath();
    this.context.strokeStyle = "#FFFFFF";
    this.context.moveTo(p.x, p.y);
    this.context.quadraticCurveTo(px, py, px, py);
    this.context.stroke();
    this.context.closePath();
  }

  createParticlePoint(p: Particle) {
    let newP = new Particle();
    newP.ang = p.ang;
    newP.id = p.id + 1;

    if (p.ang == 0) {
      newP.v_ang = 0;
    } else {
      newP.v_ang = Math.random() < 0.5 ? -1 : 1;
    }

    newP.r = p.r;
    newP.v_r = p.v_ang == 0 ? 1 : 0;
    newP.x = p.x;
    newP.y = p.y;
    newP.next = p.next;

    return newP;
  }
}
