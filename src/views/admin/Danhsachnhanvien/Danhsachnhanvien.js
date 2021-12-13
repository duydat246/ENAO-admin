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
import React from 'react'
import './Danhsachnhanvien.css'

const Danhsachnhanvien = () => {
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
              <CDropdownItem href="#">Thêm mới nhân viên</CDropdownItem>
              <CDropdownItem href="#">Thêm mới lương</CDropdownItem>
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
      <CTable>
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
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>NV1</CTableDataCell>
            <CTableDataCell>Pham Duy Dat</CTableDataCell>
            <CTableDataCell>24/06/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510002263734</CTableDataCell>
            <CTableDataCell>10000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} /> thông tin
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>NV2</CTableDataCell>
            <CTableDataCell>Pham Van Kha</CTableDataCell>
            <CTableDataCell>01/02/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510001234567</CTableDataCell>
            <CTableDataCell>5000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} /> thông tin
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>NV3</CTableDataCell>
            <CTableDataCell>Nguyen Ngoc Tran Hoan</CTableDataCell>
            <CTableDataCell>12/06/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510002265784</CTableDataCell>
            <CTableDataCell>6000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} /> thông tin
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Danhsachnhanvien
