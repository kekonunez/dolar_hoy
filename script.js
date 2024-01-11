const dolar_widget = document.getElementById("dolar-widget")

async function obtenerPreciosDolares(){
    try{
        request = await fetch("https://dolar-api-argentina.vercel.app/v1/dolares", {
            headers: {
              Accept: "application/json"
            }
          })

          if(request.status === 200){

            console.log('API CONECTADA CON EXITO')
            const request_data = await request.json();
            console.log(request_data)

            var fecha_actualizacion = request_data[1].fechaActualizacion

            var compra_blue = request_data[1].compra 
            var venta_blue = request_data[1].venta

            var compra_oficial = request_data[0].compra 
            var venta_oficial = request_data[0].venta 

            var compra_bolsa = request_data[2].compra 
            var venta_bolsa = request_data[2].venta 

            var compra_ccl = request_data[3].compra 
            var venta_ccl = request_data[3].venta 

            var compra_cripto = request_data[5].compra 
            var venta_cripto = request_data[5].venta 

            var venta_tarjeta = request_data[6].venta 

            dolar_widget.innerHTML = `<div class="row">
          <div class="col-3 dolar-card m-1 p-4 d-flex">
              <div class="row">
              <div class="col-12 d-flex justify-content-center"><p class="title">DOLAR BLUE</p></div>
              <div class="col-6 m-0 d-flex justify-content-center"><p class="subtitle">Compra</p></div>
              <div class="col-6 m-0 d-flex justify-content-center"><p class="subtitle">Venta</p></div>
              <div class="col-6 m-0 d-flex justify-content-center"><p class="precio">$${compra_blue}</p></div>
              <div class="col-6 m-0 d-flex justify-content-center"><p class="precio">$${venta_blue}</p></div>
              <div class="col-12 d-flex justify-content-center align-items-end"><small class="fecha-update">Actualizado el ${fecha_actualizacion}</small></div>
              </div>
              
          </div>
          <div class="col-8 d-flex p-0 m-1">
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
              <div class="row">
              <div class="col-6 d-flex align-items-center"><p class="title">DOLAR OFICIAL</p></div>
              <div class="col-6 d-flex justify-content-end precios-dolar">
                <div class="d-flex flex-column align-items-center"><small>Compra</small><p>$${compra_oficial}</p></div>
                <div class="d-flex ms-4 flex-column align-items-center"><small>Venta</small><p>$${venta_oficial}</p></div>   
              </div>
          </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                  <div class="col-6 d-flex align-items-center"><p class="title">DOLAR BOLSA</p></div>
                  <div class="col-6 d-flex justify-content-end precios-dolar">
                    <div class="d-flex flex-column align-items-center"><small>Compra</small><p>$${compra_bolsa}</p></div>
                    <div class="d-flex ms-4 flex-column align-items-center"><small>Venta</small><p>$${venta_bolsa}</p></div>   
                  </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                  <div class="col-6 d-flex align-items-center"><p class="title">DOLAR CONTADO CON LIQUI</p></div>
                  <div class="col-6 d-flex justify-content-end precios-dolar">
                    <div class="d-flex flex-column align-items-center"><small>Compra</small><p>$${compra_ccl}</p></div>
                    <div class="d-flex ms-4 flex-column align-items-center"><small>Venta</small><p>$${venta_ccl}</p></div>   
                  </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                  <div class="col-6 d-flex align-items-center"><p class="title">DOLAR CRIPTO</p></div>
                  <div class="col-6 d-flex justify-content-end precios-dolar">
                    <div class="d-flex flex-column align-items-center"><small>Compra</small><p>$${compra_cripto}</p></div>
                    <div class="d-flex ms-4 flex-column align-items-center"><small>Venta</small><p>$${venta_cripto}</p></div>   
                  </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                  <div class="col-6 d-flex align-items-center"><p class="title">DOLAR TARJETA</p></div>
                  <div class="col-6 d-flex justify-content-end precios-dolar">
                    <div class="d-flex flex-column align-items-center"><small>Venta</small><p>$${venta_tarjeta}</p></div>   
                  </div>
                  </div>
              </div>
          </div>
      </div>`
    }

    } catch(error){
        console.log(error)
    }
}

obtenerPreciosDolares();




