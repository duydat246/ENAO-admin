import React from 'react'
import {
    CContainer, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton,
    CHeaderText,CRow, CCol, CCard,CCardHeader,CCardBody,CCarousel,CCarouselItem,CInputGroup,CInputGroupText, CImage,CFormInput,CListGroupItem, CListGroup
  } from '@coreui/react';
  import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import{Link} from 'react-router-dom';
import '../../../assets/css/bonuscreate.css'
import '../../../assets/css/listgroup.css'

const Danhsachbonuscreate = () => {
    return (
        <div>
            <CRow>
                <CCol md="12" lg="7">
                    <CCard>
                        <CCardHeader>
                            <CIcon icon={icon.cilJustifyCenter} />
                            <strong> Lương thưởng nhân viên</strong>
                        </CCardHeader>
                        <CInputGroup className="mb-4">
                            <CInputGroupText >Nhập tên</CInputGroupText>
                            <CFormInput placeholder="Nhập tên người nhận">

                            </CFormInput>
                            
                        </CInputGroup>
                        <CButton className="bt-1">
                                <CIcon icon={icon.cilSearch}></CIcon>
                            </CButton>
                    </CCard>
                    <CTable>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">STT</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>ádadasdad</CTableDataCell>
                        <CTableDataCell className="datacell">
                        <CButton color="danger" className="btn btn-custom"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                        <Link to="/admin/sua-bonus">
                        <CButton color="warning" className="btn btn-custom"><CIcon icon={icon.cilPencil}></CIcon></CButton>
                        </Link>
                        </CTableDataCell>
                        </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCol>
                <CCol md="12" lg="5">
                    <CCard>
                        <CCardHeader>
                            <CIcon icon={icon.cilJustifyCenter}></CIcon>
                            <strong>Thông tin người nhận</strong>
                        </CCardHeader>
                        <CCardBody height="auto">
                            <CListGroup>
                                <CListGroupItem>
                                    Chọn timesheet:
                                    <select className="custom-select input-custom-border-none" name="" id="">
                                        <option  selected disabled value="">Chọn loại</option>
                                        <option>Chon loai di ban</option>
                                    </select>
                                </CListGroupItem>
                                <CListGroupItem>
                                    Chọn loại nhập:
                                    <select className="custom-select input-custom-border-none" id="inputGroupSelect01">
                                        <option value="0">Chọn loại</option>
                                        <option value="1">Nhập số giờ:</option>
                                        <option value="2">Nhập số tiền:</option>
                                    </select>
                                </CListGroupItem>
                            </CListGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}

export default Danhsachbonuscreate
