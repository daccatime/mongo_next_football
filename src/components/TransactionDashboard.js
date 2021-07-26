import React from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-wsjzb"
});

const chart1 = sdk.createChart({
  chartId: "db2577f4-d17d-4f3c-8c67-571ad4bf112e",
  height: "400px",
  theme: "light"
});

class TransactionDashboard extends React.Component {
  constructor(props) {
      super(props);

      this.state = {filterTitle: "liverpool"}
  }

  async componentDidMount() {
    await chart1.render(document.getElementById("mongochart1"));
  }

  render() {
    return(
        <div>
           
           
            <div style={{display: "flex", justifyContent: "space-around", width: "70%"}}>
                <div style={{minWidth: "900px"}} id="mongochart1" />
          
           
        </div>
      </div>
    );
  }
} 

export default TransactionDashboard;