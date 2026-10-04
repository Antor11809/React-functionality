

import Technologies from "./components/Technologies";
import Nav from "./components/Nav";
import { Suspense } from 'react';


const techFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const techPromise = techFetch();
  return (
    <>
    
    <Nav/>
    <Suspense fallback={<p>Loading...</p>}>
      <Technologies techPromise={techPromise} />
    </Suspense>
    </>
  )
}

export default App
