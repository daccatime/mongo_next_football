import React, { useEffect, useState } from 'react';
//import axios from 'axios'
import Layout from '../src/components/Layout';

import Dashboard from "../src/components/TransactionDashboard";
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
     
     <div className="flex flex-col h-screen justify-between relative h-64 m-8 overflow-hidden rounded-lg bg-red-600"> 
  <section className="w-full md:w-9/12 xl:w-8/12">
    <span className="px-6 py-8 font-bold uppercase tracking-widest">Atomic</span>
    <h1 className="px-6 py-8 text-3xl lg:text-5xl font-bold text-white">
      Tail<br/>Design
    </h1>
    <p className="px-6 py-8 font-bold mb-1">The Design is in the details...</p>
    <p className="px-6 py-8 ">Lorem ipsum dolor sit amet...</p>
  </section>
    </div>
      
      
      </Layout>
     
    </div>
  );
}
export default App;