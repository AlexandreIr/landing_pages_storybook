import * as Styled from './styles';

function App() {

  const handleClick = (e) =>{
    e.target.innerText == "Hello World" ? e.target.innerText = "World Hello" : e.target.innerText = "Hello World";
  }

  return (
    <>
      <Styled.Wrapper>
        <h1 onClick={(e)=>handleClick(e)}>Hello World</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Reiciendis ipsam, corporis explicabo a totam impedit nesciunt. Veniam atque ducimus dolore,
          veritatis libero expedita laboriosam voluptate minima obcaecati iste quibusdam tenetur.</p>
      </Styled.Wrapper>
    </>
  )
}

export default App
