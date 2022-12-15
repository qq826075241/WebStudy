
<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <div class="logo">Easyblog</div>
        <div class="user-info">
          <span>欢 迎 回 来，</span>
          <el-dropdown trigger="hover">
            <span class="nick-name">
              {{userInfo.nickName}}
              <span class="iconfont icon-down"></span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="avatar">
            <img :src="userInfo.avatar" alt="">
          </div>
        </div>
      </el-header>
      <el-container class="container">
        <el-aside width="200px" class="left-aside">
          <div>
            <el-button class="post-btn">发布</el-button>
          </div>
          <div class="menu-panel">
            <ul>
              <li v-for="(menu, index) in menuList">
                <span class="menu-title-p" @click="openClose(index)">
                  <span :class="['iconfont', menu.icon]"></span>
                  <span class="menu-title">{{menu.title}}</span>
                  <span :class="['iconfont', 'open-close', menu.open?'icon-up':'icon-down']"></span>
                </span>
                <ul class="sub-menu" v-show="menu.open">
                  <li v-for="subMenu in menu.children">
                    <span class="sub-menu-item">{{subMenu.title}}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-main class="right-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
 
<script setup>
import {getCurrentInstance, ref} from "vue"
import vueCookies from 'vue-cookies';

const { proxy } = getCurrentInstance();

const menuList = ref([
  {
    title: "博客",
    icon: "icon-blog",
    open: true,
    children: [
      {
        title: "博客管理",
        path: "/blog/list",
      },
      {
        title: "分类管理",
        path: "/blog/category",
      }
    ],
  },
  {
    title: "专题",
    icon: "icon-zhuanti",
    open: true,
    children: [
      {
        title: "专题管理",
        path: "/special/category",
      },
    ],
  },
  {
    title: "设置",
    icon: "icon-setting",
    open: true,
    children: [
      {
        title: "个人信息设置",
        path: "/setting/my",
      },
      {
        title: "博客成员",
        path: "/setting/user",
      },
      {
        title: "系统设置",
        path: "/setting/sysSetting",
        roleType: 1,
      }
    ],
  },
  {
    title: "回收站",
    icon: "icon-delete",
    open: true,
    children: [
      {
        title: "回收站",
        path: "/recovery/list",
      }
    ],
  }
]);

const openClose = (index) => {
  const open = menuList.value[index].open;
  menuList.value[index].open = !open;
}

const userInfo = ref({});
const init = () => {
  userInfo.value = vueCookies.get("userInfo");
  userInfo.value.avatar = proxy.globalInfo.imageUrl + userInfo.value.avatar;
  console.log("用户名是：" + userInfo.value.nickName + ",头像是：" + userInfo.value.avatar);
}
init();


</script> 

<style lang="scss">
.layout {
  .header {
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      flex: 1;
      font-size: 30px;
    }
    .user-info {
      display: flex;
      .nick-name {
        line-height: 24px;
        text-align: center;
        color: rgb(6, 143, 234);
        .icon-close {
          font-size: 14px;
        }
      }
      
      .avatar {
        width: 50px;
        border-radius: 25px;
        img {
          width: 100%;
  
        }
      }
    }
  }
  .container {
    padding: 10px;
    background: #f5f6f7;
    height: calc(100vh - 60px);

    .left-aside {
      padding: 0px 15px 0px 5px;
      width: 250px;

      .post-btn {
        background: green;
        color: #fff;
        height: 40px;
        width: 100%;
      }

      .menu-panel {
        margin-top: 5px;
        ul,li {
          padding: 0px;
          margin: 0px;
          list-style: none;
        }

        .menu-title-p {
          padding: 0px, 5px;
          line-height: 40px;
          cursor: pointer;
          display: flex;
          .iconfont {
            color: #91949a;
          }
          .menu-title {
            flex: 1;
            color: #3f4042;
            margin-left: 5px;
          }
          .open-close {
            width: 20px;
            font-size: 16px;
          }
        }

        .menu-title-p:hover {
          background: #ddd;
        }

        .sub-menu {
          padding-left: 25px;
          font-size: 14px;

          .sub-menu-item {  
            display: block;
            cursor: pointer;
            line-height: 30px;
          }
        }
      }
    }

    .right-main {
      background: #fff;
    }
  }
}
</style>