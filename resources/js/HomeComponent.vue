<template>
    <div>
        <div class="block_content bottom-block-with-posts">
            <div class="title_content">
                <div class="title">Свежие новости ›</div>
            </div>
            <div class="news_level-1_content">
                <div class="latest-post-big">
                    <img src="https://cs13.pikabu.ru/post_img/big/2020/06/09/3/1591669581153465231.jpg" alt="">
                    <div class="title-post-big title-post">
                        <router-link :to="{name: 'posts.show-post'}">Бегущий по лезвию 2049</router-link>
                    </div>
                    <div class="info-post info-post-big">
                        <div class="author-post">Глеб Шалыгин</div>
                        <div class="date-post">/ 24.01.2024</div>
                        <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>27</span></div>
                        <div></div>
                    </div>
                    <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                    <div class="content-post-big content-post">
                        Мы уже посмотрели «Бегущего по лезвию 2049» и хотим обсудить то, что увидели.
                        Текста будет много, это подробный пересказ всего фильма, так что ниже следует один огромный спойлер
                        <a class="read-post" href="#">читать...</a>
                    </div>
                </div>
                <div class="latest-post-feed-blocks">
                    <div class="latest-post-feed">
                        <img src="https://www.m24.ru/b/d/nBkSUhL2hFQnn8a2IL6BrNOp2Z318Ji-mijFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=6Wg0_SQsnCB0LcjTJrYu1A.jpg" alt="">
                        <div class="title-post-feed title-post">Джентельмены</div>
                        <div class="info-post-feed info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>268</span></div>
                        </div>
                        <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                    </div>
                    <div class="latest-post-feed next-latest-post-feed">
                        <img src="https://www.film.ru/sites/default/files/styles/epsa_685x385/public/trailers_frame/1565293923-955508363-haker-1.jpg" alt="">
                        <div class="title-post-feed title-post">Хакер</div>
                        <div class="info-post-feed info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>75</span></div>
                        </div>
                        <div class="genre-post">#ДРАММА</div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="content-hr" />
        <div class="block_content top-block-with-posts bottom-block-with-posts">
            <div class="title_content">
                <div class="title">Сейчас читают ›</div>
            </div>

            <div class="film_content">
                <carousel :items-to-show="3" :wrap-around="true">
                    <slide v-for="film in filmContent" :key="film.id">
                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">

                            <div class="film-view"><el-icon color="black"><View /></el-icon><span>75</span></div>
                            <div class="film_info">

                                <div class="film_title">
                                    {{ limitText(film.title, 30) }}
                                </div>
                                <div class="film_genre_and_date">
                                    <div class="author-post">Глеб Шалыгин</div>
                                    <div class="film_date">12.01.2024</div>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </div>
        </div>
        <hr class="content-hr" />


        <div class="block_content top-block-with-posts bottom-block-with-posts">
            <div class="title_content">
                <div class="title">Аниме ›</div>
            </div>
            <div class="news_level-2_content">
                <div class="post-feed-list">
                    <div class="image-for-post-list">
                        <img src="https://media.2x2tv.ru/content/images/2021/02/howlosn-1.jpg" alt="">
                    </div>
                    <div class="content-for-post-list">
                        <div class="title-post-list title-post">
                            Ходячий замок
                        </div>
                        <div class="info-post-list info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>27</span></div>
                        </div>
                        <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                        <div class="content-post-big content-post">
                            Злая ведьма заточила 18-летнюю Софи в тело старухи. В поисках того, кто поможет ей вернуться к своему облику,
                            Софи знакомится с могущественным волшебником Хаулом и его демоном Кальцифером.
                            Кальцифер должен служить Хаулу по договору, условия которого он не может разглашать. Девушка и демон решают помочь друг другу избавиться от злых чар
                            <a class="read-post" href="#">читать...</a>
                        </div>
                    </div>
                </div>
                <div class="post-feed-list">
                    <div class="image-for-post-list">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/f/fe/Dn_l_lawliet.jpg" alt="">
                    </div>
                    <div class="content-for-post-list">
                        <div class="title-post-list title-post">
                            Тетрадь смерти
                        </div>
                        <div class="info-post-list info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>27</span></div>
                        </div>
                        <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                        <div class="content-post-big content-post">
                            Тетрадь смерти — этo оружие, способное убивать людей на расстоянии. При этом не имеет значения, где находится тот, кто её использует, но ему необходимо знать имя и лицо жертвы.
                            Тетрадь смерти — вещь, принадлежащая первоначально богам смерти
                            <a class="read-post" href="#">читать...</a>
                        </div>
                    </div>
                </div>
                <div class="post-feed-list">
                    <div class="image-for-post-list">
                        <img src="https://masterpiecer-images.s3.yandex.net/63b258c7904611eea622f6744ca365da:upscaled" alt="">
                    </div>
                    <div class="content-for-post-list">
                        <div class="title-post-list title-post">
                            Наруто
                        </div>
                        <div class="info-post-list info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>27</span></div>
                        </div>
                        <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                        <div class="content-post-big content-post">
                            Однажды демон напал на деревню, в которой родился мальчик Наруто. Чтобы остановить демона, глава поселения запечатал его внутри Наруто, но сам при этом погиб. Прошли годы. Наруто вырос, став гиперактивным и очень тупым ниндзя.
                            Он всё ещё живёт в родной деревне, где его не особо любят и стараются избегать.
                            <a class="read-post" href="#">читать...</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <hr class="content-hr" />
        <div class="block_content top-block-with-posts">
            <div class="title_content">
                <div class="title">Ваши рекомендации ›</div>
            </div>
            <div class="news_level-1_content">
                <div class="latest-post-big">
                    <img src="https://cs13.pikabu.ru/post_img/big/2020/06/09/3/1591669581153465231.jpg" alt="">
                    <div class="title-post-big title-post">Бегущий по лезвию 2049</div>
                    <div class="info-post info-post-big">
                        <div class="author-post">Глеб Шалыгин</div>
                        <div class="date-post">/ 24.01.2024</div>
                        <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>27</span></div>
                    </div>
                    <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                    <div class="content-post-big content-post">
                        Мы уже посмотрели «Бегущего по лезвию 2049» и хотим обсудить то, что увидели.
                        Текста будет много, это подробный пересказ всего фильма, так что ниже следует один огромный спойлер
                        <a class="read-post" href="#">читать...</a>
                    </div>
                </div>
                <div class="latest-post-feed-blocks">
                    <div class="latest-post-feed">
                        <img src="https://www.m24.ru/b/d/nBkSUhL2hFQnn8a2IL6BrNOp2Z318Ji-mijFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=6Wg0_SQsnCB0LcjTJrYu1A.jpg" alt="">
                        <div class="title-post-feed title-post">Джентельмены</div>
                        <div class="info-post-feed info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>268</span></div>
                        </div>
                        <div class="genre-post">#БОЕВИК, #КОМЕДИЯ</div>
                    </div>
                    <div class="latest-post-feed next-latest-post-feed">
                        <img src="https://www.film.ru/sites/default/files/styles/epsa_685x385/public/trailers_frame/1565293923-955508363-haker-1.jpg" alt="">
                        <div class="title-post-feed title-post">Хакер</div>
                        <div class="info-post-feed info-post">
                            <div class="author-post">Глеб Шалыгин</div>
                            <div class="date-post">/ 24.01.2024</div>
                            <div class="views-post"><el-icon color="#adadad"><View /></el-icon><span>75</span></div>
                        </div>
                        <div class="genre-post">#ДРАММА</div>
                    </div>
                </div>
            </div>
        </div>

        <!--        <div class="block_content block_next">-->
