import { cilMagnifyingGlass } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormSelect,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavbarBrand,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import './Thongtinnhanvien.css'

const Thongtinnhanvien = () => {
  return (
    <div>
      <CRow>
        <CCol md="12" lg="7" style={{ marginBottom: '30px' }}>
          <CCard>
            <CCardHeader>
              <CIcon name="cil-justify-center" />
              <strong> Hình ảnh</strong>
            </CCardHeader>
            <CCardBody>
              <img
                src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg"
                alt="img1"
                height="100%"
                width="100%"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12" lg="5" style={{ marginBottom: '30px' }}>
          <CCard style={{ height: '100%' }}>
            <CCardHeader>
              <CIcon name="cil-justify-center" />
              <strong> Thông tin nhân viên </strong>
            </CCardHeader>
            <CCardBody height="auto">
              <CListGroup>
                <CListGroupItem>
                  <span className="Title-font-size">Id: </span>
                  {/* <span>{{ getData.userId }}</span> */}
                  <span>NV1</span>
                </CListGroupItem>
                <CListGroupItem>
                  <span className="Title-font-size">Tên nhân viên: </span>
                  {/* <span>{{ getData.userName }}</span> */}
                  <span>Trần Thanh Phương</span>
                </CListGroupItem>

                <CListGroupItem>
                  <span className="Title-font-size">Tên tài khoản: </span>
                  {/* <span>{{ getData.userName }}</span> */}
                  <span>ThanhPhuong</span>
                </CListGroupItem>

                <CListGroupItem>
                  <span className="Title-font-size">Email: </span>
                  {/* <span>{{ getData.userName }}</span> */}
                  <span>Thanhphuong25@gmail.com</span>
                </CListGroupItem>

                <CListGroupItem>
                  <span className="Title-font-size">Số điện thoại: </span>
                  {/* <span>{{ getData.userName }}</span> */}
                  <span>Thanh Phuong 25</span>
                </CListGroupItem>

                <CListGroupItem>
                  <span className="Title-font-size">Lương cứng: </span>
                  {/* <span>{{ getData.salary }}</span> */}
                  1000000
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>

        <CNav className="col-12 navbar justify-content-between">
          <CNavbarBrand>Danh sách lương theo ngày</CNavbarBrand>
          <CForm className="form-inline">
            <p className="table-luong__title">
              <b>Lương theo tháng:</b>
            </p>
            <div className="d-flex">
              <CFormSelect
                className="custom-select"
                id="inputGroupSelect01"
                style={{ width: '60%', marginRight: '10px' }}
              >
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </CFormSelect>
              <CFormSelect
                // className="custom-select input-custom-border-none"
                id="inputGroupSelect01"
                style={{ width: '90%' }}
              >
                <option selected value="2020">
                  2020
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
              </CFormSelect>
            </div>
            <CButton type="submit" style={{ marginLeft: '10px' }}>
              <CIcon icon={cilMagnifyingGlass} style={{ color: 'white' }}></CIcon>
            </CButton>
          </CForm>
        </CNav>

        <CTable style={{ marginTop: '15px' }} className="table table-border">
          <CTableHead color="dark">
            <CTableRow>
              <CTableHeaderCell scope="col">Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tên nhân viên</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ngày</CTableHeaderCell>
              <CTableHeaderCell scope="col">Lương hôm nay</CTableHeaderCell>
              <CTableHeaderCell scope="col">Thưởng hôm nay</CTableHeaderCell>
              <CTableHeaderCell scope="col" colSpan="7">
                tổng lương đến hiện tại
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CRow>
    </div>
  )
}

export default Thongtinnhanvien
