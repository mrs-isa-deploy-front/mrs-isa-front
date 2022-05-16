import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),

    routes:[
        { path: '/client/home', component: () => import("./components/clientHomePage.vue")},
        { path: '/client/profile', component: () => import("./components/clientProfileChange.vue")},
        { path: '/client/history/:type', component: () => import("./components/clientReservationHistory.vue")},
        { path: '/client/verify/:code', component: () => import("./components/clientVerified.vue") },
        { path: '/client/site/home', component: () => import("./components/homePageClient.vue")},

        { path: '/instructor/adventures', component: () => import("./components/fishing_instructor/allInstructorsAdventures")},

        {path: '/adventures/detail/:type', name: 'adventureForFishingInstructor', component: () => import("./components/fishing_instructor/adventureForFishingInstructor"),},
        { path: '/instructor/home', component: ()=> import("./components/fishing_instructor/instructorHomePage")},
        { path: '/adventure/add', component: ()=> import("./components/fishing_instructor/addAdventure")},
        { path: '/adventure/update/:type', component: ()=> import("./components/fishing_instructor/updateAdventure.vue")},

        { path: '/book/site/home', component: () => import("./components/homePage.vue")},
        { path: '/book/site/login', component: () => import("./components/login.vue")},
        { path:  '/book/site/register', component: () => import("./components/registerUser.vue")},
        { path:  '/book/cottage/site', component: () => import("./components/main_site/siteCottageListView.vue")},
        { path:  '/book/ship/site', component: () => import("./components/main_site/siteShipListView.vue")},
        { path:  '/book/adventure/site', component: () => import("./components/main_site/siteAdventureListView.vue")},

        { path: '/cottageOwner/profile', component: () => import("./components/editProfileCottageOwner")},
        { path: '/shipOwner/profile', component: () => import("./components/editProfileShipOwner")},
        { path: '/cottageOwner/home', component: () => import("./components/homePageCottageOwner")},
        { path: '/shipOwner/home', component: () => import("./components/homePageShipOwner")},
        { path: '/owner/cottages', component: () => import("./components/cottageList")},
        { path: '/owner/ships', component: () => import("./components/shipList")},
        {path:'/cottage/add',component:() => import("./components/addCottage.vue")},
        {path:'/ship/add',component:() => import("./components/addShip.vue")},
        { path: '/cottage/update/:id',component:()=>import("./components/updateCottage")},
        { path: '/ship/update/:id',component:()=>import("./components/updateShip")},


        {path:'/admin/home', component:()=>import("./components/admin/adminHomePage")},
        {path:'/admin/registration/request', component:()=> import("./components/admin/requestForRegistration.vue")}
    ]
});


router.beforeEach((to, from, next) => {
    const publicPages = ['/book/site/login', '/book/site/register', '/book/site/home', '/book/cottage/site',
        '/book/ship/site', '/book/adventure/site'];
    let authRequired = !publicPages.includes(to.path);
    if (to.path.includes('/client/verify/')){
        authRequired = false;
    }
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/book/site/login');
    } else {
        next();
    }
});

export default router