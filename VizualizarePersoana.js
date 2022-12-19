import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

function VizualizarePersoana() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Box>
            <Button
              href='/'
              startIcon={<AgricultureIcon />}
              style={{
                color: 'black',
                fontFamily: 'monospace',
                fontSize: '25px',
                margin: '0px 20px 0px 20px',
              }}
            >
              S.I.G.L.A.
            </Button>
            <Button
              edge='start'
              style={{
                color: 'black',
                size: 'large',
                fontSize: '18px',
                margin: '0px 20px 0px 20px',
              }}
            >
              TERENURI
            </Button>
            <Button
              edge='start'
              style={{
                color: 'black',
                size: 'large',
                fontSize: '18px',
                margin: '0px 20px 0px 20px',
              }}
            >
              LICITATII
            </Button>
            <Button
              edge='start'
              style={{
                color: 'black',
                size: 'large',
                fontSize: '18px',
                margin: '0px 20px 0px 20px',
              }}
            >
              OFERTE
            </Button>
            <Button
              edge='start'
              style={{
                color: 'black',
                size: 'large',
                fontSize: '18px',
                margin: '0px 20px 0px 20px',
              }}
            >
              CERERI
            </Button>
          </Box>
          <Box marginLeft={90}>
            <Button size='large' color='inherit'>
              <MailIcon />
            </Button>
            <Button size='large' color='inherit'>
              <NotificationsIcon />
            </Button>
            <PopupState variant='popover' popupId='demo-popup-menu'>
              {(popupState) => (
                <React.Fragment>
                  <Button
                    size='large'
                    color='inherit'
                    {...bindTrigger(popupState)}
                  >
                    <AccountCircle />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profil</MenuItem>
                    <MenuItem onClick={popupState.close}>Contul Meu</MenuItem>
                    <MenuItem onClick={popupState.close}>Setari</MenuItem>
                    <MenuItem onClick={popupState.close}>Deconectare</MenuItem>
                    <MenuItem onClick={popupState.close}>Ajutor</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default VizualizarePersoana
