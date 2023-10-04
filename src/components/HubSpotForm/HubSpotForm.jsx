function HubSpotForm() {
    useEffect(() => {
      // Cargar el script de HubSpot
      loadHubSpotScript();
  
      // Crear el formulario de HubSpot
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '4322019',
          formId: '93e4572a-7d19-4ede-8a29-fe96556c8d8f'
        });
      }
    }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez, como componentDidMount
  
    return (
      <div>
        {/* Coloca aquí el contenedor del formulario de HubSpot si es necesario */}
      </div>
    );
  }
  
  export default HubSpotForm



  