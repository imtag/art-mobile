import { version } from '../package.json'
/* eslint-disable no-unused-vars */
import Style from './components/style'
// basic
import Button from './components/button'
import Icon from './components/icon'
import Row from './components/row'
import Col from './components/col'
import Loading from './components/loading'
// nav
import Tabs from './components/tabs'
import Tab from './components/tab'
import TabPanel from './components/tab-panel'
import TabPanels from './components/tab-panels'
// form
import Input from './components/input'
import Radios from './components/radios'
import Radio from './components/radio'
// scroll
import Scroll from './components/scroll'
import PullDown from './components/pull-down'
import Toast from './components/toast'

const components = [
  Button,
  Icon,
  Row,
  Col,
  Loading,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Input,
  Radios,
  Radio,
  Scroll,
  PullDown
]

const install = Vue => {
  if (install.installed) {
    return
  }
  components.forEach(component => {
    component.install(Vue)
  })
  install.installed = true

  Vue.prototype.$Toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version
}
