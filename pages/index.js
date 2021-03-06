import React, { useEffect, useState } from 'react';
//import axios from 'axios'
//import Layout from '../../src/components/Layout';
import List from '../src/components/List';
import withListLoading from '../src/components/Utils/withListLoading';
//import Navbar from '../../src/components/Navbar';

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
    
  
   
     
    </div>
  );
}
export default App;