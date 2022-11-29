import React from "react";
import { NavLink } from "react-router-dom";
import s from './News.module.css';


const NewsItem = (props) => {
    return (
        <div className={s.button_wrap + ' ' + s.btn}>
            <NavLink to={'/News/' + props.id}>{props.name} </NavLink>
        </div>
    )
}

const Info = (props) => {
    return (
        <div className={s.info_text}>
            <a> {props.name}</a>
        </div>
    )
}


const Title = (props) => {
    return (
        <div className={s.info}>
            <a> {props.name} </a>
        </div>
    )
}

const News = () => {
    return (

        // Блочная новость страницы

        <div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://www.sostav.ru/app/public/images/news/2013/11/20/original/top.jpg'></img>
                    </div>
                    <Title name='Новости' />

                    {/* <InfoItem name = 'Текст статьи или новости' id = '1' />
                    <InfoItem name = 'Текст новостей' id = '2' />
                    <InfoItem name = 'Вывод' id = '3' /> */}

                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <NewsItem name='Подробнее' id='1' />
                </div>


            </div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://img2.akspic.ru/previews/2/9/0/9/6/169092/169092-sipuha-neyasyt-ptica-klyuv-naturalnyj_material-500x.jpg'></img>
                    </div>
                    <Title name='Новости' />
                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <NewsItem name='Подробнее' id='2' />
                </div>


            </div>
            <div className={s.News_wrapper}>
                <div className={s.News_block}>
                    <div className={s.News}>
                        <img src='https://rus-pic.ru/wp-content/uploads/2021/05/krasivye-kartinki-na-avu-40-foto-4ead6e3.jpg'></img>
                    </div>
                    <Title name='Новости' />
                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <Info name='Текст статьи или новости' />
                    <NewsItem name='Подробнее' id='3' />
                </div>


            </div>
        </div>

    )
}


export default News;