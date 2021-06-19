import { Badge, IconButton, InputBase } from '@material-ui/core'
import { AppBar, Grid, Toolbar, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles (theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px', 
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        },
    },
    // btnRoot: {
    //     backgroundColor: 'green'  
    // },
    // btnLabel: {
    //     backgroundColor: 'red'
    // }
}))

const Header = () => {

    const classes =useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    {/* <Grid item sm={4} style={{border:'1px solid #fff'}}>
                    </Grid>
                    <Grid item sm={8} style={{border:'1px solid #000'}}>
                    </Grid> */}
                     <Grid item>
                         <InputBase 
                         placeholder="search..."
                         startAdornment={<SearchIcon fontSize="small"/>}
                         className={classes.searchInput}
                         />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        {/* <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}> */}
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color='primary'>
                                <ChatBubbleOutlineIcon fontSize="small"/>
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
