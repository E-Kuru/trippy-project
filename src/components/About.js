import Nav from "./Nav"

const About = styled.div`
h4{
    font-size: 10px;
}
`

function About() {
    return (
        <div>
            <Nav/>
            <About>
            <h1>À propos de nous</h1>
<h4>Bienvenue sur TravelTrib.com</h4>
<p>
    TravelTrip est l'un des principaux fournisseurs d'hébergements hôteliers dans le monde,
    proposant des services de réservation via son propre réseau de sites Web localisés.
    TravelTrip.com offre aux voyageurs l'une des plus vastes sélections d'hébergements sur le net,
    comprenant à la fois des hôtels indépendants et de grandes chaînes,
    ainsi que des hébergements indépendants dans plus de centaines de milliers d'établissements dans le monde.
    La société offre une source d'achat unique pour les prix, les équipements et la disponibilité des hôtels.
</p>
</About>
        </div>
    )
}

export default About





