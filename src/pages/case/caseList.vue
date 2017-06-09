<template>
    <div class="list-wrap">
        <div class="tabel-condition">
            <input type="text" v-model="key_word" class="key-word">
             <select v-model="key_select" class="select">
                <option value="case_id">案件编号</option>
                <option value="case_name">案件名称</option>
                <option value="case_desc">案件描述</option>
                <option value="case_place">案发地点</option>
                <option value="case_time">案发时间</option>
            </select> 
            <!--<v-selection :selections="caseTypes" @on-change="onParamChange('caseType', $event)"></v-selection>-->
            <button class="check-btn" @click="getCaseList">查询</button>
            <span class="date-picker"> 
                <datepicker language="zh" v-model="date" format="yyyy-MM-dd"></datepicker>
            </span>
        </div>
       <Table :columns="caseTypes" :data="data1" ></Table>
        <div class="list-page">
            <Page :total="total" :page-size="page_size" :current="page_index" @on-change="changePage"></Page>
        </div>
    </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker'
    // import VSelection from '../components/selection'
    export default {
        data () {
            return {
                key_select: 'case_id',
                key_word: '',
                page_index: 1, // 当前页数
                page_size: 5, // 每页的条数
                total: 0, // 总页数
                date: new Date(2016, 9, 16),
                caseTypes: [
                    {
                        title: '案件编号',
                        key: 'case_id',
                        sortable: true,
                        value: 0
                    },
                    {
                        title: '案件名称',
                        key: 'case_name',
                        value: 1
                    },
                    {
                        title: '案件描述',
                        key: 'case_desc',
                        sortable: true,
                        value: 2
                    },
                    {
                        title: '案发地点',
                        key: 'case_place',
                        value: 3
                    },
                    {
                        title: '案发时间',
                        key: 'case_time',
                        value: 4
                    }
                ],
                data1: [],
                caseType: {}
            }
        },
        mounted () {
            this.getCaseList()
            this.buyType = this.buyTypes[0]
        },
        methods: {
            onParamChange (attr, val) {
                this[attr] = val
                console.log(attr, this[attr])
            },
            getCaseList () {
                var self = this
                this.$http.get('/api/case_list',{
                    params:{
                        page_size: this.page_size,
                        page: this.page_index,
                        key: this.key_word,
                        select:this.key_select
                    }
                })
                .then(function (res){
                    self.data1 = res.data.data
                    self.total = res.data.total
                    self.page_index = res.data.page_index
                    console.log('data',res.data.data)
                    })
                .catch(function(err){
                    console.log(err)
                })
            },
            changePage (index) {
                this.page_index = index
                this.getCaseList()
            }
        },
        components: {
            Datepicker
        }
    }
</script>

<style lang="css" scoped>
 @import '../../assets/css/iview.css';
 .list-wrap{
     width: 720px;
     margin: auto;
 }
 .ivu-table-wrapper{
    width: 100%;
    margin-top: 10px;
 }
 .list-page{
     width: 100%;
     margin-top: 10px;
 }
 .ivu-table td{
    height: 40px;
}
.tabel-condition{
    margin-top: 30px;
}
.key-word{
    vertical-align: middle;
}
.select{
    vertical-align: middle;
    margin-left: 15px;
}
.check-btn{
    width: 40px;
    height: 20px;
    margin-left: 15px;
    vertical-align: middle;
}
.date-picker{
    display: inline-block;
    vertical-align: middle;
    margin-left: 50px;
}
</style>