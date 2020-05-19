import Head from '../components/Head'
import pageService from '../services/page'
import menuService from '../services/menu'

export default (props) => (
    <div>
        <Head title="Home" />
        <h1>{props.page.title}</h1>
    </div>
)

export async function getStaticPaths() {
    const pages = await pageService.getAll()
    const paths = pages.map(page => `/${page.path}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const page = await pageService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { page, menuItems, params } }
}