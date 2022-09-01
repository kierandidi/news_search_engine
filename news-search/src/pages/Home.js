import CardList from '../components/CardList';
// import {articles} from '../Articles'

const Home = ({articles}) => {
  return (
    <CardList articles = {articles}/>
  );
}

export default Home;
