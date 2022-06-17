import {Bom, Container, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { borderTop, containerClasses } from "@mui/system"

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: '1px solid ${theme.palette.divider}'
    }
}))



const Footer = () => {
    const classes = useStyles()

return (
    <Container maxWidth="lg" component="footer" className={containerClasses.footer}>
        <Grid container spacing={3}>
         <Grid item xs={6} sm={3}>
           
            </Grid>        
            </Grid>  
       

    </Container>

)

}

export default Footer