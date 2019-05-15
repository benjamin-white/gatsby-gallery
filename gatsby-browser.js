import 'normalize.css/normalize.css'
import './src/styles/typography.css'
import './src/styles/layout.css'
import './src/styles/colors.css'
import './src/styles/global.css'

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
}
