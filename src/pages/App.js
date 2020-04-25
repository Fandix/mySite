import React from "react";
import styles from "./App.module.scss";
import {Link,Route,withRouter} from "react-router-dom";
import HomePage from "./HomePage/index"
import WorkPage from "./WorkPage/index"
import WorkPageDetail from "./WorkPageDetail/index"

class APP extends React.Component
{
    render()
    {
        const {location} = this.props;
        
        return(
        <div className={styles.App}>

        {/************* Header *************/}
            <header className={styles.header}>
                <div className={styles.box}>
                    <Link to="/"><div className={styles.boxleft}>Vauxlab</div></Link>
                    <div className={styles.boxright}>
                        <Link to="/">
                            <p className={location.pathname === "/"?styles.selected:null}>HOME</p>
                        </Link>
                        <Link to="/works">
                            <p className={location.pathname === "/works"?styles.selected:null}>WORKS</p>
                        </Link>
                    </div>
                </div>
            </header>
        {/************* section *************/}
            <section className={styles.content}>
                <Route path = "/" exact  component = {HomePage}/>
                <Route path = "/works" exact component = {WorkPage}/>
                <Route path = "/works/:id" exact component = {WorkPageDetail}/>
            </section>
        {/************* footer *************/}
            <footer className={styles.footer}>
                <p>© <b>2020 Fandix Huang</b></p>
                <p>Handmade with</p>
            </footer>
        </div>
        )
    }
};

export default withRouter(APP);