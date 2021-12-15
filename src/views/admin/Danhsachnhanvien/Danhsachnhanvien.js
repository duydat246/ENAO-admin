import { cilSearch, cilTrash, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Danhsachnhanvien.css'

const Danhsachnhanvien = () => {
  // call api
  // const url = 'http://localhost:8080/timesheet/api/v1/timesheet/salary/get'
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res.data)
  //       console.log(res.data)
  //       if (data.length > 0) {
  //         console.log('có data')
  //         alert('Tải thành công', {
  //           duration: 2000,
  //         })
  //         for (var item in data) {
  //           console.log(item)
  //         }
  //       } else {
  //         console.log('không có data')
  //         console.log(data)
  //         return (
  //           <CToast
  //             autohide={false}
  //             visible={true}
  //             color="primary"
  //             className="text-white align-items-center"
  //           >
  //             <div className="d-flex">
  //               <CToastBody>Hello, world! This is a toast message.</CToastBody>
  //               <CToastClose className="me-2 m-auto" white />
  //             </div>
  //           </CToast>
  //         )
  //       }
  //     })
  //     .catch((e) => {
  //       alert('Đã xảy ra lỗi', {
  //         duration: 2000,
  //       })
  //       console.log(e)
  //     })
  // }, [])

  return (
    <div className="container">
      <CRow>
        <CCol>
          <p className="Text-tile">Danh sách nhân viên</p>
        </CCol>

        <CCol className="buttons-add-nv">
          <CDropdown>
            <CDropdownToggle color="primary">Thêm mới</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>
                <Link
                  to="/admin/them-nhan-vien"
                  style={{ textDecoration: 'none', color: '#4f5d73' }}
                >
                  Thêm mới nhân viên
                </Link>
              </CDropdownItem>
              <CDropdownItem>
                <Link
                  to="/admin/them-luong-nhan-vien"
                  style={{ textDecoration: 'none', color: '#4f5d73' }}
                >
                  Thêm mới lương
                </Link>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCol>
      </CRow>

      <nav className="navbar ">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ boxShadow: 'none' }}
          />
          <CButton className="btn-search btn-outline-success " color={'light'}>
            <CIcon icon={cilSearch} className="icon-search"></CIcon>
          </CButton>
        </form>
      </nav>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">STT</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mã nhân viên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tên nhân viên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ngày sinh</CTableHeaderCell>
            <CTableHeaderCell scope="col">Số tài khoản</CTableHeaderCell>
            <CTableHeaderCell scope="col">Lương theo tháng</CTableHeaderCell>
            <CTableHeaderCell scope="col">Chức năng</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>NV1</CTableDataCell>
            <CTableDataCell>Pham Duy Dat</CTableDataCell>
            <CTableDataCell>24/06/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510002263734</CTableDataCell>
            <CTableDataCell>10000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} />
                    <Link
                      to="/admin/thong-tin-nhan-vien"
                      style={{ textDecoration: 'none', color: '#4f5d73', paddingLeft: '5px' }}
                    >
                      Thông tin
                    </Link>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#" style={{ color: 'red' }}>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>NV1</CTableDataCell>
            <CTableDataCell>Pham Duy Dat</CTableDataCell>
            <CTableDataCell>24/06/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510002263734</CTableDataCell>
            <CTableDataCell>10000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} />
                    <Link
                      to="/admin/thong-tin-nhan-vien"
                      style={{ textDecoration: 'none', color: '#4f5d73', paddingLeft: '5px' }}
                    >
                      Thông tin
                    </Link>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#" style={{ color: 'red' }}>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>NV1</CTableDataCell>
            <CTableDataCell>Pham Duy Dat</CTableDataCell>
            <CTableDataCell>24/06/1999</CTableDataCell>
            <CTableDataCell>BIDV 21510002263734</CTableDataCell>
            <CTableDataCell>10000000</CTableDataCell>
            <CTableDataCell className="table-cell__item">
              <CDropdown className="table-cell__btn_dropdown">
                <CDropdownToggle color={'secondary'} className="table-cell__btn_toggle">
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                    <CIcon icon={cilUser} />
                    <Link
                      to="/admin/thong-tin-nhan-vien"
                      style={{ textDecoration: 'none', color: '#4f5d73', paddingLeft: '5px' }}
                    >
                      Thông tin
                    </Link>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#" style={{ color: 'red' }}>
                    <CIcon icon={cilTrash} /> Xóa
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Danhsachnhanvien
