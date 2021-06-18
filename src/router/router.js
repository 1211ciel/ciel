import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        // home
        {
            path: "/",
            component: () => import("../views/index.vue")
        },
        //program
        {
            path: '/program',
            component: () => import("../views/program/index.vue"),
            children: [
                {
                    path: '/program/community',
                    component: () => import("../views/program/community.vue")
                },
                // git
                {
                    path: "/git",
                    component: () => import("../views/program/git/index.vue")
                }
            ]
        },
        //理财
        {
            path: "/financial",
            component: () => import("../views/financial/index.vue")
        },
        //web
        {
            path: "/web",
            component: () => import("../views/web/index.vue")
        },
        // english
        {
            path: "/english",
            component: () => import("../views/english/index.vue")
        },
        // history
        {
            path: '/history',
            component: () => import("../views/history/history.vue"),
            children: [
                {
                    path: "/history/category",
                    component: () => import("../views/history/category.vue")
                },
                {
                    path: "/japan",
                    component: () => import("../views/history/country/japan.vue")
                },
                {
                    path: "/usa",
                    component: () => import("../views/history/country/usa.vue")
                },
                {
                    path: "/stoneAge",
                    component: () => import("../views/history/time/stoneAge.vue")
                },
                {
                    path: "/riseOfCivilization",
                    component: () => import("../views/history/time/riseOfCivilization.vue")
                },
                {
                    path: "/middleAges",
                    component: () => import("../views/history/time/middleAges.vue")
                },
                {
                    path: "/modernTimes",
                    component: () => import("../views/history/time/modernTimes.vue")
                },
                {
                    path: "/twentiethCentury",
                    component: () => import("../views/history/time/twentiethCentury.vue")
                }
            ]
        },
        // life
        {
            path: '/life',
            component: () => import("../views/life/index.vue")
        }

    ]
})