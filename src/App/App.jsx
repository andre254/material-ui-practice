import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import './app.css'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  }
})


const App = () => {

  const classes = useStyles();

  return (
    <>
      <Sidebar/>
      <Header/>
      <div className={classes.appMain}></div>
    </>
  )
}

export default App