<!--            <div class="title_content">-->
<!--                <div class="title">Фильмы 2023 ›</div>-->
<!--            </div>-->
<!--            <div class="film_content">-->
<!--                <carousel :items-to-show="3" :wrap-around="true">-->
<!--                    <slide v-for="film in filmContent" :key="film.id">-->
<!--                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">-->
<!--                            <div class="film_rating">-->
<!--                                ★ {{ film.rating }}-->
<!--                            </div>-->
<!--                            <div class="film_info">-->

<!--                                <div class="film_title">-->
<!--                                    {{ limitText(film.title, 30) }}-->
<!--                                </div>-->
<!--                                <div class="film_genre">-->
<!--                                    {{ film.genre }}-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <img class="film_play" src="/assets/icons/play-icon2.png" alt="img">-->
<!--                    </slide>-->

<!--                    <template #addons>-->
<!--                        <navigation />-->
<!--                        <pagination />-->
<!--                    </template>-->
<!--                </carousel>-->
<!--            </div>-->
<!--        </div>-->
<!--       <div class="block_content block_next">-->
<!--            <div class="title_content">-->
<!--                <div class="title">Сериалы ›</div>-->
<!--            </div>-->
<!--            <div class="film_content">-->
<!--                <carousel :items-to-show="2" :wrap-around="true">-->
<!--                    <slide v-for="film in filmContent" :key="film.id">-->
<!--                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">-->
<!--                            <div class="film_rating">-->
<!--                                ★ {{ film.rating }}-->
<!--                            </div>-->
<!--                            <div class="film_info">-->
<!--                                <div class="film_title">-->
<!--                                    {{ limitText(film.title, 30) }}-->
<!--                                </div>-->
<!--                                <div class="film_genre">-->
<!--                                    {{ film.genre }}-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <img class="film_play" src="/assets/icons/play-icon2.png" alt="img">-->
<!--                    </slide>-->

