import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import Carousel from "../Components/Carousel/Carousel";
export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>
          Nattraphak
        </title>
      </Head>
      <div className="container-fluid p-0">
            <Carousel />
          <div className="col-12 mt-5 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita temporibus suscipit vero, ea exercitationem saepe debitis adipisci molestias numquam veniam eum! Facere iusto nesciunt assumenda veritatis, iure corrupti sequi itaque?
        </div>
      </div>
    </MainLayout>
  )
}
