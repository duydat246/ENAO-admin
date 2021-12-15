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
import './Themluongnhanvien.css'

const Themluongnhanvien = () => {
  return (
    <div>
      <CRow>
        <CCol md="12" lg="6">
          <CCard>
            <CCardHeader>
              <strong> EnterpriseNao - Thêm mới lương nhân viên </strong>
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
              <strong> Nhập thông tin </strong>
            </CCardHeader>
            <CCardBody height="auto">
              <CListGroup>
                <CListGroupItem>
                  Chọn user:
                  <CFormSelect
                    className="custom-select input-custom-border-none"
                    id="inputGroupSelect01"
                    style={{ width: '60%' }}
                  >
                    <option value="">Chọn user</option>
                    <option value="BIDV">duydat246</option>
                    <option value="VCB">duydat246</option>
                    <option value="VTB">duydat246</option>
                  </CFormSelect>
                </CListGroupItem>
                <CListGroupItem>
                  Nhập lương:
                  <CFormInput
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Nhập số lương"
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
                <CButton color="danger" style={{ width: '90px', height: '40px', color: 'white' }}>
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

export default Themluongnhanvien
