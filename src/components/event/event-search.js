import Button from "../ui/button";
import { useRef } from "react";
export default function EventSearch(props) {

    const yearInput = useRef();
    const monthInput = useRef();

    function submitHandler(event){
     event.preventDefault();
     const yearSelected = yearInput.current.value;
     const monthSelected = monthInput.current.value;

     props.onSearch(yearSelected, monthSelected);
    }
    return (
      <form
        className="w-full md:w-6/12 max-w-2xl my-20 mx-auto bg-white  p-4 shadow-md rounded-md"
        onSubmit={submitHandler}
      >
        <div className="flex  justify-between items-center">
          <div className="w-1/3">
            <label className="font-bold mx-3" htmlFor="year">
              Year
            </label>
            <select
              className=" w-1/2 p-1 border-2 border-black rounded-md"
              id="year"
              ref={yearInput}
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="font-bold mx-3" htmlFor="month">
              Month
            </label>
            <select
              className=" w-1/2 p-1 border-2 border-black rounded-md"
              id="month"
              ref={monthInput}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">Septemer</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <Button>Find Events</Button>
        </div>
      </form>
    );
}