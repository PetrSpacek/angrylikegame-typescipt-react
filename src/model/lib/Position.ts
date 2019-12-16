export class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  setX(n: number): void {
    this.x = n;
  }

  setY(n: number): void {
    this.y = n;
  }

  move(dx: number, dy: number) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  }
}
