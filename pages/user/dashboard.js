

import { Button, Card, CardMedia, CardContent, Container, Grid, Typography, CardActions } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'




const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },

  CardMedia: {
    paddingTop: '56%'
  },

  buttonAdd: {
    margin:'30px auto',
    display: 'block',
  }

}))


export default function Home() {
  const classes = useStyles()

  return (
    <TemplateDefault>
    <Container maxWidth="sm" className={classes.container}>
      <Typography component="h1" variant='h2' align='center' >
        Minhas Ações
      </Typography>
      <Button variant="contained" color="primary" className={classes.buttonAdd}>Publicar nova ação</Button>
    </Container>

   <Container maxWidth='md'>
    <Grid container spacing='20'>
      <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardMedia
      className={classes.CardMedia}
      image={'https://source.unsplash.com/random'}
      title="Condominio São Paulo"
      />
    <CardContent>
      <Typography variant='h5' component="h2">
        Condominio Morumbi
      </Typography>
      <Typography>Condominio utiliza água para reuso.</Typography>
    </CardContent>
    <CardActions>
    <Button size="small" color="primary">Editar</Button>
    <Button size="small" color="primary">Remover</Button>
    </CardActions>
    </Card>
      </Grid>  

      <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardMedia
      className={classes.CardMedia}
      image={'https://source.unsplash.com/random'}
      title="Condominio São Paulo"
      />
    <CardContent>
      <Typography variant='h5' component="h2">
        Condominio Setin
      </Typography>
      <Typography>Condominio utiliza água para reuso.</Typography>
    </CardContent>
    <CardActions>
    <Button size="small" color="primary">Editar</Button>
    <Button size="small" color="primary">Remover</Button>
    </CardActions>
    </Card>
      </Grid>  

      <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardMedia
      className={classes.CardMedia}
      image={'https://source.unsplash.com/random'}
      title="Condominio São Paulo"
      />
    <CardContent>
      <Typography variant='h5' component="h2">
        Condominio Ipiranga
      </Typography>
      <Typography>Condominio utiliza água para reuso.</Typography>
    </CardContent>
    <CardActions>
    <Button size="small" color="primary">Editar</Button>
    <Button size="small" color="primary">Remover</Button>
    </CardActions>
    </Card>
      </Grid>  

      </Grid> 
   </Container>

   
    </TemplateDefault>
    
  )
}
