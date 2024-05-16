
import GoogleMapReact from "google-map-react";

const apikey = import.meta.env.VITE_GOOGLE_MAPS;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -32.92306090289707,
      lng: -60.679533458798836,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{marginTop:'6rem', height: '20vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-32.92306090289707}
          lng={-60.679533458798836}
          text="Folk"
        />
      </GoogleMapReact>
    </div>
  );
}
