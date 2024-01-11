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

            var fecha_actualizacion = request_data[0].fechaActualizacion

            var compra_blue = request_data[1].compra 
            var venta_blue = request_data[1].venta

            var compra_oficial = request_data[0].compra 
            var venta_oficial = request_data[0].venta 

            var compra_bolsa = request_data[2].compra 
            var venta_bolsa = request_data[2].venta 

            var compra_ccl = request_data[3].compra 
            var venta_ccl = request_data[3].venta 

            var compra_mayorista = request_data[5].compra 
            var venta_mayorista = request_data[5].venta 

            var venta_solidario = request_data[4].venta 

            dolar_widget.innerHTML = `<div class="row">
          <div class="col-3 dolar-card m-1 p-4 d-flex">
              <div class="row">
              <div class="col-12 d-flex justify-content-center"><p class="title">DOLAR BLUE</p></div>
              <div class="col-6 m-0 d-flex justify-content-center">Compra</div>
              <div class="col-6 m-0 d-flex justify-content-center">Venta</div>
              <div class="col-6 m-0 d-flex justify-content-center">$${compra_blue}</div>
              <div class="col-6 m-0 d-flex justify-content-center">$${venta_blue}</div>
              <div class="col-12 d-flex justify-content-center align-items-end"><small>Actualizado el ${fecha_actualizacion}</small></div>
              </div>
              
          </div>
          <div class="col-8 d-flex p-0 m-1">
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                      <div class="col-6">DOLAR OFICIAL PROMEDIO</div>
                      <div class="col-6 d-flex justify-content-end precios-dolar">
                          <small>Compra</small><p>$${compra_oficial}</p>
                          <small>Venta</small><p>$${venta_oficial}</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                      <div class="col-6">DOLAR BOLSA</div>
                      <div class="col-6 d-flex justify-content-end precios-dolar">
                          <small>Compra</small><p>$${compra_bolsa}</p>
                          <small>Venta</small><p>$${venta_bolsa}</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                      <div class="col-6">DOLAR CONTADO CON LIQUI</div>
                      <div class="col-6 d-flex justify-content-end precios-dolar">
                          <small>Compra</small><p>$${compra_ccl}</p>
                          <small>Venta</small><p>$${venta_ccl}</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                      <div class="col-6">DOLAR MAYORISTA</div>
                      <div class="col-6 d-flex justify-content-end precios-dolar">
                          <small>Compra</small><p>$${compra_mayorista}</p>
                          <small>Venta</small><p>$${venta_mayorista}</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 dolar-card m-0 p-3 d-flex justify-content-center">
                  <div class="row">
                      <div class="col-6">DOLAR SOLIDARIO</div>
                      <div class="col-6 d-flex justify-content-end precios-dolar">
                          <small>Venta</small><p>$${venta_solidario}</p>
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




