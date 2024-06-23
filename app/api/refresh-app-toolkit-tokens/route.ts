import { OAuth2Client } from 'google-auth-library'

const appToolkitOAuth2Client = new OAuth2Client({
  clientId: process.env.APP_TOOLKIT_GOOGLE_ID,
  clientSecret: process.env.APP_TOOLKIT_GOOGLE_SECRET,
})

export async function POST(request: Request) {
  const tokens = await request.json()

  if (!tokens) {
    return Response.json({ message: 'Invalid request' }, { status: 400 })
  }

  appToolkitOAuth2Client.setCredentials(tokens)

  try {
    const refreshed = await appToolkitOAuth2Client.refreshAccessToken()

    return Response.json(refreshed.credentials)
  } catch (error) {
    console.error(error)
    return Response.json(
      error instanceof Error ? error : { message: 'Internal Server Error' },
      { status: 500 }
    )
  } finally {
    appToolkitOAuth2Client.setCredentials({})
  }
}
