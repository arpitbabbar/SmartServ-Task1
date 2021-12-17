import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {

  const [reqd, setreqd] = useState([]);
  const newa = [];
  // fetching data from the api
  const fetchData = async () => {
    let url = "https://s3.amazonaws.com/open-to-cors/assignment.json"; //given api
    let data = await fetch(url); // data will be in json form
    let parsedData = await data.json(); //parsing the data
    // console.log(parsedData);
    const { products } = parsedData; //destructuring only reqd data i.e. Products
    var arr = []; //creating a array for sorting of data on popularity basis
    let i = 0;

    //storing only id and popularity in new array
    Object.entries(products).forEach(([key, value]) => {
      arr[i] = [key, value.popularity];
      i++;
    });

    //sorting new array on popularity basis
    arr.sort(function (a, b) {
      return b[1] - a[1];
    });

    //now storing sorted records in our reqd array 
    for (let j = 0; j < 1000; j++) {
      newa[j] = products[`${arr[j][0]}`];
    }
    // setting value of reqd var useing useState
    setreqd(newa);
  }
  //useEffect hook to call function onload 
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container">
        <center>
          <h2>Displaying all Records</h2>
          <h5>(Sorted By Popularity)</h5>
        </center>
        <div className="row">
          {/* Mapping through all elements of array and displaying them */}
          {reqd.map((element) => {
            return (
              <Card className="col-md-4" title={element.title} price={element.price} popularity={element.popularity} key={element.title + element.popularity} />
            )
          })}
        </div>

      </div>

    </>
  )
}

export default App;
