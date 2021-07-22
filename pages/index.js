import React, { useEffect, useState } from 'react';
//import axios from 'axios'


import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/football-oyono/service/GetFootballResults/incoming_webhook/GetFootballResultsHooks`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚 xxxx
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;