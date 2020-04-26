import renderer from 'react-test-renderer'
import Chance from 'chance'

import Index from './index'

import Layout from '../components/Layout'

jest.mock('../components/Layout')

describe('Index', () => {
  const chance = new Chance()
  let randomUserAgent: string
  beforeEach(() => {
    ;(Layout as jest.Mock).mockReturnValue(null)
    randomUserAgent = chance.sentence()
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Index userAgent="non-random user agent" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  describe('getInitialProps', () => {
    let context: any
    describe('server side rendered', () => {
      beforeEach(() => {
        context = {
          req: {
            headers: {
              'user-agent': randomUserAgent,
            },
          },
        }
      })
      describe('user-agent header provided', () => {
        it('should extract the user agent', async () => {
          const props = await Index.getInitialProps!(context)

          expect(props.userAgent).toBe(randomUserAgent)
        })
      })
      describe('user-agent header not provided', () => {
        beforeEach(() => {
          delete context.req.headers['user-agent']
        })

        it('should extract the user agent', async () => {
          const props = await Index.getInitialProps!(context)

          expect(props.userAgent).toBe('')
        })
      })
    })

    describe('client side rendered', () => {
      beforeEach(() => {
        context = {}
        jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(randomUserAgent)
      })

      it('should extract the user agent', async () => {
        const props = await Index.getInitialProps!(context)

        expect(props.userAgent).toBe(randomUserAgent)
      })
    })
  })
})
