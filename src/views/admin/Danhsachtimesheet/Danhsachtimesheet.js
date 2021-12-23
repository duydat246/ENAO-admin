import { cilFolderOpen, cilMagnifyingGlass, cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CNav,
  CNavbarBrand,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Danhsachtimesheet.css'

const Danhsachtimesheet = () => {
  const [datas, setDatas] = useState([])

  // fetch data
  useEffect(() => {
    axios.get('http://localhost:8080/timesheet/api/v1/timesheet/timesheet/get').then((res) => {
      console.log(res)
      setDatas(res.data)
    })
  }, [])

  const getData = () => {
    axios.get('http://localhost:8080/timesheet/api/v1/timesheet/timesheet/get').then((res) => {
      console.log(res)
      setDatas(res.data)
    })
  }

  // const onDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:8080/timesheet/api/v1/timesheet/timesheet/delete/${id}`)
  //     .then(() => {
  //       getData()
  //     })
  // }

  const deleteEmployee = (id) => {
    return axios.delete(
      'http://localhost:8080/timesheet/api/v1/timesheet/timesheet/delete' + '/' + id,
    )
  }
  const onDeleteTimesheet = (id) => {
    deleteEmployee(id).then((res) => {
      setDatas({ datas: datas.filter((data) => data.id !== id) })
    })
  }

  return (
    <div>
      <CRow>
        <CCol className="col-12 col-title">
          <CRow>
            <CCol className="col-md-6" style={{ float: 'left' }}>
              <p className="Text-tile">Timesheet</p>
            </CCol>
            <CCol className="col-md-6" style={{ float: 'right' }}>
              <Link to="/admin/them-time-sheet">
                <CButton
                  type="button"
                  className="btn btn-primary btn-add"
                  style={{ float: 'right' }}
                >
                  <CIcon icon={cilPlus} />
                  Thêm mới
                </CButton>
              </Link>
            </CCol>
          </CRow>
        </CCol>

        <CNav className="col-12 navbar justify-content-between">
          <CNavbarBrand href="#"></CNavbarBrand>
          <CForm className="form-inline" style={{ display: 'flex' }}>
            <CFormInput
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ boxShadow: 'none', marginRight: '10px' }}
            />
            <CButton className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <CIcon icon={cilMagnifyingGlass}></CIcon>
            </CButton>
          </CForm>
        </CNav>

        <CTable>
          <CTableHead color="dark">
            <CTableRow>
              <CTableHeaderCell scope="col" colSpan="1">
                STT
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" colSpan="2">
                Id
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table" colSpan="3">
                Hình thức
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="4">
                Tỉ lệ(%)
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="Title-table td-action" colSpan="5">
                Chức Năng
              </CTableHeaderCell>
              <CTableHeaderCell className="Title-table"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody className="" style={{ textAlign: 'center' }}>
            {datas.map((data, index) => (
              <CTableRow key={data.id}>
                <CTableHeaderCell
                  scope="row"
                  className="td-table"
                  colSpan="1"
                  style={{ textAlign: 'left' }}
                >
                  {index + 1}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="row"
                  className="td-table"
                  colSpan="1"
                  style={{ textAlign: 'left' }}
                >
                  {data.id}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="row"
                  className="td-table"
                  colSpan="2"
                  style={{ textAlign: 'left' }}
                >
                  {data.type}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="row"
                  className="td-table"
                  colSpan="3"
                  style={{ textAlign: 'left' }}
                >
                  {data.percent}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="row"
                  className="td-table td-action"
                  colSpan="4"
                  style={{ textAlign: 'left' }}
                >
                  <router-link to="/admin/quanlytimesheetupdate">
                    <CButton
                      type="button"
                      className="btn btn-primary btn-size"
                      style={{ float: 'left', marginRight: '10px' }}
                    >
                      <CIcon icon={cilFolderOpen}></CIcon>
                    </CButton>
                  </router-link>
                  <CButton
                    type="button"
                    className="btn btn-danger btn-size"
                    style={{ float: 'left' }}
                    onClick={() => onDeleteTimesheet(data.id)}
                  >
                    <CIcon icon={cilTrash}></CIcon>
                  </CButton>
                </CTableHeaderCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CRow>
    </div>
  )
}

export default Danhsachtimesheet
