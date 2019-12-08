// import axios from 'utils/axios'
// import { useSelector } from 'react-redux';

class accountService {

  async login(uid) {
    console.log("Within the login function");

    // const children = _.get(data, 'data.children');
    // if (!children) {
    //   throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
    // }
    // return _.map(children, (subreddit) => {
    //   // abstract away the specifics of the reddit API response and take only the fields we care about
    //   return {
    //     title: _.get(subreddit, 'data.display_name'),
    //     description: _.get(subreddit, 'data.public_description'),
    //     url: _.get(subreddit, 'data.url')
    //   }
    // });

    //Testing for account api Service
    return true;
  }

}

export default new accountService();
