import React from "react";
// import { collection } from "../DomainName";
import "../App.css";



function Card(props) {

  const textStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    lineHight : '28px'
  };
    
    if(props.type==="Grid")return (  
      <div style={{minWidth:'79.67vw',width:'79.67vw', height:'78.45vh',backgroundColor:"#03123D",margin:"0px auto 0px auto",padding:"24px"}} className={props.status}>
<h1 style={textStyle}>{props.name}</h1>
<div>
  <div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",marginRight:'1.4vw',position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[0]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>

  <div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",marginRight:'1.4vw',position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[1]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>

  <div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[2]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>

  
  
    
</div>
<div style={{marginTop:'1.4vw'}}>

<div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",marginRight:'1.4vw',position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[3]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>

  <div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",marginRight:'1.4vw',position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[4]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>

  <div style={{minWidth:'25.60vw',width:'25.60vw', height:'31.6vh',display:"inline-block",position:"relative"}}>
    <img src="https://picsum.photos/200?random=${film.episode_id}" style={{minWidth:'100%',width:'100%',height:"72.72%",position:'absolute',top:'0',borderRadius:'0.5vw'}}/>

    <div style={{minWidth:'100%',width:'100%',height:"26.28%",position:'absolute',bottom:'0',backgroundColor:'#344063',borderRadius:'0.5vw'}}>
      
      <img  src={process.env.PUBLIC_URL + '/images/'+props.name+'.png'} style={{height:"40%",marginTop:'2.5vh',marginLeft:'0.5vw'}}/>
      <span style={{height:"40%",color:'#ffffff',position:'relative',top:'-0.8vh',marginLeft:'0.5vw'}}>{props.title[5]}</span>
      <img  src={process.env.PUBLIC_URL + '/images/Button.png'} style={{height:"40%",position:'absolute',top: '30%',right:'5%'}} />
    </div>
  </div>
 

</div>
</div>
      )
      else return (  
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

export default Card;