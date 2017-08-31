import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import CIndex from '@/components/c-index'
import CTable from '@/components/c-table'
import CForm from '@/components/c-form'
import CDatepicker from '@/components/c-datepicker'
import CNotice from '@/components/c-notice'
import CMarkdown from '@/components/c-markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          component: CIndex
        },
        {
          path: '/cindex',
          component: CIndex
        },
        {
          path: '/table',
          component: CTable
        },
        {
          path: '/form',
          component: CForm
        },
        {
          path: '/datepicker',
          component: CDatepicker
        },
        {
          path: '/markdown',
          component: CMarkdown
        },
        {
          path: '/notice',
          component: CNotice
        }
      ]
    }
  ]
})
