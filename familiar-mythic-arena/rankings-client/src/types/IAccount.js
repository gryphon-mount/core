import PropTypes from 'prop-types'

const IAccount = {
  _id: PropTypes.string.isRequired,
  last_login: PropTypes.number,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default IAccount
