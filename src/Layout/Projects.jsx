import React from 'react'

function Projects() {
  return (
    <div id="projects" className="h-fit flex items-center justify-center px-80 py-40">
      <div className="container">
        <h1 className="uppercase text-4xl font-semibold leading-10 text-secondary text-center pb-20">Projects</h1>
        <div className="project-wrapper">
          <div className="grid grid-cols-1 grid-rows-1 gap-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">Tsukiji Sushi Fusion</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost">Listen</button>
                </div>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:flex-row-reverse">
              <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">QN Tsukiji Sushi Fusion</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-left">
                  <button className="btn btn-ghost">Listen</button>
                </div>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">Mimik Sushi</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects