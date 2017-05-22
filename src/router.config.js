import IndexPage from './pages/index'
import Check from './pages/check'
import Search from './components/search.vue'

export default [{
        path: '/',
        component: IndexPage
    },
    {
        path: '/check',
        component: Check,
        children: [{
            path: 'search',
            component: Search
        }]
    }
]