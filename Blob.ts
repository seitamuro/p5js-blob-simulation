import p5 from 'p5'

/*
 * Blobクラス
 * モジホコリカビ本体の動き
 */
export class Blob {
  x: number // x座標
  y: number // y座標
  vx: number // x方向の速度
  vy: number // y方向の速度
  radius: number // 半径
  color: p5.Color // 色

  /*
   * Blobクラスのコンストラクタ
   *
   * @param x x座標
   * @param y y座標
   *
   * @return Blob
   */
  constructor(p: p5, x: number, y: number) {
    this.x = x
    this.y = y
    this.radius = 10
    this.vx = 1
    this.vy = 1
    this.color = p.color(255, 0, 0)
  }

  /*
   * Blobを描画する
   *
   * @param p p5インスタンス
   */
  draw(p: p5) {
    p.fill(this.color)
    p.ellipse(this.x, this.y, this.radius, this.radius)
  }

  /*
   * Blobを動かす
   *
   * @param p p5インスタンス
   */
  move(p: p5) {
    if (this.x < 0 || this.x > p.width) {
      this.vx *= -1
    }
    if (this.y < 0 || this.y > p.height) {
      this.vy *= -1
    }
    this.x += this.vx
    this.y += this.vy
  }
}
