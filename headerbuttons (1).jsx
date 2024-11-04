import { Box, Button, makeStyles,Badge, Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles({
    login: {
        background: '#ffffff',
        textTransform: 'none',
        color: "#2874f0",
        fontWeight: 600,
        padding: 5 ,
        boxShadow: 'none'
    },
    wrapper: {
        marginLeft: 'auto ',
        marginRight: 'auto ',
        display: 'flex',
        '&>*': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'center'
        }
    },
    container:{
        display: 'flex'
    }
})
const HeaderButtons = () => {
    const classes = useStyles();
    return (
        // <div className="HeaderButtons">
        <Box className={classes.wrapper}>
            <Button variant='contained' className={classes.login}> Login</Button>
            <Typography style={{marginTop: 4 , fontSize: 15}} >More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft: 10}} >cart</Typography>
            </Box>
        </Box>
        // </div>
    )
}
export default HeaderButtons;