import HeadTitle from "../components/HeadTitle";
import PropertiesCards from "../components/PropertiesCards";
import { AppContext } from "../App";
import { useContext } from "react";

import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Properties = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { propertiesData, page, setPage } = useContext(AppContext);

  setPage(searchParams.get("page"));

  const handlePaginate = (data) => {
    const currentPage = data.selected;
    setSearchParams({ page: currentPage + 1 });
  };

  return (
    <section>
      <div className="category py-[65px]">
        <div className="relative">
          <HeadTitle
            hText={"Properties"}
            h={"text-[#fff]"}
            p={"text-[#E7E9EB]"}
          />
        </div>
      </div>
      <div className="py-[150px] items-center">
        <PropertiesCards propertiesData={propertiesData} />
        <ReactPaginate
          className=" flex justify-center gap-5 mt-[80px]"
          previousLabel={"<"}
          nextLabel={">"}
          selectedPageRel={searchParams.get("page")}
          pageCount={propertiesData.length / 8}
          onPageChange={handlePaginate}
          previousClassName="bg-[#EDEFF6] text-[#6D737A] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
          nextClassName="bg-[#4A60A1] text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
          activeClassName="bg-[#4A60A1] text-[#fff] "
          pageClassName="font-semibold text-[#4A60A1] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
        />
      </div>
    </section>
  );
};

export default Properties;
