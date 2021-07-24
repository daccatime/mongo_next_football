import React, { useEffect, useState } from 'react';
//import axios from 'axios'
import Layout from '../src/components/Layout';


import List from '../src/components/List';
import withListLoading from '../src/components/withListLoading';
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
     <Layout>
      <div className='container'>
        <h1>main index page  - Old premier league games </h1>
      </div>
      </Layout>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
     
    </div>
  );
}
export default App;