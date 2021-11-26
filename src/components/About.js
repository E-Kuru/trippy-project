import Nav from "./Nav"
import styled from 'styled-components';
import imgtravel from './imgtravel.png';

const TextAbout = styled.div`
text-align: start;
margin-left: 35%;
h1{
    font-size: 40px;
    margin-top: -340px;
    
}

h4{
    font-size: 30px;
}

p{
    font-size: 19px;
}

img {
    margin-left: -550px;
    width: 50%;
    margin-top: 40px;
    
}



`

function About() {
    return (
        <div>
            <Nav/>
            <TextAbout>
            <img src={imgtravel}/><h1>À propos de nous</h1>
            
<h4>Bienvenue sur TravelTrib.com</h4>
<p>
    TravelTrip est l'un des principaux fournisseurs<br/> 
    d'hébergements hôteliers dans le monde,<br/>
    proposant des services de réservation via son propre réseau<br/>
     de sites Web localisés. TravelTrip.com offre aux voyageurs<br/>
      l'une des plus vastes sélections d'hébergements<br/>
       sur le net, comprenant à la fois des hôtels indépendants<br/>
        et de grandes chaînes.
   
</p>
<h3>Adresse:</h3>
<p>6 rue Jean Jaures, 93170 Bagnolet</p>
<h3>Créateur du site :</h3>
<p>Lahouel Syrine, Dalleau Evan, Jean Marie Kévin, Dubrulle Jeremy</p>
<h3>Nous contacter :</h3>
<p>traveltrip@contact.com</p>
<h4>Partie contractante relative aux services de paiement<br/>
 destinés aux utilisateurs dont le lieu de résidence<br/> 
  se trouve au Royaume-Uni, en Suisse ou en Russie :</h4>
<p>TravelTrip UK Ltd.<br/>
100, New Bridge Street <br/>
Londres<br/>
EC4V 6JA<br/>
Royaume-Uni<br/>
</p>
<h3>Conseil d'administration :</h3>
<p>Kakashi Hatake, Roronoa Zoro, Zabuza Momochi</p>
<h3>2021 ©</h3>

</TextAbout>
        </div>
    )
}

export default About





