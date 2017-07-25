const getVideoFilepath = R.compose(
  R.concat('/api/videos'),
  R.ifElse(
    R.propEq('isHD', true),
    R.prop('720p'),
    R.prop('480p')
  )
)

// const getVideoFilepath = video => {
//   const file = video.isHD ? video['720p'] : video['480p']
//   return `/api/videos/${file}`
// }

const video = {
  '720p': 'funny-video-hd.mp4',
  '480p': 'funny-video-480p.mp4',
  isHD: true
}
console.log(getVideoFilepath(video))

const getMessage = isWorkingTime => {
  const onlineMessage = 'We are online'
  const offlineMessage = 'We are offline'

  return R.ifElse(
    R.always(isWorkingTime),
    R.always(onlineMessage),
    R.always(offlineMessage)
  )()
  // return isWorkingTime ? onlineMessage : offlineMessage
}
