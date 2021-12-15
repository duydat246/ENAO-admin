import React from 'react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import {
    CButton,CListGroup,CHeaderText,CRow, CCol, CCard,CCardHeader,CCardBody,CCarousel,CCarouselItem,CInputGroup,CInputGroupText, CImage,CFormInput, CListGroupItem
  } from '@coreui/react';

  import '../../../assets/css/listgroup.css'

const Themmoitimesheet = () => {
    return (
        <div>
            <CRow>
            <CCol md="12" lg="7">
                <CCard>
                <CCardHeader>
                    <CIcon icon={icon.cilJustifyCenter}></CIcon>

                    <strong> Enao timesheet</strong>
                </CCardHeader>
                <CCardBody>
                    <CCarousel arrows indicators animate height="auto">
                    <CCarouselItem>
                        <CImage className="d-block w-100" src="https://www.saokim.com.vn/project/images/gallery/croped/logo-enao1519368347_400x300.jpg"></CImage>
                    </CCarouselItem>
                    </CCarousel>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol md="12" lg="5">
                <CCard>
                    <CCardHeader>
                        <CIcon icon={icon.cilJustifyCenter}/>
                        <strong> Nhập thông tin </strong>
                    </CCardHeader>
                    <CCardBody height="auto">
                    <CInputGroup className="mb-4">
                        <CInputGroupText id="basic-addon1">Hình thức</CInputGroupText>
                        <CFormInput placeholder="Hình thức" aria-label="Hinhthuc" aria-describedby="basic-addon1"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupText id="basic-addon1">Phần trăm</CInputGroupText>
                        <CFormInput type="number" min="0" placeholder="Phần trăm"></CFormInput>
                    </CInputGroup>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol md-12 className="btn-custom-save">
            <CButton color="danger" className="btn btn-custom-size">
                    Hủy
                    <CIcon icon={icon.cilX}></CIcon>
                </CButton>
                <CButton color="success" className="btn btn-custom-size">
                    Lưu
                    <CIcon icon={icon.cilSave}></CIcon>
                </CButton>
                
            </CCol>
            </CRow>
        </div>
    )
}

export default Themmoitimesheet
