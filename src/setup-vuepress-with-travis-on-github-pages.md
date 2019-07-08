
搭建vuepress+travis+github-pages
===

# 创建项目

## 初始化代码

命令行运行
```sh
mkdir blog
cd blog
npm init # 创建package.json
npm i vuepress
mkdir src
echo '# hello world' > src/readme.md
```

在package.json加入下面命令
```json
{
  "script": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  }
}
```

这时运行`npm run dev`，然后访问http://localhost:8080

# 部署代码

## 新建仓库

在github上新建一个仓库：
1. 如果想要部署到`https://{your-github-name}.github.io`，则创建名为`https://{your-github-name}.github.io`，这个叫做`User Page Site`，只能使用master分支
2. 如果部署到`https://{your-github-name}.github.io/{repo-name}/`，则创建`{repo-name}`的仓库，这个叫做`Project Page Site`，可以使用master分支、gh-pages分支或者master分支里面的docs目录

这里使用方法二。[附录1](#附录)

## 修改代码

增加`base`的配置
```js
// src/.vuepress/config
module.exports = {
  base: '/blog/',
  title: 'blog',
}
```

添加travis配置
```yml
language: node_js
node_js:
  - lts/*
branches:
  only:
    - master
script:
  - npm run build
deploy:
  provider: pages
  skip_cleanup: true # When deploying files to a provider, prevent Travis CI from resetting your working directory and deleting all changes made during the build ( git stash --all) by adding skip_cleanup
  github_token: $GITHUB_TOKEN # a token generated on github allowing travis to push code on you repository
  local_dir: src/.vuepress/dist # 目录位置
  target_branch: gh-pages # 提交分支
  verbose: true
  on:
    branch: master
```

push到远程
```bash
git init
git remote add ssh:xxx # your repo url
git add . -A
git commit -m "init"
git push
```

## 添加github的key到travis

1. 新建一个[github personal access token](https://github.com/settings/tokens), 权限选择`repo`的所有项目
2. travis的项目setting里面`Environment Variables`添加这个key。name是`GITHUB_TOKEN`, value是key的值
3. 选择travis里面的`trigger build`

## 附录

1. [User, Organization, and Project Pages](https://help.github.com/en/articles/user-organization-and-project-pages)