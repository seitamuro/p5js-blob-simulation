import p5 from 'p5'

/*
 * BlobTraceクラス
 * モジホコリカビの痕跡
 * */
class BlobTrace {
    x: number // x座標
    y: number // y座標
    wet: number // 痕跡の残り具合
    delta: number // 痕跡の減少率

    /*
     * BlobTraceクラスのコンストラクタ
     * @param x x座標
     * @param y y座標
     * @param wet 痕跡の残り具合
     *
     * @return BlobTrace
     */
    constructor(x: number, y: number, wet = 10) {
        this.x = x
        this.y = y
        this.wet = wet
        this.delta = 0.1
    }

    /*
     * 時間経過による痕跡の減少
     * @param p p5インスタンス
     */
    fade(p: p5) {
        this.wet -= this.delta
    }

    /*
     * 描画する
     * @param p p5インスタンス
     */
    draw(p: p5) {
        p.fill(0, 0, 0, this.wet)
        p.ellipse(this.x, this.y, 10, 10)
    }
}

/*
 * Blobクラス
 * モジホコリカビ本体の動き
 */
class Blob {
    x: number // x座標
    y: number // y座標
    vx: number // x方向の速度
    vy: number // y方向の速度
    radius: number // 半径

    /*
     * Blobクラスのコンストラクタ
     *
     * @param x x座標
     * @param y y座標
     *
     * @return Blob
     */
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = 10
        this.vx = 1
        this.vy = 1
    }

    /*
     * Blobを描画する
     *
     * @param p p5インスタンス
     */
    draw(p: p5) {
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

const sketch = (p: p5) => {
    const blobs: Blob[] = []

    p.setup = () => {
        p.createCanvas(400, 400)
        let i: number
        for (i = 0; i < 10; i++) {
            blobs.push(new Blob(p.random(p.width), p.random(p.height)))
        }
    }

    p.draw = () => {
        p.background(200)
        blobs.forEach((blob) => {
            blob.move(p)
            blob.draw(p)
        })
    }
}

new p5(sketch)
