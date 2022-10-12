import './App.css';
import Header from './components/Header';
// import AddBook from './components/AddBook';
// import BookList from './components/BookList';
import BookPage from './components/BookPage';

function App() {
  return (

    <div classname='App'>
      <Header />
      {/* <BookList /> */}
      <BookPage />
    </div>
  );
}

export default App;
