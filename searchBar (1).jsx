import {makeStyles ,alpha, fade , InputBase} from "@material-ui/core"
import Search from '@material-ui/icons/Search';
const useStyles = makeStyles((theme)=>({
  search: {
    // position: 'relative',
    borderRadius: 1,
    backgroundColor: '#fff',
    // marginRight: theme.spacing(2),
    marginLeft: 10,
    width: 560,
    height: 36 ,
    display : 'flex',
    color: 'black',
    // paddingLeft: 1
  },
  searchIcon: {
    padding: theme.spacing(1, 2),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'blue'
  },
  inputRoot: {
    // color: 'inherit',
    fontSize: 'unset',
    width :'100%',
    paddingLeft: 7
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
  },
}))
function SearchBar() {
  const classes = useStyles();
    return (
        <div className="SearchBar">
            <div className={classes.search}>
              
            <InputBase style={{marginLeft: 8, fontSize: 13}}
              placeholder="Search for products, brand and more .... "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <div className={classes.searchIcon}>
              <Search/>
            </div> 
          </div>
        </div>
    );
}

export default SearchBar;