import { connect } from 'react-redux'

import { getAppName, getProductName } from 'state/metadata'
import Signin from './Siginin'

const mapState = state => ({
  appName: getAppName(state),
  productName: getProductName(state)
})

export default connect(mapState)(Signin)
