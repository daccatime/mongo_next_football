import React from 'react';

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
    <h2 className='list-head bg-gray-300'>premier League matches </h2>
    <ul className="bg-red-300 ">
    
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className=" bg-white">  Match week - {repo.Round} Date - {repo.Date}</span>  
           
             H {repo.["Team 1"]} vs A {repo.["Team 2"]}  
            <span className='repo-description'> {repo.FT}</span>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
export default List;