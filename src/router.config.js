import IndexPage from './pages/index'
import Public from './pages/public'
import Punish from './pages/punish/punish'
import Power from './pages/power/power'
import Decision from './pages/decision/decision'
import Law from './pages/law/law'
import CaseLogin from './pages/case/caseLogin'
import CaseList from './pages/case/caseList'

export default [
    {
        path: '/',
        component: IndexPage
    },
    {
        path: '/public',
        component: Public,
        children: [
            {
              path: 'punish',
              component: Punish
            },
            {
              path: 'power',
              component: Power
            },
            {
              path: 'case',
              component: CaseLogin
            },
            {
              path: 'caseList',
              component: CaseList
            },
            {
              path: 'decision',
              component: Decision
            },
            {
              path: 'law',
              component: Law
            }
        ]
    }
]