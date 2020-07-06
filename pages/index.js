import Head from 'next/head'
import Item from '../components/Item/Item'
function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Euroamerican Travel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </Head>
      <div className="row">
        <div className="col-md-4 text-center p-4" style={{ background: "#acd038"}}>
          <h1 className="text-white mt-5">Información de vuelos</h1>
        </div>
        <div className="col-md-8">
          <Item data={data} />
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const codigo_reservaOne = await (await fetch('https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=RK2V89')).json()
  const codigo_reservaTwo = await (await fetch('https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737')).json()
  codigo_reservaTwo.respuesta.forEach(element => codigo_reservaOne.respuesta.push(element));
  return { data: codigo_reservaOne }
}

export default Home
