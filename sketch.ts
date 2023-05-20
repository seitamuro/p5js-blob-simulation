import p5 from 'p5'

import { Blob } from './Blob'
import { BlobTrace } from './BlobTrace'

const sketch = (p: p5) => {
    const blobs: Blob[] = []
    const trace: BlobTrace[] = []

    p.setup = () => {
        p.noStroke()
        p.createCanvas(400, 400)
        let i: number
        for (i = 0; i < 10; i++) {
            blobs.push(new Blob(p, p.random(p.width), p.random(p.height)))
        }
    }

    p.draw = () => {
        p.background(200)
        blobs.forEach((blob) => {
            trace.push(new BlobTrace(p, blob.x, blob.y))
            blob.move(p)
            blob.draw(p)
        })
        trace.forEach((t) => {
            t.fade(p)
            t.draw(p)
        })
    }
}

new p5(sketch)
