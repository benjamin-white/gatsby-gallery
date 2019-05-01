import React       from 'react'
import styles      from './site-header.module.css'
import SocialIcons from '../social-icons/social-icons'
import { Link }    from 'gatsby'
import debounce    from 'lodash/debounce'
// this will base64 the asset, use gatsby-plugin-react-svg to avoid that happening
import Logo        from './logo.svg'

export default class SiteHeader extends React.Component  {

  constructor(props) {
    super(props);
    this.state = { shouldFade: window.pageYOffset > 100 }
    this.prevYOffset = window.pageYOffset
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll.bind(this), 100, {leading: true})
    )
  }

  handleScroll(ev) {
    this.setState({ shouldFade:  window.pageYOffset > 100 && window.pageYOffset > this.prevYOffset})
    this.prevYOffset = window.pageYOffset
    this.delay && clearTimeout(this.delay)
    if (!this.state.shouldFade && window.pageYOffset > 100) {
      this.delay = setTimeout(this.setFadeState.bind(this), 5000)
    }
  }

  setFadeState(clear=false) {
    this.setState({ shouldFade: window.pageYOffset > 100 })
  }

  render() {

    return (
      <header className={styles.siteHeader+' '+(this.state.shouldFade ? 'u-faded' : '')}>
        <div className={styles.uInner}>
          <Link to="/">
            <div className={styles.logoWrap}>
              <Logo />
            </div>
          </Link>
          <nav className={styles.siteHeaderNav}>
            <Link to="/about">About</Link>
            <span>|</span>
            <SocialIcons />
          </nav>
        </div>
      </header>
    );

  }

}
