import { useState } from "react";
import Main from '../components/main';
import Head from 'next/head';

const RegisterVideo = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [year, setYear] = useState(Date);
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (title, description, url, year, author) => {
    try {
      await axios.post('https://videosapi-gon.herokuapp.com/api/v1/videos/',
      { 
        title,
        description,
        url, 
        author,
        year,         
      });
      props.history.push('/');
    } catch (err) {
      setError(err);
      console.log(error)
    }
  }
  let displayError;
  if (error) {
    displayError = <div>{error}</div>;
  }
  return (
    <div className="container">
      
      <Head>
        <title>Register Video</title>
      </Head>      
      <Main>
        <form onSubmit={(e) => submitHandler(title, description, url, year, author)}>
          <label>
            title:
            <input type="text" name="title" onChange={e => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={e => setDescription(e.target.value)} />
          </label>
          <label>
            Embed youtube Url:
            <input ty="text" name="url" onChange={e => setUrl(e.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" name="author" onChange={e => setAuthor(e.target.value)} />
          </label>
          <label>
            Date:
            <input type="date" name="year" onChange={e => setYear(e.target.value)} />
          </label>
          
          <input type="submit" value="submit" />
        </form>
      </Main>
    </div>
  );
}

export default RegisterVideo;
