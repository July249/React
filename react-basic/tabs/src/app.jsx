import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // fetching api data
  const fetchJobs = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setLoading(false);
      setJobs(newJobs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Loading page structure
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return <h2>Tabs Project Set up</h2>;
}

export default App;
