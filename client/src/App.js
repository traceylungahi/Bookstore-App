import './App.css';
import Header from './components/Header';
// import AddBook from './components/AddBook';
// import BookList from './components/BookList';
import BookPage from './components/BookPage';
import { useState, useEffect } from 'react';
import LogInPage from './components/LogInPage';
import NavBar from './components/NavBar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LogInPage onLogIn={setUser} />;
  return (
    <div className='App'>
      <NavBar user={user} setUser={setUser} />
      <Header />
      {/* <BookList /> */}
      <BookPage />
    </div>
  );
}

export default App;
