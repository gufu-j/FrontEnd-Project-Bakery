import { useParams } from "react-router-dom";

import SingleBread from "./SingleBread";
import BreadForm from "./BreadForm";


function Breads({bakeries}){

    const { id } = useParams();
    let singleBakery = bakeries.find((bakery) => bakery.id === parseInt(id));


  return(
      <div className="Reviews">
         {typeof(singleBakery) == "object" ? <BreadForm bID={singleBakery.id}/>: false}

         {typeof(singleBakery) == "object" ? singleBakery.breads.map((bread) => {
          console.log(bread);
            return (
            <SingleBread
                key={bread.id}
                bName={bread.name}
                bType={bread.type_of_bread}
                bPrice={bread.price}
            />
          );
         }) : console.log("it is not an object")}
      </div>
  )

}

export default Breads




              