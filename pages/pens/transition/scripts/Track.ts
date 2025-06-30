export class Track {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById("debug") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  log(message: string, x: number, y: number) {
    this.context.fillStyle = "rgba(150, 255, 150, 1.0)";
    this.context.font = "12px Georgia";
    this.context.fillText(message, x, y);
  }

  clear() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
