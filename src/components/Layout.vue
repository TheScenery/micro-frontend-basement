<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">乾坤微前端演示系统</el-header>
            <el-container>
                <el-aside width="200px" class="aside">
                    <el-menu class="menu">
                        <el-menu-item class="menu-item">
                            <router-link to="/main">
                                首页
                            </router-link>
                        </el-menu-item>
                        <el-menu-item class="menu-item">
                            <router-link to="/vue">
                                Vue 微应用
                            </router-link>
                        </el-menu-item>
                        <el-menu-item class="menu-item">
                            <router-link to="/react">
                                React 微应用
                            </router-link>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'BaseLayout',
}
</script>
<style scoped>
.header {
    background-color: #003d4f;
    display: flex;
    align-items: center;
    color: white;
    font-size: 24px;
}

.aside {
    background-color: #003d4f;
    color: white;
}

.menu {
    background-color: #003d4f;
    border-right: none;
}

.menu-item a {
    color: #f2617a;
    font-size: 20px;
}

.main {
    padding: 0;
    height: calc(100vh - 60px);
}
</style>