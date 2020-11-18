import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import Main from '../../components/main';

const Video = ({ video }) => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id)
  return (
    <Main>
      <div className="row">
        <div className="col-md-6.offset-md-3">   
          <div className="card">
            <div className="card-header text-center">
              
            </div>
            <div className="card-body text-center">
              <h3>
                {useRouter.id} {video.title}
              </h3>
              <p>{video.description}</p>
              <iframe width="420" height="315"
                src={video.attributes.url}>
              </iframe>
            </div>

          </div>
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