function Twitter() {
  let um = new Map(); // userMap {userId: [tweetId, time]}
  let fm = new Map(); // followerMap {followerId: Set{followeeId}}

  let time = 0;

  return {
    postTweet,
    getNewsFeed,
    follow,
    unfollow
  }

  function postTweet(userId, tweetId) {
    time++;
    if(!um.has(userId)) um.set(userId, []);
    um.get(userId).push([tweetId, time]);
    return um;
  }

  function getNewsFeed(userId) {
    res = um.get(userId) || [];
    fe = fm.get(userId) || new Set();
    for(followeeId of fe) {
      res = res.concat(um.get(followeeId)|| [])
    }
    res.sort((data1,data2) => data2[1] - data1[1]);
    return res.slice(0,10).map(data => data[0])

  }

  function follow(followerId, followeeId) {
    if(!fm.has(followerId)) fm.set(followerId, new Set());
    fm.get(followerId).add(followeeId);
    return followeeId + " follows " + followeeId;
  }

  function unfollow(followerId, followeeId) {
    if(fm.has(followerId)) {
      fm.get(followerId).delete(followeeId);
      return "Succesfully unfollowed your ex"
    }
    return "Nothing to be unfollowed!"

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
