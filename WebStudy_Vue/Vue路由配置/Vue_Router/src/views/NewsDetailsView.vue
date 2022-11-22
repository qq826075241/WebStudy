<template>
    <div class="about">
      <h3>这是{{ $route.params.name }}新闻详情页面</h3>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  