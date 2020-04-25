/*
    name : index
    Date : 2020/04/25
    description : 作品頁面組件
*/

import React from "react";
import style from "./work.module.scss"
import {Link} from "react-router-dom"

const WorkList = ({dataSource}) => {

    return(
        <div className={ style.worklist }>
            <ul>
                {
                    dataSource && dataSource.map(item => 
                        <li>
                            <Link to={`/works/${item.id}`}>
                                {/* ----- 左邊圖片 ----- */}
                                <div className={ style.cover }>
                                    <img src={ item.cover } alt="img" />
                                </div>
                                 {/* ----- 右邊內容 ----- */}
                                <div className = {style.workbrief}>
                                    {/* --- 標題 --- */}
                                    <h3>{ item.title }</h3>
                                    {/* --- 簡介 --- */}
                                    <p>{ item.brief }</p>
                                    {/* --- 作品使用的技能 --- */}
                                    <div className={style.tags}>
                                        {item.tags && item.tags.map(i => 
                                          <span key={i}>{i}</span>      
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WorkList;