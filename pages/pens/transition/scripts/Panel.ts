import { Particle } from "./Particle";
import SOUND_PATH from "../assets/skandinav-metal-epic-guitar-riff_175bpm_E_minor.ogg";

export class Panel {
  #sliderId = "#max";
  slow: boolean;
  panel: HTMLElement;
  slider: HTMLInputElement;
  audio: HTMLAudioElement;
  audioInput: HTMLInputElement;
  slowInput: HTMLInputElement;

  constructor() {
    this.slow = false;
    this.panel = document.getElementById("panel") as HTMLElement;
    this.slider = this.panel.querySelector(
      `${this.#sliderId} input`
    ) as HTMLInputElement;
    this.audioInput = this.panel.querySelector(
      "input[name=sound]"
    ) as HTMLInputElement;
    this.slowInput = this.panel.querySelector(
      "input[name=slow]"
    ) as HTMLInputElement;

    this.audio = new Audio(SOUND_PATH);

    this.slider.addEventListener("change", () => this.updateSlider(), false);
    this.audioInput.addEventListener("change", () => this.toggleSound(), false);
    this.slowInput.addEventListener(
      "change",
      () => (this.slow = !this.slow),
      false
    );
  }

  update(p: Particle) {
    const keys = ["x", "y", "ang", "v_ang", "r", "v_r"];

    for (const key of keys) {
      const el = this.panel.querySelector(`#${key} *:nth-child(2)`);
      if (el) el.innerHTML = p[key].toFixed(2);
    }
  }

  updateSlider() {
    const placeholder = this.panel.querySelector(
      `${this.#sliderId} *:nth-child(1)`
    ) as HTMLElement;

    placeholder && (placeholder.innerHTML = this.slider.value);
  }

  toggleSound() {
    this.audio.muted = !this.audio.muted;
  }
}
