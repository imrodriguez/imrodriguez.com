import Head from 'components/Head'
import menuService from 'services/menu'
import projectService from 'services/project'
import Projects from 'components/Projects'
import Title from 'components/Title'

export default (props) => (
    <>
        <Head title="Proyectos | Imanol Rodríguez de Maya"
        description="Algunos de los proyectos que voy realizando ya sea para obtener más conocimientos, como para trabajos y la comunidad."
        url={document.URL} />
        <Title title="Proyectos" description="Algunos de los proyectos que voy realizando ya sea para obtener más conocimientos, como para trabajos y la comunidad." />
        <Projects projects={props.projects} />
    </>
)

export async function getStaticProps() {
    const menuItems = await menuService.get('main')
    const projects = await projectService.getAll()

    return {
        props: {
            menuItems,
            projects
        },
    }
}