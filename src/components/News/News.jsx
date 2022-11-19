import React from "react";
import s from './News.module.css';



const News = () => {
    return (

        // Блочная новость страницы
        // const NewItem = (props) => {


        //     return <div className ={News + ' ' + }>
            
        //     </div>
        // }
        <div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://www.sostav.ru/app/public/images/news/2013/11/20/original/top.jpg'></img>
                    </div>
                    <div className={s.info}>
                        Новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.button_wrap}>
                        <a className={s.btn} href=''>Подробнее</a>


                    </div>
                </div>


            </div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://img2.akspic.ru/previews/2/9/0/9/6/169092/169092-sipuha-neyasyt-ptica-klyuv-naturalnyj_material-500x.jpg'></img>
                    </div>
                    <div className={s.info}>
                        Новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.button_wrap}>
                        <a className={s.btn} href=''>Подробнее</a>


                    </div>
                </div>


            </div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://rus-pic.ru/wp-content/uploads/2021/05/krasivye-kartinki-na-avu-40-foto-4ead6e3.jpg'></img>
                    </div>
                    <div className={s.info}>
                        Новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.info_text}>
                        Текст статьи или новости
                    </div>
                    <div className={s.button_wrap}>
                        <a className={s.btn} href=''>Подробнее</a>


                    </div>
                </div>


            </div>
        </div>

    )
}


export default News;