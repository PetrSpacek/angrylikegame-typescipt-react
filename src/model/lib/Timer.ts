import { TIMER_DELAY } from "src/config";

export class Timer {
  private callback: () => void;
  private interval: NodeJS.Timeout;
  private running: boolean;

  constructor() {
    this.running = false;
  }

  setCallback(fn: () => void){
    this.callback = fn;
  }

  run() {
    if (this.running) return;
    this.callback();
    this.interval = setInterval(this.callback, TIMER_DELAY);
    this.running = true;
  }

  stop() {
    if (!this.running) return;
    clearInterval(this.interval);
    this.running = false;
  }

}