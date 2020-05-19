import Head from '../../components/Head'
import blogService from '../../services/blog'
import menuService from '../../services/menu'

export default (props) => (
    <div>
        <Head title="Home" />
        <Nav links={props.menuItems} />
        <h1>{props.post.title}</h1>
    </div>
)

export async function getStaticPaths() {
    const posts = await blogService.getAll()
    const paths = posts.map(post => `/blog/${post.path}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = await blogService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { post, menuItems, params } }
}