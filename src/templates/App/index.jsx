import * as Styled from './styles';
import { handleClick } from './handleClick';

function App() {


  return (
    <>
      <Styled.Wrapper>
        <h1 onClick={(e)=>handleClick(e)}>Hello World</h1>
        <p onClick={(e)=>handleClick(e)}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Reiciendis ipsam, corporis explicabo a totam impedit nesciunt. Veniam atque ducimus dolore,
          veritatis libero expedita laboriosam voluptate minima obcaecati iste quibusdam tenetur.</p>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, 
          neque. Porro alias autem dicta,
          error maxime, magnam eum unde quas earum quis incidunt cupiditate corrupti officiis maiores neque cum minus.</h2>
      </Styled.Wrapper>
    </>
  )
}

export default App
