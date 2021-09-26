import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-5 py-5">
              <div className="d-flex justify-content-center align-items-center">
                <div className="homeContent">
                  <h1 className="mb-5 homeContentTitle">
                    <span className="p-2 Now rounded">
                      Money <span className="rounded">Heist</span>
                    </span>
                  </h1>
                  <p className="">
                    Money Heist (Spanish: La casa de papel, "The House of
                    Paper") is a Spanish heist crime drama television series
                    created by Álex Pina. The series traces two long-prepared
                    heists led by the Professor (Álvaro Morte), one on the Royal
                    Mint of Spain, and one on the Bank of Spain, told from the
                    perspective of one of the robbers, Tokyo (Úrsula Corberó).
                    The narrative is told in a real-time-like fashion and relies
                    on flashbacks, time-jumps, hidden character motivations, and
                    an unreliable narrator for complexity.
                  </p>
                  <div className="Btn-groph d-flex mt-4">
                    <button className="btn btn-danger me-4 fs-6 py-2">
                      Sing UP Now
                    </button>
                    <button className="btn btn-light fs-6 py-2">
                      Sing In Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="homeImg m-5 p-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 HomeBottom">
          <div className="col-lg-12 text-center">
            <h3>Name Of Money Heist Charecter</h3>
            <p className="w-75 mx-auto">
              The series was initially intended as a limited series to be told
              in two parts. It had its original run of 15 episodes on Spanish
              network Antena 3 from 2 May 2017 through 23 November 2017. Netflix
              acquired global streaming rights in late 2017. It re-cut the
              series into 22 shorter episodes and released them worldwide,
              beginning with the first part on 20 December 2017, followed by the
              second part on 6 April 2018.
            </p>
            <h5>
              Our Budget :&nbsp;&nbsp;&nbsp;
              <a href="/" className="text-light">
                100Million
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div class="input-group mb-3 w-50 mx-auto">
          <input
            className=""
            type="text"
            class="form-control"
            placeholder="Name Of Charecter"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text btn btn-danger" id="basic-addon2">
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
