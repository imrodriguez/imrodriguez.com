import Head from 'components/Head'
import blogService from 'services/blog'
import menuService from 'services/menu'
import timelineService from 'services/timeline'
import projectService from 'services/project'
import headerService from 'services/header'
import whoamiService from 'services/whoami'
import Timeline from 'components/Timeline'
import Projects from 'components/Projects'
import Header from 'components/Header'
import Whoami from 'components/Whoami'
import Title from 'components/Title'
import { Section } from 'styles/global'

export default (props) => (
  <>
    <Head title="Home | Imanol Rodríguez de Maya" 
    description="Soy un desarrollador que ha pasado por varias experiencias diferentes y ahora enfocado en el desarrollo con un stack Javascript y frameworks Front-End."
  />
    <Header header={props.header} />
    <Section>
      <Title title={props.whoami[0].title} description="" />
      <Whoami whoami={props.whoami} />
    </Section>
    <Section>
      <Title title="Proyectos" description="Estos son algunos de los proyectos que voy realizando ya sea para obtener más conocimientos, como para trabajos y la comunidad." />
      <Projects projects={props.projects} limited />
    </Section>
    <Section>
      <Title title="Timeline" description="Una muestra de los trabajos, estudios, aprendizaje y eventos que más han marcado mi trayectoria personal." />
      <Timeline timeline={props.timeline} limited />
    </Section>
  </>
)

export async function getStaticProps() {
  const posts = await blogService.getAll()
  const timeline = await timelineService.highlighted()
  const menuItems = await menuService.get('main')
  const projects = await projectService.getHighlighted()
  const header = await headerService.get()
  const whoami = await whoamiService.get()

  return {
    props: {
      header,
      whoami,
      posts,
      menuItems,
      timeline,
      projects,
      NavTransparent: true
    },
  }
}