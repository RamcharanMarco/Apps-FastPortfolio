import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-box logo-box">
            <div className="logo">
                <h1 className="fast">FAST</h1>
                <h1 className='portfolio'>PORTFOLIO</h1>
            </div>
        </div>
        <div className="footer-box sitemap">
            <h2>SITEMAP</h2>
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">login</a>
            <a href="">signup</a>
            <a href="">testimonials</a>
        </div>
        <div className="footer-box social">
            <h2>SOCIALS</h2>
            <a href="">facebook</a>
            <a href="">tumblr</a>
            <a href="">instagram</a>
        </div>
    </footer>
  )
}

export default Footer