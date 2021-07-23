import React from 'react';
import './src/custom.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
      this.state = {
        progress: '',
        donations: 5000,
        donors: 0,
        value: ''
      }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
     
    })
  }
  submit(e) {
    e.preventDefault()
  }
  render() {
    if (this.state.value >= 5) {
    return  <div className="App">
        <div className="row justify-content-center m-auto">
          <div className="col-12 col-md-5 bg-light p-4">
            <div className="card m-4 bg-lightblue">
              <p className="p-1 mx-1 mb-0 text-blue">$ <b>{this.state.donations}</b> still needed to fund this project</p>
            </div>
            <div className="card m-4 p-3 ">
              <div className="card-body text-align-left">
                <div className="progress progress-position progress-background">
                  <div className="progress-bar" style={{ width: this.state.progress + '%'}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5000"></div>
                </div>
                <h1 className="card-title h1-font">Only four days left to fund this project</h1>
                <p className="font-size card-text">Join the <b>{this.state.donors }</b> other donors who have already supported this project.</p>
                <div className="input-group mb-1">
                
                  <input type="number" name="donation" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control py-3 font-weight-bolder" placeholder="Donate Here" aria-label="$" aria-describedby="button-addon2" />
                
                  <div className="input-group-append">
                    <button disabled={false} className="btn btn-secondary py-3 hover" type="button" id="donation-button" onClick={()=> this.setState({progress: this.state.donations / 5000 * 100, donors: this.state.donors + 1, donations: this.state.donations - this.state.value})}>Give Now</button>
                  
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> }
    else {
      return <div className="App">
        <div className="row justify-content-center m-auto">
          <div className="col-12 col-md-5 bg-light p-4">
            <div className="card m-4 bg-lightblue">
              <p className="p-1 mx-1 mb-0 text-blue">$ <b>{this.state.donations}</b> still needed to fund this project</p>
            </div>
            <div className="card m-4 p-3 ">
              <div className="card-body text-align-left">
                <div className="progress progress-position progress-background">
                  <div className="progress-bar" style={{ width: this.state.progress + '%'}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5000"></div>
                </div>
                <h1 className="card-title h1-font">Only four days left to fund this project</h1>
                <p className="font-size card-text">Join the <b>{this.state.donors }</b> other donors who have already supported this project.</p>
                <div className="input-group mb-1">
                
                  <input type="number" name="donation" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control py-3 font-weight-bolder" placeholder="Donate Here" aria-label="$" aria-describedby="button-addon2" />
                
                  <div className="input-group-append">
                    <button disabled={true} className="btn btn-secondary py-3 hover" type="button" id="donation-button" onClick={()=> this.setState({progress: this.state.donations / 5000 * 100, donors: this.state.donors + 1, donations: this.state.donations - this.state.value})}>Give Now</button>
                  
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    }

    
  }
}
export default App;
