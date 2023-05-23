import classes from '../styles/About.module.css';

export default function About() {
    return (
        <div>
            {/* I know there's a bunch of refactoring that could be done here to make the code look better, 
            but I'm just trying to get everything to work first. */}

            <div className={classes.intro}>
                <div className={classes.introtext}>
                    <p>TCD @ UW</p>
                    <p>-- aims to spread Chinese culture in the greater Seattle area through events like performances and workshops</p>
                </div>
            </div>

            <div className={classes.interest}>           
                <p className={classes.contact}>To get in touch with us, email tcduw@uw.edu or check out our Interest Form and Remind</p>
                <button onclick="" className={classes.btn1}>Interest Form</button>
                <button onclick="" className={classes.btn2}>Remind</button>
            </div>

            <div className={classes.pictures}>
                <h3 className={classes.gallery}>Gallery</h3>
                <p className={classes.gallerytext}>“Your performance was so beautiful... It reminded me the beauty and diversity of Chinese culture that I, as a Chinese person, had forgotten to appreciate and be proud of...”</p>
                
                <img src="../../public/about2.png" className={classes.galleryimage1}></img>
                <img src="../../public/about3.png" className={classes.galleryimage2}></img>
                <img src="../../public/about4.png" className={classes.galleryimage3}></img>
                <img src="../../public/about5.png" className={classes.galleryimage4}></img>
                <img src="../../public/about6.png" className={classes.galleryimage5}></img>
            </div>

        </div>
    )
}
