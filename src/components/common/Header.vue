<template>
    <div id="header" class="header">
        <!-- 博客名称 和导航 -->
        <div class="menu-primary-container">
            <!-- name -->
            <div class="main-blog-name">
                <a href="/"><h2>叶落归根</h2></a><p style="margin-top:2px">左手代码右手诗</p>
            </div>
            <!-- navbar -->
            <div class="menu-nav">
                <Menu mode="horizontal" :theme="dark" active-name="2">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    主页
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        PHP
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">源码分析</MenuItem>
                        <MenuItem name="3-2">扩展详解</MenuItem>
                        <MenuItem name="3-3">性能调优</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    JS/CSS
                </MenuItem>
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    留言
                </MenuItem>
            </Menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "header"
};
</script>
<style>
.header {
    height: 260px;
    background: #333333;
    /* border: 1px solid red; */
}
.menu-primary-container{
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
}
.menu-primary-container .menu-nav{
    padding-top: 25px;
}
</style>


