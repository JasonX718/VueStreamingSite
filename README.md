# MyVideo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

```
MyVideo
├─ .gitignore
├─ index.html
├─ intropage.html
├─ login.html
├─ manager.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ register.html
├─ src
│  ├─ App copy.vue
│  ├─ App.vue
│  ├─ assets
│  │  ├─ 0.jpg
│  │  ├─ base.css
│  │  ├─ jsondata
│  │  │  ├─ lineChartsData.json
│  │  │  └─ loginTableData.json
│  │  ├─ loginbk.png
│  │  ├─ logo.svg
│  │  ├─ main.css
│  │  ├─ Orion.jpg
│  │  └─ style.css
│  ├─ components
│  │  ├─ box
│  │  │  ├─ LineCharts.vue
│  │  │  └─ RecordTable.vue
│  │  ├─ MainPage
│  │  │  ├─ AsideManager.vue
│  │  │  ├─ AsideMenu.vue
│  │  │  ├─ Avatar.vue
│  │  │  ├─ DropdownList.vue
│  │  │  ├─ HeaderBar.vue
│  │  │  ├─ HeaderManager.vue
│  │  │  ├─ MainContainer
│  │  │  │  ├─ Home.vue
│  │  │  │  ├─ Intro.vue
│  │  │  │  ├─ Latest.vue
│  │  │  │  ├─ Movies.vue
│  │  │  │  ├─ Search.vue
│  │  │  │  └─ TVs.vue
│  │  │  ├─ ManagerHeader.vue
│  │  │  ├─ Movies.vue
│  │  │  ├─ PostCarousel.vue
│  │  │  ├─ ScopedSlot.vue
│  │  │  ├─ SidePosters.vue
│  │  │  ├─ SignInDropDown.vue
│  │  │  └─ VideoPostList.vue
│  │  ├─ VideoPlayer.vue
│  │  └─ ZoomInImage.vue
│  ├─ main.js
│  ├─ pages
│  │  ├─ Login
│  │  │  ├─ App.vue
│  │  │  └─ main.js
│  │  ├─ Manager
│  │  │  ├─ App.vue
│  │  │  └─ main.js
│  │  ├─ Register
│  │  │  ├─ App.vue
│  │  │  └─ main.js
│  │  ├─ Video
│  │  │  ├─ App.vue
│  │  │  └─ main.js
│  │  └─ VideoIntro
│  │     ├─ App.vue
│  │     └─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ server
│  │  ├─ API
│  │  │  ├─ convert.js
│  │  │  ├─ countfile.js
│  │  │  ├─ formattransform.js
│  │  │  ├─ list.js
│  │  │  ├─ login.js
│  │  │  ├─ manager
│  │  │  │  ├─ bandwidth.js
│  │  │  │  ├─ getbandwidth.js
│  │  │  │  ├─ historyaccess.js
│  │  │  │  └─ trafficanalysis.js
│  │  │  ├─ sendVerificationEmail.js
│  │  │  ├─ stream.js
│  │  │  └─ user.js
│  │  ├─ app.js
│  │  ├─ bandwidth.json
│  │  ├─ db
│  │  │  └─ index.js
│  │  ├─ log.js
│  │  ├─ loginTableData.json
│  │  ├─ pageviews.json
│  │  ├─ router.js
│  │  └─ TrafficAnalyzePage.vue
│  └─ views
│     ├─ BandwidthPage.vue
│     ├─ Catagory.vue
│     ├─ ContactUs.vue
│     ├─ CookiePolicy.vue
│     ├─ HistoryManage.vue
│     ├─ IntroPage.vue
│     ├─ Login.vue
│     ├─ ManageCookie.vue
│     ├─ manager
│     │  └─ TrafficAnalyzePage.vue
│     ├─ Manager.vue
│     ├─ netflix_login.vue
│     ├─ Signup.vue
│     ├─ TermOfUse.vue
│     ├─ test.vue
│     ├─ TrafficAnalyzePage.vue
│     ├─ watch.vue
│     └─ YourAccount.vue
├─ video.html
└─ vite.config.js

```