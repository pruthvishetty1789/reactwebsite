import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import HeaderButtons from './headerbuttons'
// import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
const useStyles = makeStyles({
    header: {
        background: 'blue',
        height: 55
    },
    logo: {
        width: 70
    },
    subURL: {
        width: 15,
        margin: 3,
        // height: 
    },
    container: {
        display: 'flex'
    },
    component :{
        marginLeft: 160 ,
        fontSize :12 
    },
    subheading :{
        // height :2 ,
        font : 'small-caption',
        // fontSize : 5 ,
        fontStyle : 'italic'
    }
});
const ToolBar = withStyles({
    root:{
        minHeight: 55 
    }
})(Toolbar);
const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div className="Header">
            {/* <p>sdfsd</p> */}
            <AppBar className={classes.header}>
                <ToolBar>
                    <Box className={classes.component}>
                        <img src={logoURL} className={classes.logo} />
                        <Box className={classes.container}>
                            <Typography className={classes.subheading} sx={{ lineHeight: 1 },{ fontSize : 11}}>Explore <span style={{color: '#ffe500'}}>Plus</span></Typography>
                            <img src={subURL} className={classes.subURL} alt="" />
                        </Box>
                    </Box>
                    <SearchBar/>
                    <HeaderButtons/>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header;