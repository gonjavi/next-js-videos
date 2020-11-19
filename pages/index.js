import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main';
import VideosList from '../components/VideosList';
import Navigation from '../components/navigation';

const Index = props => {
  return (
    <div>
      <Head>
        <title>Videos</title>        
      </Head>    
      <Main>
        <h1>Videos</h1> 
        <VideosList videos={props.videos} />
      </Main>
      
      <footer className={styles.footer}>       
        Gonzalo               
      </footer>
    </div>
  )
}

export default Index;

Index.getInitialProps = async ctx => {
  const res = await fetch('https://videosapi-gon.herokuapp.com/api/v1/videos/')
  const data = await res.json();  
  return { videos: data.data  }
}

