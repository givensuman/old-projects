import * as Kiwi from '../../src'

function App() {

  return (
    <div>
      <Kiwi.Box p={'50px'}>
        <Kiwi.Col 
        p={'15px'}
        centerX
        bottom
        height={'500px'}
        csx={`
          color: white;
          background-color: indigo;
          border-radius: 0.5em;
        `}>
        <h1>Welcome to sandbox</h1>
        <Kiwi.Button onClick={() => alert('hi')} type="primary" size='sm' mt={'15px'}>Click to start</Kiwi.Button>
        </Kiwi.Col>
      </Kiwi.Box>
      <Kiwi.Badge type="secondary" mx="auto">Warning</Kiwi.Badge>
      <Kiwi.Alert type="warning" title="Uh oh" subtitle="You're not supposed to be here" mx="auto" csx={`
        &:hover {
          background-color: salmon;
        }
      `} />
    </div>
  )
}

export default App
