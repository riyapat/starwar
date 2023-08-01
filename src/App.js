import React, { useState,useEffect } from "react";
import logo from "./image/logo.png";
import Films from "./image/Films.png";
import Caret from "./image/Caret.png";
import CaretRight from "./image/CaretRight.png";
import People from "./image/People.png";
import Planets from "./image/Planets.png";
import Species from "./image/Species.png";
import Starship from "./image/Starship.png";
import Vehicles from "./image/Vehicles.png";
import First from "./image/First.png";
import axios from 'axios';
import "./App.css";

import Card from "./components/Card";
import Search from "./components/Search";





const App = () => {

  const API_URL = 'https://swapi.dev/api';
  const [ifilms, setFilms] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [ipeople, setPeople] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [iplanet, setPlanet] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [ispecies, setSpecies] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [istarship, setStarship] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [ivehicle, setVehicle] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [content, setSelectedFilm] = useState(["loading","loading","loading","loading","loading","loading"]);
  const [active, setActive] = useState(null);
  const [contentType, setContentType] = useState("Grid");
  const [Searchkey,setSearch] = useState("");
  

  useEffect(() => {
    fetchFilms();
  }, []);

  async function fetchFilms() {
    try {
      
      var response = await axios.get(`${API_URL}/films/`);
      await setFilms(response.data.results);
       response = await axios.get(`${API_URL}/people/`);
      await setPeople(response.data.results);
      response = await axios.get(`${API_URL}/planets/`);
      await setPlanet(response.data.results);
      response = await axios.get(`${API_URL}/species/`);
      await setSpecies(response.data.results);
      response = await axios.get(`${API_URL}/starships/`);
      await setStarship(response.data.results);
      response = await axios.get(`${API_URL}/vehicles/`);
      await setVehicle(response.data.results);
      setActive("0");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange =(event) => {
    setSearch(event.target.value);

  }
    const handleClick =(event) => {
    

    if(event.target.id==="") setActive("0");
    else if(event.target.id===active){
      console.log(ifilms);
      console.log(ipeople);
      console.log(iplanet);
      console.log(ispecies);
      console.log(istarship);
      console.log(ivehicle);
      
      setActive("0");}
    else{      
      if(event.target.id==="1")setSelectedFilm([ifilms[0].title,ifilms[1].title,ifilms[2].title,ifilms[3].title,ifilms[4].title,ifilms[5].title]);
      else if(event.target.id==="2")setSelectedFilm([ipeople[0].name,ipeople[1].name,ipeople[2].name,ipeople[3].name,ipeople[4].name,ipeople[5].name]);
      else if(event.target.id==="3")setSelectedFilm([iplanet[0].name,iplanet[1].name,iplanet[2].name,iplanet[3].name,iplanet[4].name,iplanet[5].name]);
      else if(event.target.id==="4")setSelectedFilm([ispecies[0].name,ispecies[1].name,ispecies[2].name,ispecies[3].name,ispecies[4].name,ispecies[5].name]);
      else if(event.target.id==="5")setSelectedFilm([istarship[0].name,istarship[1].name,istarship[2].name,istarship[3].name,istarship[4].name,istarship[5].name]);
      else if(event.target.id==="6")setSelectedFilm([ivehicle[0].name,ivehicle[1].name,ivehicle[2].name,ivehicle[3].name,ivehicle[4].name,ivehicle[5].name]);
    setActive(event.target.id);
    }
    
  }

  const handleType =(event) => {
    setContentType(event.target.id);
    }
    
  
  if(active!=null)return(
    
    <div style={{width:'100vw', height:'100vh',backgroundColor:"#03123D"}}> 
    {(Searchkey.length==0)?(active!="0")&& <div className="panel">
      <button id="Grid" onClick={handleType} style={{padding:"0px",border:"0px solid red",backgroundColor:"transparent"}}>
        <img id="Grid" src={(contentType==="Grid")?process.env.PUBLIC_URL + '/images/grids.png':process.env.PUBLIC_URL + '/images/grid.png'} style={{height:"5vh"}} />
        </button>
      <button id="List" onClick={handleType}  style={{padding:"0px",border:"0px solid red",backgroundColor:"transparent"}}>
      <img id="List" src={(contentType==="List")?process.env.PUBLIC_URL + '/images/lists.png':process.env.PUBLIC_URL + '/images/list.png'} style={{height:"5vh"}} />
      </button>
      </div>:(active!="0")&& <div className="panel">
      <img src={process.env.PUBLIC_URL + '/images/Gridlist.png'} style={{height:"5vh"}} />
      </div>}
    <div style={{width:'100vw', height:'10vh',backgroundColor:"#03123D",position:"relative",borderRadius:"1vw"}}>
      <img src={logo} style={{height:'48%',marginTop:'2.6vh',marginLeft:'1vw'}}/>
      {(active!="0") &&
<div style={{width:'15vw', height:'5vh',position:"absolute",top:'3vh',right:'2vw'}}>
  <input value={Searchkey} type="text" style={{width:"100%",height:"100%",backgroundColor:"transparent",position:"absolute",border:"1px solid white",
  outline: "none"}} onChange={handleChange}/>
{(Searchkey.length==0) &&
  <img  src={process.env.PUBLIC_URL + '/images/Search.png'} style={{height:"4vh",marginTop:"1vh",marginLeft:"0.5vw"}} />}
</div>
}
    </div>
    <div style={{width:'100vw', height:'90vh',position:"relative"}}>
    <div style={{minWidth:'16.33%',width:'16.33%', height:'88vh',paddingTop:"10px"}} id={"0"}  onClick={handleClick}>
      
    <button key={"1"} value="Films" className={active === "1" ? "active" : "unactive"} id={"1"} >
    <img src={Films} value="Films" style={{ width:"100%"}} id={"1"}/>
    <img value="Films" src={active === "1" ? Caret:CaretRight} className="icon" id={"1"} />
     </button>
    <div className="box" style = {active === "1"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Films.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ifilms[0].title.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Films.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ifilms[1].title.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>

    <button key={2} className={active === "2" ? "active" : "unactive"}id={"2"} >
    <img src={People} style={{ width:"100%"}} id={"2"} />
    <img src={active === "2" ? Caret:CaretRight} className="icon" id={"2"} />
     </button>
     <div className="box" style = {active === "2"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/People.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ipeople[0].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/People.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ipeople[1].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>

    <button key={3} className={active === "3" ? "active" : "unactive"} id={"3"}>
    <img src={Planets} style={{ width:"100%"}} id={"3"}/>
    <img src={active === "3" ? Caret:CaretRight} className="icon" id={"3"}/>
     </button>
     <div className="box" style = {active === "3"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Planets.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{iplanet[0].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Planets.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{iplanet[1].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>

    <button key={4} className={active === "4" ? "active" : "unactive"} id={"4"} >
    <img src={Species} style={{ width:"100%"}} id={"4"} />
    <img src={active === "4" ? Caret:CaretRight} className="icon" id={"4"} />
     </button>
     <div className="box" style = {active === "4"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Species.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ispecies[0].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Species.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ispecies[1].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>

    <button key={5} className={active === "5" ? "active" : "unactive"} id={"5"} >
    <img src={Starship} style={{ width:"100%"}} id={"5"} />
    <img src={active === "5" ? Caret:CaretRight} className="icon" id={"5"} />
     </button>
     <div className="box" style = {active === "5"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Starships.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{istarship[0].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Starships.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{istarship[1].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>

    <button key={6} className={active === "6" ? "active" : "unactive"} id={"6"}  >
    <img src={Vehicles} style={{ width:"100%"}} id={"6"} />
    <img src={active === "6" ? Caret:CaretRight} className="icon" id={"6"} />
     </button>
     <div className="box" style = {active === "6"? {display:"block"}:{display:"none"}}>
    <div className="btn" style={{backgroundColor:"#4d5875",position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Vehicles.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ivehicle[0].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    <div className="btn" style={{position:"relative"}} id={"1"} >
    <img  src={process.env.PUBLIC_URL + '/images/Vehicles.png'} style={{height:"60%",marginTop:'1vh',marginLeft:'0.5vw'}}/>
    <span style={{position:"relative",top:"-0.8vh",marginLeft:"0.5vw",color:"white"}}>{ivehicle[1].name.slice(0,19)}</span>
    <img  src={CaretRight} style={{height:"60%",position:"absolute",top:'1vh',right:"0.5vw"}}/>
    </div>
    </div>
    
   
</div>
<div style={{minWidth:'83%',width:'83%', height:'88vh',paddingTop:"10px",position:"absolute",top:"0px",left:"17%"}}>
<div style={{minWidth:'50.87vw',width:'50.87vw', height:'55.45vh',backgroundColor:"white",margin:"8vh auto 0px auto",padding:"24px"}} className={active==="0"? "true":"false"}>

  <img src={First} style={{width:"100%"}}/><br/>
  <h6 style={{color:"#3B3F5C"}}>Star Wars is an American epic space opera multimedia franchise created by 
    George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</h6>

</div>


{(Searchkey.length==0)?
  <Card key={1} id={1} status={active==="1"?"true":"false"} name={"Films"} title = {content} type={contentType} data={ifilms}/>:
  <Search key={1} id={1} status={active==="1"?"true":"false"} name={"Films"} search={Searchkey}  data={ifilms}/>}

{(Searchkey.length==0)?
<Card key={2} id={2} status={active==="2"?"true":"false"} name={"People"} title = {content} type={contentType} data={ipeople}/>:
<Search key={2} id={2} status={active==="2"?"true":"false"} name={"People"} search={Searchkey} data={ipeople}/>}
{(Searchkey.length==0)?
<Card key={3} id={3} status={active==="3"?"true":"false"} name={"Planets"} title = {content} type={contentType} data={iplanet}/>:
<Search key={3} id={3} status={active==="3"?"true":"false"} name={"Planets"} search={Searchkey} data={iplanet}/>}
{(Searchkey.length==0)?
<Card key={4} id={4} status={active==="4"?"true":"false"} name={"Species"} title = {content} type={contentType} data={ispecies}/>:
<Search key={4} id={4} status={active==="4"?"true":"false"} name={"Species"} search={Searchkey} data={ispecies}/>}
{(Searchkey.length==0)?
<Card key={5} id={5} status={active==="5"?"true":"false"} name={"Starships"} title = {content} type={contentType} data={istarship}/>:
<Search key={5} id={5} status={active==="5"?"true":"false"} name={"Starships"} search={Searchkey} data={istarship}/>}
{(Searchkey.length==0)?
<Card key={6} id={6} status={active==="6"?"true":"false"} name={"Vehicles"} title = {content} type={contentType} data={ivehicle}/>:
<Search key={6} id={6} status={active==="6"?"true":"false"} name={"Vehicles"}  search={Searchkey} data={ivehicle}/>}

</div>
</div>
    </div>
  )
  else return(<div className="ring">Loading
  <span></span>
</div>)
}
export default App;