import axios from 'axios'

export default {
  all () {
    return axios.get('https://www.reddit.com/r/memexico.json')
  }
}
