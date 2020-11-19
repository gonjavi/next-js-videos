import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import Main from '../../components/main';

const Video = ({ video }) => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <Main>
      <div className="row">
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">   
          
            <div className="text-center">
              <h3>
                {useRouter.id} {video.attributes.title}
              </h3>
              <p>{video.attributes.description}</p>
              
            </div>
            <iframe width="420" height="315"
                src={video.attributes.url}>
              </iframe>
         
        </div> 
      </div>
    </Main>
  )
}

Video.getInitialProps = async ctx => {
  const res = await fetch(`https://videosapi-gon.herokuapp.com/api/v1/videos/${ctx.query.id}`)
  const data = await res.json();  
  return { video: data.data  }
}

export default Video;