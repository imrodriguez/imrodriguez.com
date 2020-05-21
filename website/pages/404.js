import menuService from 'services/menu'
import Head from 'components/Head'

export default (props) => (
  <div>
    <Head title="404 | Imanol Rodríguez de Maya"
        description="Parece que esta url no existe."/>
    <h1>No hemos encontrado esta Url</h1>
  </div>
)

export async function getStaticProps({ params }) {
    const menuItems = await menuService.get('main')

    return { props: { menuItems } }
}