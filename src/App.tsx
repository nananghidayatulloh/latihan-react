/* import Button from "./components/button/Button"
import Avatar from "./components/avatar/Avatar";*/
//import { ChangeEvent, useState } from "react";
import Input from "./components/input/Input"; 
//import Profile from "./features/profile/Profile";
import ContohList from "./features/contoh-list/ContohList";

import Button1 from "./components/button/Button1"
import { ChangeEvent, useState } from "react";
//import ContohList2 from "./features/contoh-list/ContohList2";

//import LatihanForm from "./components/form/LatihanForm";
//import LatihanForm2 from "./components/form/LatihanForm2";
import LatihanFormApi from "./components/form/LatohanFormApi";

function App() {

  //const untuk if else
  const show : boolean =  true;
  const [nama, setNama] = useState<string>();
  
  const handleClickButton = ()=>{
    alert('handle click button ')
  }

  const handleOnChange = (e:ChangeEvent<HTMLInputElement>)=>{
    alert(e.target.value)
  }

  const handleChangeNama = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };
  
/*   const [nama, setNama] = useState<string>();
  const handleChangeNama = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  }; */

  
  return (

    // //Pembungkus fragment
    <>
    <div className="App">

      <Button1 label="Button Saya Primary" variant="primary" onClick={handleClickButton}/>
      <Button1 label="Button Saya Primary" variant="secondary" />

      <Input
        placeholder="Username"
        onChange={handleOnChange}
      />

      {/* if else  */}
      <h1>{show?'Nilai True':'Nilai False'}</h1> 

      {/* latihan if else dengan change */}
      <Input onChange={handleChangeNama} />
      <h1>{nama}</h1>
      <br />
      {nama === "john" ? (
        <div>
          <h1>Nama kamu adalah {nama}</h1>
        </div>
      ) : (
        <div>
          <h1>Nama kamu bukan john</h1>
        </div>
      )}

      {/* ////dibungkus fragment */}
      {
        nama==='john'?<> <h1>Kamu adalah {nama}</h1></>:<> <h1>Kamu bukan john</h1></>
       }

   {/*  <ContohList />
    <ContohList2 /> */}

    {/* <LatihanForm />

    <LatihanForm2 /> */}

    <LatihanFormApi />
      
{/* <Input onChange={handleChangeNama} />
      <h1>{nama}</h1> */}

{/* {       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> } */}

     {/*  <Button label='button 1' variant='primary'/>
      <Button label='button 2' variant='secondary'/>

      <Avatar size="sm" url="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" label="Gambar 1"/>

      <Avatar size="md" url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 2"/>

      <Avatar size="lg" url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 3"/>

      <Input onClick={(e)=>{
        console.log("ini diklik");
        
      }}/>
      <br />
      <br />
       <Input placeholder="Username" onChange={(e)=>{
        console.log(e.target.value);
        
      }}
      />
      <br />
      <br />
      <Input type="password" placeholder="Password" onChange={(e)=>{
        console.log(e.target.value);
        
      }}
      />
      <br />
      <br />

      <Input type="number" placeholder="Umur" onChange={(e)=>{
        console.log(e.target.value);
        
      }}
      />

      <Input placeholder="Username" onChange={(e)=>{
        console.log(e.target.value);
        
      }}/> */}
      
      {/* <Profile /> */}

    </div>
    </> //Pembungkus fragment
  );
}

export default App;
