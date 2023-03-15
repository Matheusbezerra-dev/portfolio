
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from "styled-components";
import './stylemap.css';

const ContainerMap = styled.section`
  max-width: 1100px;
  height: 30rem;
  width: 100%;
  padding: 2rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  div :first {
    box-shadow: 1px 2px 5px black;
  }
`;

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAMl7RhrsU4cL9qN0i8gPpWMSgkD-SpbH4',
  });
  const position = {
    lat: -20.776696856948874,
    lng: -51.70243617311636,
  };
  return (
    <ContainerMap>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%',
            boxShadow: "0px 0px 8px black",
          }}
          center={position}
          zoom={10}         
        > 
        <Marker 
          position={position} 
          // options={{
          //   label: {
          //     text:'Mirai Software Development',            
          //     className: 'label-style',
          //   }
          // }}
        />   
        </GoogleMap>
      ) : <></>}
    </ContainerMap>
  );
};

export default Map;
