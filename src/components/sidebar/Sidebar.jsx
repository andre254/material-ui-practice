import { withStyles } from "@material-ui/core"


const style =  {
    Sidebar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
}


const Sidebar = (props) => {

    const { classes } = props
    // console.log(classes)
    return (
        <div className={classes.Sidebar}>  
        </div>
    )
}

export default withStyles(style)(Sidebar)
