<template>
  <div id="container">
    <div id="info">
      <div v-if="this.attraction.name">
        <p>
          <strong>Name:</strong>
          {{this.attraction.name}}
        </p>
        <p>
          <strong>Address:</strong>
          {{this.attraction.address}}
        </p>
        <p>
          <strong>Type:</strong>
          {{this.attraction.category}}
        </p>
      </div>
    </div>

    <div id="mapContainer"></div>
  </div>
</template>

<script>
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  //import axios from "axios";

  // Import datas
  // @TODO: Data from MongoDB or API or sqlite
  import data from "../Handicap-Park-Locations.json";

  export default {
    name: "MapContainer",
    data() {
      return{
        // Coordonnées de la Rochelle pour centrer la carte
        // https://www.latlong.net/
        center: [46.178160, -1.150940],
        data: [],
        map: null,
        attraction: {
          name: "",
          address: "",
          category: "",
        },

        /* @TODO: Mettre ces infos en lieu sûr */
        clientSecret: "FTZGMLOIQWFY3A0ELEZIZSUU3M4EKOJKEPXKWUWTMWK1EY4H",
        clientID: "GOSFGAOZKCSLMWADY1ORYJV2A4GUNNHAHBVWY500S1IM42CS",
    }},
    methods: {
      setupLeafletMap: function ()
      {
        // Création de la carte
        // ---------------------
        // https://leafletjs.com/reference.html#map-factory
        this.map = L.map(
            "mapContainer",
            {
              zoomControl: false
              }
            )
            .setView(this.center, 14);

        L.tileLayer(
            // Liste de tileLayer disponibles
            // https://leaflet-extras.github.io/leaflet-providers/preview/
            'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
            //"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
              attribution:
                  'Stationnement Handicapé - Ville de la Rochelle',
              maxZoom: 18,
              id: "mapbox/streets-v11",
              // accessToken: "pk.eyJ1IjoiYWJpZGlzaGFqaWEiLCJhIjoiY2l3aDFiMG96MDB4eDJva2l6czN3MDN0ZSJ9.p9SUzPUBrCbH7RQLZ4W4lQ",
            }
        ).addTo(this.map);

        L.geoJSON(data , {
          onEachFeature: this.onEachFeature,
          style: this.styleMap,
        })
            .addTo(this.map);

            // Comportement on click sur un marker
            //.on("click", this.onClick);
      },

      styleMap(){

        return {
          "color": "#ff7800",
          "weight": 5,
          "opacity": 0.65
        };

      },
      onEachFeature(feature, layer) {

        //console.log("Ajout d'un marker " + feature.properties.geo_point_2d[0]);

        if (feature.properties && feature.properties.obs)
        {
          // ------------------------------------------
          // Génération du lien d'itinéraire Google Map
          // ------------------------------------------
          // Doc: https://developers.google.com/maps/documentation/urls/get-started?hl=fr#directions-action
          // https://stackoverflow.com/questions/48224834/open-google-maps-app-with-directions-by-coordinates
          // Exemple: https://www.google.com/maps/dir/?api=1&destination=50.69390757320,10.970328366756
          let googleItineraryLink = "https://www.google.com/maps/dir/?api=1&";
          // Destination
          googleItineraryLink += "destination=" + feature.properties.geo_point_2d[1] + "," + feature.properties.geo_point_2d[0];
          // Mode de transport Voiture
          googleItineraryLink += "&travelmode=car";

          //console.log("Lien google Map: " + googleItineraryLink);


          // Contenu du popup
          let popupContent = '<div>' + feature.properties.obs + '</div>';
          popupContent += '<a href="' + googleItineraryLink + '">Itinéraire Google</a>';

          // Gestion du popup
          layer.bindPopup( popupContent );

          // Comportement ouverture/fermeture du popup
          layer.on('click', () => { layer.openPopup(); });
          //layer.on('mouseout', () => { layer.closePopup(); });
        }

        const icons = {
          'iconCane': L.icon({iconUrl: "/assets/markerIcons/cane.png", iconSize: [20,20]})
        }

        // Ajout de l'icône Canne
        if (layer instanceof L.Marker)
        {
          layer.setIcon(icons.iconCane)
        }
      },
      onClick(e) {
        console.log("Click " + e);
        /*const name = e.layer.feature.properties.name;
        axios
            .get(
                `https://api.foursquare.com/v2/venues/search?client_id=${this.clientID}&client_secret=${this.clientSecret}&v=20180323&limit=1&near=San Francisco, CA&query=${name}`
            )
            .then((data) => {
              this.attraction = {
                name: name,
                address: data.data.response.venues[0].location.formattedAddress.join(
                    " "
                ),
                category: data.data.response.venues[0].categories[0].name,
              };
            });*/
      }
    },
    mounted() {
      this.setupLeafletMap();
    }
  };
</script>

<style scoped>
  #mapContainer {
    width: 80vw;
    height: 90vh;
  }
</style>