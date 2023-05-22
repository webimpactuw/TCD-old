import classes from './About.module.css';

export default function About() {
    return (
        <div>
            <div className={classes.intro}>
                <img src="../../public/about1.png"></img>
                <div className={classes.introtext}>
                    <h5>TCD @ UW</h5>
                    <p>-- aims to spread Chinese culture in the greater Seattle area through events like performances and workshops</p>
                </div>
            </div>
            <div className={classes.interest}>           
                <p className={classes.contact}>To get in touch with us, email tcduw@uw.edu or check out our Interest Form and Remind</p>
                <button className={classes.btn1}>Interest Form</button>
                <button className={classes.btn2}>Remind</button>
            </div>
            <div className={classes.gallery}>
                <h3>Gallery</h3>
                <p>test</p>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
        </div>
    )
}
