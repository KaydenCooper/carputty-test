import React from 'react';
import './src/custom.scss';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        progress: 0,
        donations: 0,
        donors: 0
      }
    }
  render() {

    return (
      <div className="App">
        <div className="row justify-content-center m-auto">
          <div className="col-12 col-md-5 bg-light p-4">
            <div className="card m-4 bg-lightblue">
              <p className="p-1 mx-1 mb-0 text-blue">$ <b>{this.state.donations}</b> still needed to fund this project</p>
            </div>
            <div className="card m-4 p-3 ">
              <div className="card-body text-align-left">
                <div className="progress progress-position">
                  <div className="progress-bar" style={{ width: `${this.state.progress}` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5000"></div>
                </div>
                <h1 className="card-title h1-font">Only four days left to fund this project</h1>
                <p className="font-size card-text">Join the <b>{this.state.donors }</b> other donors who have already supported this project.</p>
                <div className="input-group mb-1">
                
                  <input type="number" className="form-control py-3" placeholder="$" aria-label="$" aria-describedby="button-addon2" />
                
                  <div className="input-group-append">
                    <button className="btn btn-secondary py-3" type="button" id="button-addon2">Give Now</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
