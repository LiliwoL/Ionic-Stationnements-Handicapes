<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
  import "leaflet/dist/leaflet.css";
  import { Map, tileLayer, geoJSON, icon, Marker, Circle } from 'leaflet';

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
        icons : {
          'iconCane': new icon(
              {
                iconUrl: "/assets/markerIcons/cane.png",
                shadowUrl: '',
                // Taille affichée
                iconSize: [24,24],
                // Icone ombre
                shadowSize:   [0, 0],
                // Base de l'icône affiché, 24 est 48/2 (pour éviter les décalage à l'affichage)
                //iconAnchor: [12, 24],
                // Position de la bulle de texte au clique sur le marqueur
                //popupAnchor: [0, -24]
              }
          )
        },

        /* @TODO: Mettre ces infos en lieu sûr */
        clientSecret: "FTZGMLOIQWFY3A0ELEZIZSUU3M4EKOJKEPXKWUWTMWK1EY4H",
        clientID: "GOSFGAOZKCSLMWADY1ORYJV2A4GUNNHAHBVWY500S1IM42CS",
    }},
    methods: {
      onLocationFound: function (e) {
        const radius = e.accuracy;

        new Marker(e.latlng).addTo(this.map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        new Circle(e.latlng, radius).addTo(this.map);
      },

      setupLeafletMap: function ()
      {
        // Création de la carte
        // ---------------------
        // https://leafletjs.com/reference.html#map-factory
        this.map = new Map(
            "mapContainer",
            {
              zoomControl: false
              }
            )
            .setView(this.center, 14);

        // Demande la localisation
        //this.map.locate({setView: this.center, zoom: 14, maxZoom: 18});
        //this.map.on('locationfound', this.onLocationFound);

        // TileLayer
        new tileLayer(
            // Liste de tileLayer disponibles
            // Exemples: https://leaflet-extras.github.io/leaflet-providers/preview/
            // ----------------------------------------------------------------------

            //'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',              // Dark
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',                                     // Classique
            //"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",       // map
            {
              attribution: 'Stationnement Handicapé - Ville de la Rochelle',
              maxZoom: 18,
              id: "mapbox/streets-v11",

              // Si on utilise le tile mapbox
              accessToken: "pk.eyJ1IjoiYWJpZGlzaGFqaWEiLCJhIjoiY2l3aDFiMG96MDB4eDJva2l6czN3MDN0ZSJ9.p9SUzPUBrCbH7RQLZ4W4lQ",
            }
        )
            .addTo(this.map);


        // CartoDB_DarkMatter
        /*new tileLayer
        (
            'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            {
              attribution: '© OpenStreetMap contributors © CARTO',
              subdomains: 'abcd',
              maxZoom: 19
            }
        )
            .addTo(this.map);*/

        // Google Map Layer
        /*const googleStreets = new tileLayer
        (
            'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
            {
              maxZoom: 20,
              subdomains:['mt0','mt1','mt2','mt3']
            }
        )
            .addTo(this.map);*/

        // Satelite Layer
        /*const googleSat = new tileLayer
        (
            'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            {
              maxZoom: 20,
              subdomains:['mt0','mt1','mt2','mt3']
            }
        )
            .addTo(this.map);
        */

        // Stamen_Watercolor
        /*const Stamen_Watercolor = new tileLayer(
            'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
            {
              attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors',
              subdomains: 'abcd',
              minZoom: 1,
              maxZoom: 16,
              ext: 'jpg'
            }
        )
            .addTo(this.map);
        */


        // Lecture et ajout des données dans une couche geoJsonLayer
        new geoJSON(
            data,
            {
              pointToLayer: this.addMarker,
              onEachFeature: this.onEachFeature,
              style: this.styleMap,
            }
        )
            .addTo(this.map);

            // Comportement on click sur un marker
            //.on("click", this.onClick);
      },

      // Style appliqué à chaque marker??
      styleMap()
      {
        return {
          "color": "#ff7800",
          "weight": 5,
          "opacity": 0.65
        };
      },

      addMarker(feature, latlng) {
        return new Marker(
            latlng,
            {icon: this.icons.iconCane}
        );
      },

      onEachFeature(feature, layer)
      {
        //console.log("Ajout d'un marker " + feature.properties.geo_point_2d[0]);

        console.log(feature);

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
          popupContent += '<a href="' + googleItineraryLink + '">Navigation avec Google Maps</a>';
          popupContent += '<br/>';
          popupContent += '<a href="' + googleItineraryLink + '">Navigation avec Waze</a>';
          // Ajout du popup
          layer.bindPopup(
              popupContent,
              {
                autoClose: true
              }
          );

          // Comportement ouverture/fermeture du popup
          //layer.on('mouseover', () => { layer.openPopup(); });
          //layer.on('mouseout', () => { layer.closePopup(); });

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
    width: 100%;
    height: 90vh;
  }
</style>