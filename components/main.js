import Navigation from "../components/navigation";
import Head from 'next/head';

const Main = props => {
  return (
    <div>
      <Head>        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
      </Head>
      <Navigation />
      <div className="container p-4">
        {props.children}
      </div>
    </div>
  )
}

export default Main;