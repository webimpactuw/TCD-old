import classes from './About.module.css';

export default function About() {
    return (
        <div>
            <div className={classes.intro}>
                <img src="../../public/about1.png"></img>
                <h1>test</h1>
                <h2>test</h2>
            </div>
            <div>           
                <h2>test</h2>
                <button>Interest Form</button>
                <button>Remind</button>
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
