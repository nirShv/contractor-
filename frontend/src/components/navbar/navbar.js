import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Toolbar, Typography,Button } from '@material-ui/core'

import useStyles from './styles'
import logo from '../../images/logo.jpg'

const Navbar = () => {

    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <img className={classes.image} src={logo} alt='logo' height='80' />
                <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>שוורצברג הנדסה בע"מ</Typography>
            </div>
            {/* <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.chartAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>{}}>Logout</Button>
                    </div>
                    ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign in</Button>
                    )}
            </Toolbar> */}
        </AppBar>
    )
}

export default Navbar