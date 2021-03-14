import {rest, setupWorker} from 'msw'
import data from './linkData.json'

const worker = setupWorker(
  rest.get('https://shop-bff.fyndiq.se/cms/footer', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.json(data))
  }),
)

export default worker
