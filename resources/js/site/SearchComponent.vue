<template>
    <div class="block_content">
        <div class="title_content">
            <div class="title">Поиск статьи</div>
        </div>

        <div class="search_content">
            <el-input v-model="searchInput" :size="size" class="custom_input" placeholder="ПОИСК" style="margin-right: 10px"/>
            <el-button color="#fdf006" :size="size" style="padding: 6px 15px;font-size: 21px;" >НАЙТИ</el-button>
        </div>
<!--        <div class="movies_content">-->
<!--            <div class="movie_item" v-for="movie in moviesList">-->
<!--                <div class="movie_block" :style="{ backgroundImage: 'url(' + movie.img + ')'}">-->
<!--                    <div class="film_rating">-->
<!--                        ★ {{ movie.rating }}-->
<!--                    </div>-->
<!--                    <div class="film_info">-->
<!--                        <div class="film_title">-->
<!--                            {{ limitText(movie.title, 30) }}-->
<!--                        </div>-->
<!--                        <div class="film_genre">-->
<!--                            {{ movie.genre }}-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <img class="movie_play" src="/assets/icons/play-icon2.png" alt="img">-->
<!--            </div>-->
<!--        </div>-->
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
        </div>
    </div>
</template>

<script>
import limitText from '../functions/text.js';

export default  {
    props: ['searchRoute'],
    data() {
        return {
            size: 'large',
            searchInput: '',
            moviesList: [
                {id: 1, title: 'Однажды в... Голливуде', img: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/01/31/11/42/29/3291cff40cd7.jpg', genre: 'Комедия, Драмма, Криминал', rating: '7.1'},
                {id: 2, title: 'Опенгеймер', img: 'https://www.soyuz.ru/public/uploads/files/2/7615111/20221213143838dcb474c808.jpg', genre: 'Драмма, Исторический фильм', rating: '9.2'},
                {id: 3, title: 'Миссия невыполнима: Смертельная расплата. Часть первая', img: 'https://gamemag.ru/images/cache/News/News182279/202fdb226b-2_1390x600.jpg', genre: 'Комедия, Драмма, Криминал', rating: '6.1'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
            ]
        }
    },
    methods: {
        limitText,
    }
}
</script>


<style scoped>

</style>
