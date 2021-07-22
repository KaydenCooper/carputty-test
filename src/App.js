
import './src/custom.scss';

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center m-auto">
        <div className="col-12 col-md-5 bg-light p-4">
          <div className="card m-4 p-3 ">
            <div className="card-body text-align-left">
              <div className="progress progress-position">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              <h1 className="card-title h1-font">Only four days left to fund this project</h1>
              <p className="font-size card-text">Join the { } other donors who have already supported this project.</p>
        <div className="input-group mb-1">
  <input type="text" className="form-control py-3" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
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

export default App;
