import token from 'basic-auth-token'

export default () => {
    return {
        headers: {
            "content-type": "aplication/json",
            "authorization": `Basic ${token(process.env.DRUPAL_USER,process.env.DRUPAL_PASSWD)}`
        }
    }
}