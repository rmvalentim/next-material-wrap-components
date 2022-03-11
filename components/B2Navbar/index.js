import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styles from './B2Navbar.module.css'

export default function B2Navbar() {

    return (
        <AppBar position="static" className={styles.container}>
            <Toolbar>                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Material UI Component Wrap - Next.Js
                </Typography>                
            </Toolbar>
        </AppBar>
    )
}