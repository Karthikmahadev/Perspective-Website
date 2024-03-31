import React from 'react'
import "../Styles/HomePage.css";
const Moviediv = () => {
  return (
      <>
      <div className='EnitreBox'>

      <div class="artistic flex mt-72 justify-center bg-gray-100">
      <div class="artistic1 flex-initial mt-10 flex flex-col items-center">
          <img className='artistic1img w-5/6 h-3/4 mt-16 ml-16' src='https://images.unsplash.com/photo-1626243048879-51f8d9818566?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <h1 className="firstdiv text-left text-2xl">&#x2022; Artistic Anthology</h1>
          <p className='firstdivtext text-base'>Contemporary, Traditional, Abstract</p>
      </div>
  </div>
  
      <div class="boxedi flex  justify-center bg-gray-100 ">

              <div class="imagehistory1 flex-initial mt-10  ">
                  <img className='historyimage  w-80 h-5/6' src='https://i.pinimg.com/564x/ab/67/69/ab676931654bcb829d8c12fc6581a494.jpg' alt="img1" />
                  <h1 className=" tihih firstdiv text-left  text-2xl">&#x2022;Timeless Tales</h1>
                  <p className='akgjbkb firstdivtext text-base'>War, Civilization, Revolution </p>
              </div>
              <div class=" imagehistory1 flex-initial mt-10 ml-8">
                  <img className='historyimage  w-80 h-5/6' src='https://i.pinimg.com/564x/b0/b1/bf/b0b1bf88d02043d5b369b7cf55158a4f.jpg' alt="img2"/>
                  <h1 className=" tihih firstdiv text-left  text-2xl ">&#x2022;Cinematic Chronicles </h1>
                  <p className='akgjbkb firstdivtext text-base'>Mystery, Drama, Classics </p>
              </div>
              <div class=" imagehistory1 flex-initial mt-10 ml-8  ">
                  <img className=' historyimage  w-80 h-5/6' src='https://i.pinimg.com/564x/7d/fe/1a/7dfe1a803e988a73ac0201f4e9ecc82a.jpg' alt="img3"/>
                  <h1 className="tihih  firstdiv text-left  text-2xl">&#x2022;Page-turning </h1>
                  <p className='akgjbkb firstdivtext text-base'> Thrillers, Drama, Poetry</p>
              </div>


          </div>
          
          </div>
          </>
  )
}

export default Moviediv

