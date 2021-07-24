import Header from "../header";
import Footer from "../footer";

import List from '/src/components/List.js';
import withListLoading from '/src/components/withListLoading';

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
        <h1>xxxOld premier league games </h1>
      </div>
      </Layout>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      
        
        </div>        
        
  );
  
}



function Layout ({children}) {
    return (
        <div>
            <Header/>
            {children}
          
<div className="text-blue mr-3 ml-4 mt-4 mb-2  border-blue px-2 sm:px-3 md:px-10 lg:px-0 xl:pl-10 w-full border lg:w-10-12 xl:w-8/12"/>   
     

  <div className="p-4 m-4 bg-red-600">
            <h2 className="text-2xl font-bold text-white">Tmp layout </h2>
        </div> 
        <Footer/>
</div>



)}


export default Layout