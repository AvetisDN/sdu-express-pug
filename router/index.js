/*
* Routing
 */
const router = require('express').Router()

const routes = [
    {
        url: '/',
        name: 'Home page',
        template: 'index',
        status: 200,
        showInMenu: true
    },
    {
        url: '/about',
        name: 'About Us',
        template: 'about',
        status: 200,
        showInMenu: true
    },
    {
        url: '/contact',
        name: 'Contacts',
        template: 'contact',
        status: 200,
        showInMenu: true
    },
    {
        url: '*',
        name: 'Error 404',
        template: '404',
        status: 404,
        showInMenu: false
    },
]
routes.forEach(route => {
    router.get(route.url, (req, res) => {
        res.status(route.status || 200).render(route.template, {
            title: route.name,
            links: routes
        })
    })
})

module.exports = router