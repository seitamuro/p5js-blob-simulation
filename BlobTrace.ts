import p5 from 'p5'

/*
 * BlobTraceクラス
 * モジホコリカビの痕跡
 * */
export class BlobTrace {
    x: number // x座標
    y: number // y座標
    wet: number // 痕跡の残り具合
    delta: number // 痕跡の減少率
    color: p5.Color // 痕跡の色

    /*
     * BlobTraceクラスのコンストラクタ
     * @param x x座標
     * @param y y座標
     * @param wet 痕跡の残り具合
     *
     * @return BlobTrace
     */
    constructor(p: p5, x: number, y: number, wet = 10) {
        this.x = x
        this.y = y
        this.wet = wet
        this.delta = 0.1
        this.color = p.color(255, 255, 0)
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
        this.color = p.color(
            p.red(this.color),
            p.green(this.color),
            p.blue(this.color),
            this.wet
        )
        p.fill(this.color)
        p.ellipse(this.x, this.y, 10, 10)
    }
}
