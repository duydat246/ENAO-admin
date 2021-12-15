import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons';
import { 
  CTableHeaderCell,CTableRow,CTableDataCell,CTable,CTableHead,CTableBody,CHeaderText,CButton,CContainer,CForm,CFormInput,CRow,CCol
} from '@coreui/react';
import '../../../assets/css/listgroup.css';
import{Link} from 'react-router-dom';

const Danhsachbonus = () => {
  return (
    <div>
            <CContainer>
            <CHeaderText className="title">
            Danh sách bonus<br />  
            </CHeaderText>
            <CHeaderText>
            Trang chủ ● bonus
            </CHeaderText>
            <Link to="/admin/them-moi-bonus">
            <CButton color="info" className="btn-bonus">
            <CIcon icon={icon.cilPlus}></CIcon>
              Thêm mới</CButton>
              </Link>
            <CForm>
              <CRow>
                <CCol xs>
                  <CFormInput placeholder="Tìm kiếm" aria-label="Tìm kiếm" className="inputsearch"></CFormInput>
                </CCol>
                <CCol xs className="search">
                  <CButton  aria-label="Last name" className='button-search'> 
                    <CIcon  icon={icon.cilSearch}></CIcon>
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">STT</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tên nhóm</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mã nhóm</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>

                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>

                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>

                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            </CContainer>
          </div>
  )
}

export default Danhsachbonus
