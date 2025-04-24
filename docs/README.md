---
pageLayout: home
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      tagline: caobaoqi`s docs
      text: 纵有疾风起，人生不言弃
      actions:
        -
          theme: brand
          text: 快速开始 →
          link: /blog/
        -
          theme: alt
          text: Github
          link: https://github.com/caobaoqi1024/docs-template-plume
  -
    type: custom
---

<div style="max-width: 960px;margin:0 auto;" class="home-custom-content">

## repo

<CardGrid>
  <RepoCard repo="caobaoqi1024/docs-template-plume" />
  <RepoCard repo="caobaoqi1024/spring-boot3-template" />
</CardGrid>

## 贡献者

<Contributors
:contributors="[
{ github: 'caobaoqi1024', name: 'caobaoqi1024' },
{ github: 'mcdd1024', name: 'mcdd1024' },
{ github: 'coder-mcdd', name: 'coder-mcdd' },
]"
/>

## mcdd

::: card-masonry

![](/mcdd15/wink.gif)

![](/mcdd15/yyds.gif)

![](/mcdd15/听歌.gif)

![](/mcdd15/呲牙.gif)

![](/mcdd15/喝奶茶.gif)

![](/mcdd15/指.gif)

![](/mcdd15/爱了.gif)

![](/mcdd15/欠修理.gif)

![](/mcdd15/黑头土脸.gif)


:::

</div>

<style>
.home-custom-content img {
  cursor: default !important;
}
</style>