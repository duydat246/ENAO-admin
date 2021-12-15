import {
  CContainer, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton,
  CHeaderText,CCol, CForm,CRow,CFormInput
} from '@coreui/react';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react'
import React, { useEffect, useState } from 'react';
import '../../../assets/css/listgroup.css';
import{Link} from 'react-router-dom';
// import { getAllGroups, removeGroups } from "api/groupAPI";

// const ListGroups = ()=>{
//   const [groups, setGroups] = useState([]);
//   useEffect(()=>{
//     const getGroups = async()=>{
//       try{
//         const {data} = await getGroups();
//         setGroups(data);
//       }catch(e){
//         console.log("error",e);
//       }
//     };
//     getGroups();
//   },[]);
//   const onRemove = async(id)=>{
//     try{
//       await removeGroups(id);
//       const newGroups = groups.filter((item) => item.id !== id);
//       setGroups(newGroups);
//     }catch(e){
//       console.log(e);
//     }
//   }
// }
const Danhsachgroup = () => {
  return <div>
            <CContainer>
            <CHeaderText className="title">
            Danh sách nhóm<br />  
            </CHeaderText>
            <CHeaderText>
            Trang chủ ● nhóm
            </CHeaderText>
            <Link to="/admin/them-moi-group">
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
                  <CTableDataCell>bạn đã ăn cơm buổi tối chưa</CTableDataCell>
                  <CTableDataCell>43454</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>123</CTableDataCell>
                  <CTableDataCell>có một cái gì đó không đúng</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell >chắc chắn nó không đúng</CTableDataCell>
                  <CTableDataCell >có thật nó không đúng không ?</CTableDataCell>
                  <CTableDataCell className="datacell">
                  <CButton color="danger"><CIcon icon={icon.cilDelete}></CIcon></CButton>
                  <CButton color="warning" className="warning"><CIcon icon={icon.cilPencil}></CIcon></CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            </CContainer>
          </div>
}

export default Danhsachgroup
