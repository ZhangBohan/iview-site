<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
        </Menu>
        <div class="layout-content main">
            <Row>
                <Col span="6" offset="9">
                    <div class="layout-logo-main"></div>
                </Col>
                <Col span="24">
                    <div class="search">
                        <Input v-model="searchText">
                            <Select v-model="searchEngine" slot="prepend" style="width: 80px">
                                <Option value="baidu">百度</Option>
                                <Option value="google">Google</Option>
                                <Option value="yahoo">Yahoo</Option>
                            </Select>
                            <Button slot="append" icon="ios-search"></Button>
                        </Input>  
                    </div>     
                </Col>
                <Col span="8" v-for="board in boards">
                    <div class="board">{{ board.text }}</div>
                </Col>
            </Row>
        </div>
        <copy-right></copy-right>
    </div>
</template>
<script>
  import CopyRight from '@/components/CopyRight'
  export default {
    name: 'index',
    components: {CopyRight},
    data () {
      return {
        searchText: '',
        searchEngine: 'baidu',
        boards: [
            {text: '我的情报体系'},
            {text: '大家的情报体系'},
            {text: '蚁工部落'},
            {text: '技能共享'},
            {text: '图书馆'},
            {text: '各家之言'}
        ]
      }
    }
  }
</script>
<style scoped>
    .main {
        padding: 0 300px;
    }
    .board {
        padding: 100px;
        background-color: #3399ff;
        margin: 20px;
        color: #fff;
        font-size: 16px;
        font-weight: bolder;
    }

    .search {
        margin: 0 20px 100px 20px;
    }
</style>
