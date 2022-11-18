import './App.css'
import { gql, useQuery } from '@apollo/client'
import { Dog } from './interfaces/Dog';

const DOGS = gql`
  query Dogs {
    dogs {
      description
      id
      name
      thumbnail {
        url
      }
    }
  }
`;

function App(): JSX.Element {
  const { data, loading, error } = useQuery(DOGS);

  if (loading) { return <div>ロード中・・・</div> };
  if (error) { return <div>エラー：{error.message}</div> };
  
  return (
    <div className="App">
      <h1>Dogs Image App</h1>
      <div className="dogsContainer">
        {data.dogs.map((dog: Dog) => (
          <div key={dog.id}>
            <div className="dogCard">
              <img src={dog.thumbnail.url} alt=""/>
              <p>{ dog.name }</p>
              <p>{ dog.description }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
