import React from "react";
// import { collection } from "../DomainName";
import "../App.css";



function Search(props) {

  const textStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    lineHight : '28px'
  };
    
   
      return (  
        <div style={{minWidth:'79.67vw',width:'79.67vw', height:'78.45vh',margin:"0px auto 0px auto",padding:"24px"}} className={props.status}>
  <h1 style={textStyle}>{props.name}</h1>
  <table style={{width:"100%",borderCollapse: "collapse"}}>
    <thead>
    <tr style={{backgroundColor:"#4D5875",height:'5vh',minHeight:"fit-content"}}>
      <th style={{width:"32%", textAlign: "left",paddingLeft:"1vw"}}>Name</th>
      <th style={{width:"26%", textAlign: "left",paddingLeft:"1vw"}}>{(props.name==="Films")?"Director":(props.name==="People")?"Gender":(props.name==="Planets")?"Climate":(props.name==="Species")?"Classification":"Model"}</th>
      <th style={{width:"32%", textAlign: "left",paddingLeft:"1vw"}}>{(props.name==="Films")?"Release Date":(props.name==="People")?"Birth Year":(props.name==="Planets")?"Population":(props.name==="Species")?"Language":"Consumables"}</th>
      <th style={{width:"10%",minWidth:"10%"}}></th>
    </tr>
    </thead>
    <br/>
    <tbody>

    {props.data.map((contents, index) => (  
       ((props.name==="Films")? contents.title.toUpperCase().includes(props.search.toUpperCase()):contents.name.toUpperCase().includes(props.search.toUpperCase()))&& 
        <>
        <tr key={index} > 
                <td><img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"2.5vh"}}/>{(props.name==="Films")?contents.title:contents.name}</td>  
                <td>{(props.name==="Films")?contents.director:(props.name==="People")?contents.gender:(props.name==="Planets")?contents.climate:(props.name==="Species")?contents.classification :contents.model}</td>  
                <td>{(props.name==="Films")?contents.release_date:(props.name==="People")?contents.birth_year:(props.name==="Planets")?contents.population:(props.name==="Species")?contents.language :contents.consumables }</td> 
                <td style={{position:'relative'}}><img  src={process.env.PUBLIC_URL + '/images/dot.png'} style={{height:"2.5vh",position:'absolute',right:'5px',top:'0px'}}/></td> 
                
              </tr>  
              <tr>
              <td colSpan="4" ><hr style={{borderTop: "0.5px solid Grey",}}/></td>
            </tr>
            </>
            ))}  


          
    </tbody>
  </table>
            <hr style={{border: "0px solid #03123D",borderTop: "5px solid #03123D",position:"relative",top:"-20px"}}/>
  </div>
        )
    }

export default Search;