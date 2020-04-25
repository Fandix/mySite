/*
    name : index
    Date : 2020/04/25
    description : 首頁頁面
    contain : 個人簡介,作品列保
*/

import React from "react";
import styles from "./home.module.scss"
import WorkList from "../../components/WorkList/index"
import worksData from "../../works.json"

const HomePage = (props) => {

    return(
        <div className={ styles.wrap }>

        {/***************** 個人簡介 *******************/}
            <section className={styles.brief}>
                {/*------- 大頭貼 -------*/}
                <img src={ require("../../assets/img/Meself.jpg") } alt="myself" />
                {/*------- 姓名 -------*/}
                <h2>Fandix Huang</h2>
                {/*------- 職業 -------*/}
                <ul>
                    <li>Application Engineer</li>
                    <li>Front-end Engineer</li>
                </ul>
                {/*------- 介紹 -------*/}
                <p>Hi I'm Fandix I'm learning technology in Front-end</p>
                <p>I'm very passionate about coding Web </p>
                <p>so I really want to be a Front-end Engineer</p>
            </section>
        {/***************** 作品列表 *******************/}
            <section className={ styles.work }>
                {/*------- 簡介 -------*/}
                <div className={ styles.title }>
                    <h3>A Selection of Work</h3>
                    <p>You can find more in the work overview.</p>
                </div>
                {/*------- 作品 -------*/}
                <WorkList dataSource={ worksData.data }/>


            </section>

        </div>
    )
};

export default HomePage;