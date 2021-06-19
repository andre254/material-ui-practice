import { Badge, IconButton, InputBase } from '@material-ui/core'
import { AppBar, Grid, Toolbar, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles ({
    root: {
        backgroundColor: '#fff'
    }
})

const Header = () => {

    const classes =useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    {/* <Grid item sm={4} style={{border:'1px solid #fff'}}>
                    </Grid>
                    <Grid item sm={8} style={{border:'1px solid #000'}}>
                    </Grid> */}
                     <Grid item>
                         <InputBase/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color='primary'>
                                <ChatBubbleOutlineIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
