(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{190:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"搭建vuepress-travis-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建vuepress-travis-github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建vuepress+travis+github-pages")]),t._v(" "),a("h1",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("h2",{attrs:{id:"初始化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化代码")]),t._v(" "),a("p",[t._v("命令行运行")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# hello world'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" src/readme.md\n")])])]),a("p",[t._v("在package.json加入下面命令")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build src"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这时运行"),a("code",[t._v("npm run dev")]),t._v("，然后访问http://localhost:8080")]),t._v(" "),a("h1",{attrs:{id:"部署代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署代码")]),t._v(" "),a("h2",{attrs:{id:"新建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建仓库")]),t._v(" "),a("p",[t._v("在github上新建一个仓库：")]),t._v(" "),a("ol",[a("li",[t._v("如果想要部署到"),a("code",[t._v("https://{your-github-name}.github.io")]),t._v("，则创建名为"),a("code",[t._v("https://{your-github-name}.github.io")]),t._v("，这个叫做"),a("code",[t._v("User Page Site")]),t._v("，只能使用master分支")]),t._v(" "),a("li",[t._v("如果部署到"),a("code",[t._v("https://{your-github-name}.github.io/{repo-name}/")]),t._v("，则创建"),a("code",[t._v("{repo-name}")]),t._v("的仓库，这个叫做"),a("code",[t._v("Project Page Site")]),t._v("，可以使用master分支、gh-pages分支或者master分支里面的docs目录")])]),t._v(" "),a("p",[t._v("这里使用方法二。"),a("a",{attrs:{href:"#%E9%99%84%E5%BD%95"}},[t._v("附录1")])]),t._v(" "),a("h2",{attrs:{id:"修改代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改代码")]),t._v(" "),a("p",[t._v("增加"),a("code",[t._v("base")]),t._v("的配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/.vuepress/config")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("添加travis配置")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When deploying files to a provider, prevent Travis CI from resetting your working directory and deleting all changes made during the build ( git stash --all) by adding skip_cleanup")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a token generated on github allowing travis to push code on you repository")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" src/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录位置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交分支")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verbose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("p",[t._v("push到远程")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" ssh:xxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your repo url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("h2",{attrs:{id:"添加github的key到travis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加github的key到travis","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加github的key到travis")]),t._v(" "),a("ol",[a("li",[t._v("新建一个"),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("github personal access token"),a("OutboundLink")],1),t._v(", 权限选择"),a("code",[t._v("repo")]),t._v("的所有项目")]),t._v(" "),a("li",[t._v("travis的项目setting里面"),a("code",[t._v("Environment Variables")]),t._v("添加这个key。name是"),a("code",[t._v("GITHUB_TOKEN")]),t._v(", value是key的值")]),t._v(" "),a("li",[t._v("选择travis里面的"),a("code",[t._v("trigger build")])])]),t._v(" "),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录","aria-hidden":"true"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/articles/user-organization-and-project-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("User, Organization, and Project Pages"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=n.exports}}]);