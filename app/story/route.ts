export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const chat_id = searchParams.get('chat_id')
    const story_id = searchParams.get('story_id')
    console.log(chat_id, story_id)
    const res = await fetch(`https://tgik6hea9d.execute-api.ap-south-1.amazonaws.com/prod/get_story?user_id=12345&story_id=${story_id}&chat_id=${chat_id}`)
    const data = await res.json()
    //console.log('data', data)
   
    return Response.json(data)
  }