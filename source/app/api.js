import Axios from 'axios';

const base_url = '';

async function connect (config) {
  //config.headers = config.header ? Object.assign({}, config.header, {'Access-Control-Allow-Origin': '*'}) : {'Access-Control-Allow-Origin': '*'}
  config.url = base_url + config.url;
  const response = await Axios(config);
  return response.data;
}

const post = {
  get_list: (page = 1) => {
    return connect({
      method: 'get',
      url: `https://www.taringa.net/apiv7/feed/global?count=20&filter=article&after=23r3rg&sort=bigbang1d&page=${page}`,
    });
  },
  get_single: (id) => {
    return connect({
      method: 'get',
      url: 'https://www.taringa.net/apiv7/story/'+id,
    })
  },
}

const user = {
  get_single: (username) => {
    return connect({
      method: 'get',
      url: `https://www.taringa.net/apiv7/user/${username}/about`,
    })
  },
  get_user_post: (username) => {
    return connect({
      method: 'get',
      url: `https://www.taringa.net/apiv7/user/${username}/feed?count=20&filter=article`,
    })
  },
  get_comments (username){
    return connect ({
      method: 'get',
      url: `https://www.taringa.net/apiv7/user/${username}/comments?count=20`
    })
  }
}

const shout = {
  get_list (page = 1) {
    return connect({
      method: 'get',
      url: `https://www.taringa.net/apiv7/feed/global?count=20&filter=image&page=${page}`,
    })
  }
}
export default {
  post,
  user,
  shout,
};
