import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {formatISO9075} from 'date-fns'
import Image from "../Image"


export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams()
    useEffect(() => {
      console.log(id)
        fetch(`http://localhost:4000/post/${id}`).then(response => {response.json().then(postInfo => {setPostInfo(postInfo);
             })
          })
      })

    if(!postInfo) return ''

    return(
      <div className="post-page">
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt),)}</time>
        <div className="author">{postInfo.author.username}</div>
      <div className="image">
          <Image src={postInfo.cover} alt=''/>
      </div>
      
      <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
  </div> 
    )
}