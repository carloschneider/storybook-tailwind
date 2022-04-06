type AppProps = {
  title?: String
}

const App = ({ title = 'Hello world' }: AppProps) => <h1>{title}</h1>

export default App;
