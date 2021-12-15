import { cilJustifyCenter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Themnhanvien.css'

const Themnhanvien = () => {
  return (
    <div>
      <CRow>
        <CCol md="12" lg="6">
          <CCard>
            <CCardHeader>
              <strong> EnterpriseNao - Thêm nhân viên </strong>
            </CCardHeader>
            <CCardBody>
              <img
                src="https://www.saokim.com.vn/project/images/gallery/croped/logo-enao1519368347_400x300.jpg"
                alt="Enao"
                style={{ width: '100%', height: '100%' }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12" lg="6">
          <CCard>
            <CCardHeader>
              <CIcon icon={cilJustifyCenter} />
              <strong> Nhập thông tin </strong>
            </CCardHeader>
            <CCardBody height="auto">
              <CListGroup>
                <CListGroupItem>
                  Tên đăng nhập:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Tên đăng nhập"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Tên hiển thị:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Tên hiển thị"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Mật khẩu:
                  <CFormInput
                    type="password"
                    className="input-custom-border-none"
                    placeholder="Mật khẩu"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Nhập lại mật khẩu:
                  <CFormInput
                    type="password"
                    className="input-custom-border-none"
                    placeholder="Nhập lại mật khẩu"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Mã nhân viên:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Mã nhân viên"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Ngân hàng:
                  <CFormSelect
                    className="custom-select input-custom-border-none"
                    id="inputGroupSelect01"
                    style={{ width: '60%' }}
                  >
                    <option value="">Chọn ngân hàng</option>
                    <option value="BIDV">BIDV</option>
                    <option value="VCB">VCB</option>
                    <option value="VTB">VTB</option>
                  </CFormSelect>
                </CListGroupItem>
                <CListGroupItem>
                  Số tài khoản:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Số tài khoản"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Ngày sinh:
                  <CFormInput
                    type="date"
                    className="input-custom-border-none"
                    placeholder="yyyy-MM-dd"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Số điện thoại:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Số điện thoại"
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Email:
                  <CFormInput
                    type="email"
                    className="input-custom-border-none"
                    placeholder="Email@gmail.com"
                  />
                </CListGroupItem>
              </CListGroup>
              <div className="btn-group__nv">
                <CButton
                  color="primary"
                  style={{ marginRight: '30px', width: '90px', height: '40px' }}
                >
                  + Lưu
                </CButton>
                <CButton color="danger" style={{ width: '90px', height: '40px' }}>
                  <Link
                    to="/admin/danh-sach-nhan-vien"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    x Hủy
                  </Link>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Themnhanvien
