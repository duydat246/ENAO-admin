import { cilFolderOpen, cilMagnifyingGlass, cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CNav,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import './Danhsachluongngay.css'

const Danhsachluongngay = () => {
  return (
    <div>
      <CRow>
        <CCol className="col-12 col-title">
          <CRow>
            <CCol className="col-md-6 float-left margin-left">
              <p className="Text-tile">Danh sách lương theo ngày</p>
            </CCol>
            <CCol className="col-md-6">
              <CButton className="btn btn-primary btn-add" style={{ float: 'right' }}>
                <CIcon icon={cilPlus}></CIcon>
                Thêm mới
              </CButton>
            </CCol>
          </CRow>
        </CCol>

        {/* <!-- <input v-model="dateTimeNow.input" @input="formatDate(dateTimeNow)"> --> */}
        <CNav className="col-12 navbar justify-content-between">
          <CForm className="form-inline">
            <CFormInput
              type="date"
              className="form-control btn-add"
              style={{ color: '#201e1e', width: '15rem', float: 'left', marginRight: '10px' }}
            />
            <CButton className="btn btn-outline-success" type="submit" onClick="getAllSalaryDay()">
              <CIcon icon={cilMagnifyingGlass}></CIcon>
            </CButton>
          </CForm>
          {/* <a className="navbar-brand"></a> */}
          <CForm className="form-inline" style={{ display: 'flex' }}>
            <CFormInput
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ boxShadow: 'none', marginRight: '10px' }}
            />
            <CButton className="btn btn-outline-success " type="submit">
              <CIcon icon={cilMagnifyingGlass}></CIcon>
            </CButton>
          </CForm>
        </CNav>
        <CTable className="table" style={{ marginTop: '30px' }}>
          <CTableHead color="dark">
            <CTableRow>
              <CTableHeaderCell scope="col">Id</CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table" colSpan="1">
                Tên user
              </CTableHeaderCell>
              {/* <!-- <th scope="col" class="Title-table td-action">Tên sản phẩm</th> --> */}
              {/* <!-- <th scope="col" class="Title-table td-action">Hãng</th> --> */}
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="2">
                Ngày
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="3">
                Lương hôm nay
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="4">
                Thưởng hôm nay
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="5">
                Tổng lương đến hiện tại
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="5">
                Hành động
              </CTableHeaderCell>
              <CTableHeaderCell className="Title-table"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody className="text-center" v-if="getData.length >0">
            {/* get data  neu co du lieu */}
            <CTableRow v-for="item in getData" key="item.id">
              <CTableHeaderCell>id </CTableHeaderCell>
              <CTableHeaderCell scope="row" colSpan="1" className="td-table">
                userName{' '}
              </CTableHeaderCell>
              <CTableHeaderCell scope="row" colSpan="2" className="td-table">
                date{' '}
              </CTableHeaderCell>
              <CTableHeaderCell scope="row" colSpan="3" className="td-table">
                salaryDay
              </CTableHeaderCell>
              <CTableHeaderCell scope="row" colSpan="4" className="td-table">
                bonusDay{' '}
              </CTableHeaderCell>
              <CTableHeaderCell scope="row" colSpan="5" className="td-table">
                total{' '}
              </CTableHeaderCell>
              {/* <!-- <td class="td-table">Inspiron 7306</td> --> */}
              {/* <!-- <td class="td-table td-action"> */}
              {/* <i class="cib-dell"></i></td> --> */}
              <CTableDataCell className="td-table td-action" colSpan="6">
                <CButton
                  type="button"
                  className="btn btn-primary btn-size"
                  onClick="DetailProduct(item.id)"
                  style={{ marginRight: '25px' }}
                >
                  <CIcon icon={cilFolderOpen}></CIcon>
                </CButton>
                <CButton type="button" className="btn btn-danger btn-size">
                  <CIcon icon={cilTrash}></CIcon>
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>

          <CTableBody>
            {/* thong bao khong co data */}
            <CTableHeaderCell scope="row" className="td-table" colSpan="1">
              Không có dữ liệu
            </CTableHeaderCell>
          </CTableBody>
        </CTable>
      </CRow>
    </div>
  )
}

export default Danhsachluongngay
