import { cilJustifyCenter, cilPlus, cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImage,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './Danhsachtimesheetcreate.css'

const Danhsachtimesheetcreate = () => {
  const [type, setType] = useState('')
  const [percent, setPercent] = useState('')
  const history = useHistory()

  const addTimeSheet = async () => {
    await axios
      .post('http://localhost:8080/timesheet/api/v1/timesheet/timesheet/new', {
        id: uuid(),
        percent: percent,
        typeTimeSheet: type,
      })
      .then(() => {
        history.push('/admin/danh-sach-timesheet')
      })
  }

  return (
    <div>
      <CRow>
        <CCol md="12">
          <CButton color="danger" className="btn btn-custom-size" style={{ float: 'right' }}>
            <CIcon icon={cilX} style={{ color: 'white', textDecoration: 'none' }} />
            <Link
              to="/admin/danh-sach-timesheet"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Hủy
            </Link>
          </CButton>
          <CButton
            type="submit"
            color="primary"
            className="btn btn-custom-size"
            style={{ float: 'right', marginRight: '10px' }}
            onClick={() => addTimeSheet()}
          >
            <CIcon icon={cilPlus}></CIcon>
            Lưu
          </CButton>
        </CCol>
        <br />
        <br />
        <CCol md="12" lg="7" style={{ marginTop: '20px' }}>
          <CCard>
            <CCardHeader>
              <CIcon icon="cil-justify-center" />
              <strong> Enao timesheet</strong>
            </CCardHeader>
            <CCardBody>
              <CImage
                src="https://www.saokim.com.vn/project/images/gallery/croped/logo-enao1519368347_400x300.jpg"
                style={{ height: ' 100% !important', width: ' 100% !important' }}
                fluid
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md="12" lg="5" style={{ marginTop: '20px' }}>
          <CCard>
            <CCardHeader>
              <CIcon icon={cilJustifyCenter} />
              <strong> Nhập thông tin </strong>
            </CCardHeader>
            <CCardBody height="auto">
              <CListGroup>
                <CListGroupItem>
                  Hình thức:
                  <input
                    type="text"
                    className="input-custom-border-none"
                    placeholder="Hình thức"
                    style={{ border: 'none' }}
                    onChange={(e) => setType(e.target.value)}
                  />
                </CListGroupItem>
                <CListGroupItem>
                  Phần trăm:
                  <input
                    type="number"
                    className="input-custom-border-none"
                    placeholder="Phần trăm"
                    style={{ border: 'none' }}
                    onChange={(e) => setPercent(e.target.value)}
                  />
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Danhsachtimesheetcreate
