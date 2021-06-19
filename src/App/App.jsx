import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import './app.css'
import { CssBaseline, makeStyles } from '@material-ui/core'

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
      <div className={classes.appMain}>
      <Header/>
      </div>
      <CssBaseline/>
    </>
  )
}

export default App

