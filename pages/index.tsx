import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import CategoryBox from "../Components/CategoryBox/CategoryBox";
import Carousel from "../Components/Carousel/Carousel";
import Pagination from "../Components/Pagegination/PaginationContainer";
import { arr } from "../mockup/mockup";
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
          <div className="container-fluid">
            <div className="row">
              <CategoryBox name="Category 1" />
              <CategoryBox name="Category 2" />
              <CategoryBox name="Category 3" />
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <Pagination title="เสื้อผ้าแนะนำสำหรับคุณ."
            data={arr}
            itemsPerPage={5}
          />
        </div>
      </div>
    </MainLayout>

  )
}
