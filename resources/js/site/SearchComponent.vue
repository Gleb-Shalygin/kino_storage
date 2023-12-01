<template>
    <div>
        <div class="header_path" style="margin-bottom: 20px">
            <a href="/">Kino Storage</a> / <a :href="searchRoute" style="color: #989898">Поиск</a>
        </div>
        <div class="block_content">
            <div class="title_content">
                <div class="title">Поиск фильмов и сериалов</div>
            </div>

            <div class="search_content">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.user" placeholder="Approved by" clearable />
                    </el-form-item>
                    <el-form-item label="Activity zone">
                        <el-select
                            v-model="formInline.region"
                            placeholder="Activity zone"
                            clearable
                        >
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Activity time">
                        <el-date-picker
                            v-model="formInline.date"
                            type="date"
                            placeholder="Pick a date"
                            clearable
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Query</el-button>
                    </el-form-item>
                </el-form>
<!--                <div style="width: 30%">-->
<!--                    <el-select v-model="value" class="custom_input" placeholder="Жанры">-->
<!--                        <el-option-->
<!--                            v-for="item in options"-->
<!--                            :key="item.value"-->
<!--                            :label="item.label"-->
<!--                            :value="item.value"-->
<!--                            :disabled="item.disabled"-->
<!--                        />-->
<!--                    </el-select>-->
<!--                </div>-->
<!--                <div style="width: 30%">-->
<!--                    <el-select v-model="value" class="custom_input" placeholder="Жанры">-->
<!--                        <el-option-->
<!--                            v-for="item in options"-->
<!--                            :key="item.value"-->
<!--                            :label="item.label"-->
<!--                            :value="item.value"-->
<!--                            :disabled="item.disabled"-->
<!--                        />-->
<!--                    </el-select>-->
<!--                </div>-->
<!--                <el-input class="custom_input" v-model="input" placeholder="Please input" />-->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['searchRoute'],
    data() {
        return {
            value: null,
            formInline: {
                user: '',
                region: '',
                date: '',
            },
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                    disabled: true,
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
            ],
            inputSearch: ''
        }
    }
}
</script>


<style scoped>

</style>
