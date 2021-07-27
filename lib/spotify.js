import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

// const client_id = 'f42ae57ec93142b0b4017936f75fa65e'
// const client_secret = '8dbf7e582f154d3e86cc1f0c4790da5f'
// const refresh_token =
//   'AQDXBwivDQx0clMXV43YnMVhy63voOS8Ewkg1oN4-6_6l5R5CPDqsmSm6Tc3zunGG8KCTY__VocID57RsoqNOWoL8Oqh53gye5wBBJ910fMfkbjUOr13Ha6Err3HZm_ejKg'

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
console.log('BASIC', basic)
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
