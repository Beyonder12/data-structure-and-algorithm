function Twitter() {
  let um = new Map() //user map: {userId: [tweetId, timeStamp]}
  let fm = new Map(); //user/follower map: {followerId: Set{followeeid, .....}}
  let t = 0; // timestamp to maintain the most recent

  return {
    postTweet,
    getNewsFeed,
    follow,
    unfollow,
  }

  function postTweet(userId, tweetId) {
    t++; // if post, record the timestamp moveon
    if (!um.has(userId)) um.set(userId, []);
    um.get(userId).push([tweetId, t]);
  }

  function getNewsFeed(userId) { // || means set a default if not exists,
    let res = um.get(userId) || [] // collect this user persona tweets
    let fe = fm.get(userId) || new Set(); // this user's all followee
    for (const e of fe) { //collect this user's all followee's tweets
      res = res.concat(um.get(e) || [])
    }
    res.sort((x, y) => y[1] - x[1]); //sort based on timestamp in descending order, larger timestamps means most recent
    return res.slice(0,10).map(x => x[0])
  }

  function follow(followerId, followeeId) {
    // add followeeid to followerId's Set, use Set here is easy to remove compared to Array
    if(!fm.has(followerId)) fm.set(followerId, new Set());
    fm.get(followerId).add(followeeId);
  }

  function unfollow(followerId, followeeId) {
    if(fm.has(followerId)) fm.get(followerId).delete(followeeId); // remove followeeId in follower map
  }
}

twitter = new Twitter()
console.log(twitter.um)
console.log(twitter.postTweet('user001','tweet001'))
console.log(twitter.postTweet('user002','tweet002'))
console.log(twitter.postTweet('user003','tweet003'))
console.log(twitter.postTweet('user004','tweet004'))
console.log(twitter.follow('user001','user002'))
console.log(twitter.follow('user001','user003'))
console.log(twitter.follow('user001','user004'))
console.log(twitter.getNewsFeed('user001'))
console.log(twitter.unfollow('user001','user002'))
console.log(twitter.getNewsFeed('user001'))
