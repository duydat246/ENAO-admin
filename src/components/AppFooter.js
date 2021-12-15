import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://localhost:3000/#/dashboard" target="_blank" rel="noopener noreferrer">
          EnterpriseNao
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="http://localhost:3000/#/dashboard" target="_blank" rel="noopener noreferrer">
          EnterpriseNao
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
