import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../index.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
/* import { useReady, useWallet } from '../dapp'; */

const HeaderBar = (props) => {
  const ready = false; /* useReady(); */
  const wallet = true; /* useWallet(); */
  const minWidth = useMediaQuery('(min-width:600px)');
  var visible = minWidth?'visible':'hidden';
  return (
    <AppBar position="static" color="default" style={{
      boxShadow: "none",
      opacity: 1,
      /* backgroundColor: '#212121' */ }}>
      <Toolbar>
        <Typography variant="h6" style={{ position: 'absolute', fontFamily : 'Alegreya Sans SC, sans-serif' }}>
          Completium
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h6" color="secondary" style={{
              visibility: visible,
              textAlign: 'center',
              }}>
              {props.appTitle}
            </Typography>
          </Grid>
        </Grid>
        { ready? (
            <div></div>
          ): (wallet? (
            <Button variant="contained" color="secondary"
              disableElevation
              size="small"
              style={{ position: 'absolute', right: '1%' }}
              onClick={props.handleConnect}>
              connect to wallet
            </Button>
          ):(
            <Link href="https://thanoswallet.com/" rel="noopener" underline="none" style={{
              position: 'absolute',
              right: '1%'
            }}>
              <Button variant="contained" size="small" disableElevation
                style={{
                  backgroundColor: '#ed8936',
                  color: 'white',
                  fontWeight: 'bold',
                   }}>
                Install Thanos
              </Button>
            </Link>
          ))}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar