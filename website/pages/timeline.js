import Head from 'components/Head'
import menuService from 'services/menu'
import timelineService from 'services/timeline'
import Timeline from 'components/Timeline'
import Title from 'components/Title'

export default (props) => (
    <>
        <Head title="Timeline | Imanol Rodríguez de Maya"
        description="Una muestra de los trabajos, estudios, aprendizaje y eventos que más han marcado mi trayectoria personal."
        url={document.URL} />
        <Title title="Timeline" description="Una muestra de los trabajos, estudios, aprendizaje y eventos que más han marcado mi trayectoria personal." />
        <Timeline timeline={props.timeline} />
    </>
)

export async function getStaticProps() {
    const menuItems = await menuService.get('main')
    const timeline = await timelineService.getAll()

    return {
        props: {
            menuItems,
            timeline
        },
    }
}