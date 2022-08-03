import CardList from '../components/CardList';
import {articles} from '../Articles'

const Home = () => {
  return (
    <CardList articles = {articles}/>
  );
}

export default Home;
