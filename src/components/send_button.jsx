import * as React from 'react';
import Button from '@mui/material/Button';

export default function SendButton({action,hora,minuto}) {

    function sendDataToESP() {
        if(action === "" || hora === "" || minuto === ""){
            alert("Todos los campos deben ser llenados");
            return;
        }
        var xhr = new XMLHttpRequest();
            // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        var url = "http://192.168.0.79/encender=";
        url = url + action;
        url = url + "hora=" + hora + "x";
        url = url + "min=" + minuto + "x";
        alert(url)
        xhr.open('GET', url);
        // send the request
        xhr.send();
        }
    
  return (
    <React.Fragment>
      <Button onClick={sendDataToESP} variant="contained" color="success">
        Send
      </Button>
    </React.Fragment>
  );
}

