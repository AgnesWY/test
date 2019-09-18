module.exports = file => () => import(/* webpackChunkName: "[request]" */ '@/pages/' + file + '.vue')
