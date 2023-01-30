import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

const NotificationList = [
  {
    id: 1,
    icon: 'AiFillCheckCircle',
    heading: 'Success',
    paragraph: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: 'RiErrorWarningFill',
    heading: 'Error',
    paragraph: 'Sorry, you are not authorized',
  },
  {
    id: 3,
    icon: 'MdWarning',
    heading: 'Warning',
    paragraph: 'Viewers of this file can see',
  },
  {
    id: 4,
    icon: 'MdInfo',
    heading: 'Info',
    paragraph: 'Anyone on the Internet',
  },
]

const AlertNotifications = () => (
  <div>
    <h1>Alert Notifications</h1>
    <ul>
      {NotificationList.map(each => (
        <Notification key={each.id}>
          <div>
            <each.icon />
            <h1>{each.heading}</h1>
            <p>{each.paragraph}</p>
            <GrFormClose />
          </div>
        </Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
