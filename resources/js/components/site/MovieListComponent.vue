<template>
    <div class="header_path" style="margin-bottom: 20px">
        <router-link :to="{path: '/'}">Kino Storage</router-link>
        /
        <router-link :to="{name: 'films'}" style="color: #989898">Фильмы</router-link>
    </div>
    <div class="block_content">
        <div class="title_content">
            <div class="title">Фильмы</div>
        </div>
        <div>
            <el-tag
                v-for="tag in tags"
                :key="tag.id"
                closable
                effect="plain"
                type="warning"
            >
                {{ tag.name }}
            </el-tag>
        </div>
        <div class="filter_content">
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-select v-model="value" class="custom_select_filter" placeholder="Годы" size="large">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="value" class="custom_select_filter" placeholder="Жанры" size="large">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="value" class="custom_select_filter" placeholder="Страны" size="large">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                    <!--                        <el-input v-model="input" placeholder="Страны" />-->
                </el-col>
            </el-row>
        </div>
        <div class="movies_content">
            <div class="movie_item" v-for="movie in moviesList">
                <div class="movie_block" :style="{ backgroundImage: 'url(' + movie.img + ')'}">
                    <div class="film_rating">
                        ★ {{ movie.rating }}
                    </div>
                    <div class="film_info">
                        <div class="film_title">
                            {{ limitText(movie.title, 30) }}
                        </div>
                        <div class="film_genre">
                            {{ movie.genre }}
                        </div>
                    </div>
                </div>
                <img class="movie_play" src="/assets/icons/play-icon2.png" alt="img">
            </div>
        </div>
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="50"
            class="mt-4"
        />
    </div>
</template>

<script>
import limitText from '../../functions/text.js';

export default {
    name: "MovieListComponent",
    props: ['movieRoute'],
    data() {
        return {
            size: 'large',
            searchInput: '',
            input: '',
            value: '',
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
            ],
            tags: [
                {id: 1, name: "Зарубежные"},
                {id: 2, name: "Зарубежные"},
                {id: 3, name: "Зарубежные"}
            ],
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ]
        }
    },
    methods: {
        limitText,
    }
}

</script>

<style lang="scss">
//.filter_content .el-input__wrapper.is-focus,
//.filter_content .el-select .el-input__wrapper {
//    box-shadow: none;
//}

.custom_select_filter:hover {
    box-shadow: none;
}
</style>
