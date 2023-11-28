<template>
    <div class="custom_component">
        <div class="custom_carousel">
            <el-carousel :interval="5000" arrow="always" height="auto">
                <el-carousel-item v-for="item in imageCarousel" :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', boxShadow: 'inset 0 -200px 150px 0 rgba(0,0,0,0.9)' }" :key="item" style="height: 500px">
                    <div style="width: 90%; margin: 300px auto 0 auto">
                        <p class="watch-docs_p">{{ item.title }}</p>
                        <div style="width: 57%; color: white; margin-top: 3px">
                            <p>{{ limitText(item.desc, 120)  }}</p>
                        </div>
                        <div style="display: flex; margin-top: 20px">
                            <div class="main_title" style="cursor: pointer">
                                Смотреть прям сейчас
                            </div>
                            <div style="color: white; font-size: 24px; margin-left: auto">
                                <span>★{{ item.rating }}</span>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block_content">
            <div class="title_content">
                <div class="title">Сейчас смотрят ›</div>
            </div>
            <div class="film_content">
                <carousel :items-to-show="3" :wrap-around="true">
                    <slide v-for="film in filmContent" :key="film.id">
                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">
                            <div class="film_rating">
                                ★ {{ film.rating }}
                            </div>
                            <div class="film_info">

                                <div class="film_title">
                                    {{ limitText(film.title, 30) }}
                                </div>
                                <div class="film_genre">
                                    {{ film.genre }}
                                </div>
                            </div>

                            <div style="z-index: 4; position: absolute">
                                <img style="width: 80px" src="/assets/icons/play-icon2.png" alt="img" >
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
        <div class="block_content block_next">
            <div class="title_content">
                <div class="title">Фильмы 2023 ›</div>
            </div>
            <div class="film_content">
                <carousel :items-to-show="3" :wrap-around="true">
                    <slide v-for="film in filmContent" :key="film.id">
                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">
                            <div class="film_rating">
                                ★ {{ film.rating }}
                            </div>
                            <div class="film_info">

                                <div class="film_title">
                                    {{ limitText(film.title, 30) }}
                                </div>
                                <div class="film_genre">
                                    {{ film.genre }}
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
        <div class="block_content block_next">
            <div class="title_content">
                <div class="title">Сериалы ›</div>
            </div>
            <div class="film_content">
                <carousel :items-to-show="3" :wrap-around="true">
                    <slide v-for="film in filmContent" :key="film.id">
                        <div class="carousel__item" :style="{ backgroundImage: 'url(' + film.img + ')'}">
                            <div class="film_rating">
                                ★ {{ film.rating }}
                            </div>
                            <div class="film_info">
                                <div class="film_title">
                                    {{ limitText(film.title, 30) }}
                                </div>
                                <div class="film_genre">
                                    {{ film.genre }}
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
    </div>
</template>


<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
                    img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg',
                    desc: 'Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.'
                },
            ],
            filmContent: [
                {id: 1, title: 'Однажды в... Голливуде', img: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/01/31/11/42/29/3291cff40cd7.jpg', genre: 'Комедия, Драмма, Криминал', rating: '7.1'},
                {id: 2, title: 'Опенгеймер', img: 'https://www.soyuz.ru/public/uploads/files/2/7615111/20221213143838dcb474c808.jpg', genre: 'Драмма, Исторический фильм', rating: '9.2'},
                {id: 3, title: 'Миссия невыполнима: Смертельная расплата. Часть первая', img: 'https://gamemag.ru/images/cache/News/News182279/202fdb226b-2_1390x600.jpg', genre: 'Комедия, Драмма, Криминал', rating: '6.1'},
                {id: 4, title: 'Локи', img: 'https://cybersport.metaratings.ru/storage/images/37/be/37be15421c614ed043cf9731843cb2b4.jpg', genre: 'Комедия, Драмма', rating: '8.6'},
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
        limitText(text, maxLength) {
            if (text.length > maxLength)
                return text.slice(0, maxLength) + '...';
            return text;
        }
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
    background: url('https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/01/31/11/42/29/3291cff40cd7.jpg') no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: inset 0 -47px 55px 0 rgba(0,0,0,0.9);
}

.film_content .carousel__item:hover {
    filter: blur(4px);
}

.film_content .carousel__slide {
    padding: 0 5px;

}

.film_content .carousel__prev {
    left: -50px;
}

.film_content .carousel__next {
    right: -50px;
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
