import Head from 'components/Head'
import menuService from 'services/menu'
import projectService from 'services/project'
import { Container, Button } from 'styles/global'

export default (props) => (
    <>
        <Head title={`${props.project[0].title} | Imanol Rodríguez de Maya`}
        description={props.project[0].description}
        ogImage={`${process.env.API_URL}${props.project[0].banner}`}
        />
        <img src={`${process.env.API_URL}${props.project[0].banner}`} alt={props.project[0].title} style={{ width: '100%', objectFit: 'cover', height: '30vh'}} />
        <Container align="center">
            <h1>{props.project[0].title}</h1>
            <p>{props.project[0].description}</p>
            {props.project[0].web !== '' 
            ? <a rel="noreferrer" target="_blank" href={props.project[0].web}><Button>Sitio web</Button></a>
            : <></>
            }
            {props.project[0].repository !== '' 
            ? <a rel="noreferrer" target="_blank" href={props.project[0].repository}><Button>Repositorio</Button></a>
            : <></>
            }
        </Container>
        <Container>
            <div dangerouslySetInnerHTML={{ __html: props.project[0].body }}></div>
        </Container>
    </>
)

export async function getStaticPaths() {
    const projects = await projectService.getAll()
    const paths = projects.map(project => `/project/${project.path}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const project = await projectService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { project, menuItems, params, NavTransparent: project[0].banner === '' ? false : true } }
}