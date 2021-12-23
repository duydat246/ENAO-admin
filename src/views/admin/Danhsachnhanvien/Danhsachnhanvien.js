import { cilSearch, cilTrash, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers, usersSelector, deleteUser } from '../../../store/reducers/usersReducer'
import './Danhsachnhanvien.css'

// list users
const Danhsachnhanvien = () => {
  // take users from selector
  const users = useSelector(usersSelector)
  const dispatch = useDispatch()

  // render list when load list users
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  // delete user
  const deleteSingleUser = (userId) => {
    dispatch(deleteUser(userId))
  }

  return (
    <div className="container">
      <CRow>
        <CCol>
          <p className="Text-tile">Danh sách nhân viên</p>
        </CCol>

        <CCol className="buttons-add-nv">
          <CDropdown>
            <CDropdownToggle color="primary">Thêm mới</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>
                <Link
                  to="/admin/them-nhan-vien"
                  style={{ textDecoration: 'none', color: '#4f5d73' }}
                >
                  Thêm mới nhân viên
                </Link>
              </CDropdownItem>
              <CDropdownItem>
                <Link
                  to="/admin/them-luong-nhan-vien"
                  style={{ textDecoration: 'none', color: '#4f5d73' }}
                >
                  Thêm mới lương
                </Link>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCol>
      </CRow>

      <nav className="navbar ">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ boxShadow: 'none' }}
          />
          <CButton className="btn-search btn-outline-success " color={'light'}>
            <CIcon icon={cilSearch} className="icon-search"></CIcon>
          </CButton>
        </form>
      </nav>
      {/* table list users */}
      <div className="table-outer">
        <CTable id="myTable">
          <CTableHead color="dark">
            <CTableRow>
              <CTableHeaderCell scope="col">STT</CTableHeaderCell>
              <CTableHeaderCell scope="col">Mã nhân viên</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tên nhân viên</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ngày sinh</CTableHeaderCell>
              <CTableHeaderCell scope="col">Số tài khoản</CTableHeaderCell>
              <CTableHeaderCell scope="col">Lương theo tháng</CTableHeaderCell>
              <CTableHeaderCell scope="col">Chức năng</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {users.map((user, index) => (
              <CTableRow key={user.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{user.id}</CTableDataCell>
                <CTableDataCell>{user.display_name}</CTableDataCell>
                <CTableDataCell>{user.birth_day}</CTableDataCell>
                <CTableDataCell>{user.bank_number}</CTableDataCell>
                <CTableDataCell>{user.user_salary}</CTableDataCell>
                <CTableDataCell className="table-cell__item">
                  <CDropdown className="table-cell__btn_dropdown">
                    <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                      ...
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem style={{ cursor: 'pointer' }}>
                        <CIcon icon={cilUser} />
                        <Link
                          to="/admin/thong-tin-nhan-vien"
                          style={{
                            textDecoration: 'none',
                            color: '#4f5d73',
                            paddingLeft: '5px',
                          }}
                        >
                          Thông tin
                        </Link>
                      </CDropdownItem>
                      <CDropdownDivider />
                      <CDropdownItem
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={deleteSingleUser.bind(this, user.id)}
                      >
                        <CIcon icon={cilTrash} /> Xóa
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}

export default Danhsachnhanvien
