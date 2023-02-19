import '../styles/footer.css'
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="location-info">
                <div className='contact-info'>
                    <address>
                        11462 W Bandon Rd <br />
                        Branchville, IN <br />
                        47514
                    </address>
                    <contact>
                        <a href="tel:+12702441291">{'(270)244-1291'}</a>
                    </contact>
                </div>
            </div>
            <div className="links">
                <a href="mailto:echo@echos-electronics.com">Email</a>
            </div>
        </div>
    )
}