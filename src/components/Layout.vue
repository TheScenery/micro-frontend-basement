<template>
    <div class="common-layout">
        <el-container>
            <el-header>乾坤微前端演示系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu>
                        <el-menu-item>
                            <router-link to="/main">
                                首页
                            </router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/vue">
                                Vue 微应用
                            </router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/react">
                                React 微应用
                            </router-link>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
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