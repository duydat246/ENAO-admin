import {
  cilCursor,
  cilGroup,
  cilHome,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilStorage,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Admin',
    to: '/admin',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách nhân viên',
        to: '/admin/danh-sach-nhan-vien',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Danh sách Group',
        to: '/admin/danh-sach-group',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Danh sách timesheet',
        to: '/admin/danh-sach-timesheet',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Danh sách bonus',
        to: '/admin/danh-sach-bonus',
        icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Danh sách lương ngày',
        to: '/admin/danh-sach-luong-ngay',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name : 'Thêm mới group',
      //   to :'/admin/them-moi-group'
      // },
      // { 
      //   component: CNavItem,
      //   name: 'Thêm mới bonus',
      //   to:'/admin/them-moi-bonus'
      // }
    ],
  },
]

export default _nav
