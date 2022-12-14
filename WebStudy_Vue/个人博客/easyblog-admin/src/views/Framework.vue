
<template>
  <div class="layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container class="container">
        <el-aside width="200px" class="left-aside">
          <div>
            <el-button class="post-btn">发布</el-button>
          </div>
          <div class="menu-panel">
            <ul>
              <li v-for="menu in menuList">
                <span class="menu-title-p">
                  <span :class="['iconfont', menu.icon]"></span>
                  <span class="menu-title">{{menu.title}}</span>
                  <span :class="['iconfont', 'open-close', menu.open?'icon-up':'icon-down']"></span>
                </span>
                <ul class="sub-menu">
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
import {ref} from "vue"

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

</script> 

<style lang="scss">
.layout {
  .header {
    border-bottom: 1px solid #ddd;
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
        ul,li {
          padding: 0px;
          margin: 0px;
          list-style: none;
        }

        .menu-title-p {
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
          }
        }

        .sub-menu {
          padding-left: 25px;
          font-size: 14px;

          .sub-menu-item {
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