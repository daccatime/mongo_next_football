import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>premier League matches 2019-2020</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span> Match week - {repo.Round}</span>
            <span> Date - {repo.Date}</span>
           
            <span> home team {repo.["Team 1"]}</span> VS 
             <span>away team {repo.["Team 2"]}</span> Score 
            <span className='repo-description'> {repo.FT}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;