<!--                    <template #addons>-->
<!--                        <navigation />-->
<!--                        <pagination />-->
<!--                    </template>-->
<!--                </carousel>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="block_content block_next">-->
<!--            <div class="title_content">-->
<!--                <div class="title">О сайте ›</div>-->
<!--            </div>-->
<!--            <div class="desc_content">-->
<!--                    На нашем сайте вы найдете широкий выбор фильмов различных жанров, включая драмы, комедии, фантастику, ужасы и многое другое. У нас есть как классические киноленты, так и новинки, которые только вышли на большие экраны. <br />-->
<!--                    <br />-->
<!--                    Вы можете использовать наш удобный поиск, чтобы найти фильмы по названию, актерам, режиссерам или ключевым словам. Кроме того, мы предоставляем подробную информацию о каждом фильме, включая описание сюжета, трейлеры, рейтинги, отзывы пользователей и многое другое. <br />-->
<!--                    <br />-->
<!--                    Если вы зарегистрируетесь на нашем сайте, вы сможете создавать свой список любимых фильмов, оставлять свои оценки и отзывы, а также обмениваться рекомендациями с другими пользователями. Мы также предлагаем персонализированные рекомендации на основе ваших предпочтений и просмотренных фильмов.-->
<!--                    Мы постоянно обновляем нашу коллекцию фильмов, чтобы вы всегда могли найти что-то интересное для просмотра. Также не забудьте следить за нашими новостями и акциями, чтобы быть в курсе последних событий в мире кино. <br />-->
<!--                    <br />-->
<!--                    Мы надеемся, что наш сайт станет вашим надежным проводником в мире кино и поможет вам насладиться просмотром ваших любимых фильмов. Приятного просмотра!<br />-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>


<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import limitText from './functions/text.js';

export default {
    name: 'HomeComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            imageCarousel: [
                {
                    id: 1,
                    title: 'Однажды в… Голливуде',
                    rating: '7.1',
                    img: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/01/31/11/42/29/3291cff40cd7.jpg',
                    desc: '1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'
                },
                {
                    id: 2,
                    title: 'Опенгеймер',
                    rating: '9.2',
                    img: 'https://www.soyuz.ru/public/uploads/files/2/7615111/20221213143838dcb474c808.jpg',
                    desc: 'История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.'
                },
                {
                    id: 3,
                    title: 'Миссия невыполнима: Смертельная расплата. Часть первая',
                    rating: '6.1',
                    img: 'https://gamemag.ru/images/cache/News/News182279/202fdb226b-2_1390x600.jpg',
                    desc: 'Итан Хант и его команда противостоят системе искусственного интеллекта Entity, которая вышла из под контроля и стала угрозой человечества.'
                },
                {
                    id: 4,
                    title: 'Локи',
                    rating: '8.6',
                    img: 'https://icdn.lenta.ru/images/2021/06/07/14/20210607142955461/square_1280_288138855a8161810c8e6cb9b3920ba4.jpg',
                    desc: 'Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.'
                },
            ],
            filmContent: [
                {id: 1, title: 'Однажды в... Голливуде', img: 'https://s0.rbk.ru/v6_top_pics/media/img/3/62/755653377545623.jpg', genre: 'КОМЕДИЯ, КРИМИНАЛ', rating: '7.1'},
                {id: 2, title: 'Опенгеймер', img: 'https://cdnstatic.rg.ru/uploads/images/2023/08/24/killi_8c1_159_d61_1eb.jpg', genre: 'ДРАММА, ИСТОРИЧЕСКИЙ ФИЛЬМ', rating: '9.2'},
                {id: 3, title: 'Миссия невыполнима: Смертельная расплата. Часть первая', img: 'https://mainstyles.ru/uploads/material/Mission-Impossible-7-Premiere-Rome-00-Mainstyle.jpg', genre: 'КОМЕДИЯ, КРИМИНАЛ', rating: '6.1'},
                {id: 4, title: 'Бог или враг?', img: 'https://icdn.lenta.ru/images/2021/06/07/14/20210607142955461/square_1280_288138855a8161810c8e6cb9b3920ba4.jpg', genre: 'КОМЕДИЯ, ДРАММА', rating: '8.6'},
            ],
            items: [
                { image: 'img-1.jpg', caption: 'Слайд 1' },
                { image: 'img-2.jpg', caption: 'Слайд 2' },
                { image: 'img-8.jpg', caption: 'Слайд 3' },
                { image: 'img-8.jpg', caption: 'Слайд 3' },
                { image: 'img-8.jpg', caption: 'Слайд 3' },
                { image: 'img-8.jpg', caption: 'Слайд 3' },
                { image: 'img-8.jpg', caption: 'Слайд 3' },
            ],
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
            },
            currentIndex: 0,
        }
    },
    methods: {
        limitText,
    }
}

</script>

<style>
.film_content .carousel__pagination {
    display: none;
}

.film_content .carousel__item {
    min-height: 200px;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: inset 0 -47px 55px 0 rgba(0,0,0,0.9);
}


.film_content .carousel__slide {
    padding: 0 5px;

}

.film_content .carousel__prev {
    left: -30px;
}

.film_content .carousel__next {
    right: -30px;
}
</style>

<!--//.film_content .carousel__item {-->
<!--//    min-height: 200px;-->
<!--//    width: 100%;-->
<!--//    background-color: var(&#45;&#45;vc-clr-primary);-->
<!--//    color: var(&#45;&#45;vc-clr-white);-->
<!--//    font-size: 20px;-->
<!--//    border-radius: 8px;-->
<!--//    display: flex;-->
<!--//    justify-content: center;-->
<!--//    align-items: center;-->
<!--//}-->
