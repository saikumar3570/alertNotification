import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return <li>{children}</li>
}

export default Notification
