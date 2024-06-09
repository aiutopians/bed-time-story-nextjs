export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const body = await request.json()
  console.log('body data', body)
  const id = searchParams.get('id')
  // let reqData = {
  //   "user_id": "123456",
  //   "chat_id": "dd16f615-7a21-4f47-809f-87188c38b1d1",
  //   "no_of_words": 500,
  //   "language": "English",
  //   "target_audience": "Children",
  //   "character": [
  //       {
  //           "name": "Raj",
  //           "description": "friendly dragon"
  //       },
  //       {
  //           "name": "Jason",
  //           "description": "hungry giant"
  //       }
  //   ],
  //   "adventure": "eating lots of yummy food"
  // }
  const res = await fetch(`https://tgik6hea9d.execute-api.ap-south-1.amazonaws.com/prod/create_story`, {
    method : 'POST',
    body: JSON.stringify(body)
  })
  const data = await res.json()
  //console.log('data', data)
 
  return Response.json(data)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const user_id = searchParams.get('user_id')
  const res = await fetch(`https://tgik6hea9d.execute-api.ap-south-1.amazonaws.com/prod/list_chat?user_id=${user_id}`)
  const data = await res.json()
  console.log('data', data)
 
  return Response.json(data)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const user_id = searchParams.get('user_id')
  const chat_id = searchParams.get('chat_id')
  const res = await fetch(`https://tgik6hea9d.execute-api.ap-south-1.amazonaws.com/prod/delete_chat?user_id=${user_id}&chat_id=${chat_id}`, {method: 'DELETE'})
  const data = await res.json()
  console.log('delete data', data)
 
  return Response.json(data)
}
