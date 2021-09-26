import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import Charecter from "../LoadData/Charecter";
import "./Cart.css";

const Cart = () => {
  const [charecters, setCharecters] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./moneyHeist.JSON")
      .then((res) => res.json())
      .then((data) => setCharecters(data));
  }, []);
  const addCharecter = (charecter) => {
    let flag = 0;
    for (const charecters of cart) {
      if (charecters.key === charecter.key) {
        flag++;
        break;
      }
    }
    if (flag === 0) {
      const newCharecters = [...cart, charecter];
      setCart(newCharecters);
    }
  };
  let totalSalary = 0;
  for (const salary of cart) {
    let setSalary = parseInt(salary.salary);
    totalSalary = totalSalary + setSalary;
  }

  const handleRemoveFromCart = (author) => {
    console.log("Shihab vai pagol...");
    let i = 0;
    for (const writer of cart) {
      if (writer.key === author.key) {
        cart.splice(i, 1);
        const newCart = [...cart];
        setCart(newCart);
        break;
      }
      i++;
    }
  };

  return (
    <div>
      <div>
        <div className=" mx-5 mx-md-3 mx-sm-0 px-5  px-md-3 mt-5 ">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-12">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {charecters.map((charecter) => (
                  <Charecter
                    addCharecter={addCharecter}
                    charecter={charecter}
                    key={charecter.key}
                  ></Charecter>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="cartDesing p-3 shadow-lg rounded">
                <div className="py-3">
                  <h3 className="text-center">
                    <span className="text-danger">Total Cheacter:</span>
                    {"  "}
                    {cart.length}
                  </h3>
                  <h3 className="text-center">
                    <span className="text-danger">Total Salary:</span>
                    {"  "}
                    {totalSalary}
                  </h3>
                </div>

                <div>
                  {cart.map((cart) => (
                    <Aside
                      cart={cart}
                      handleRemoveFromCart={handleRemoveFromCart}
                      key={cart.key}
                    ></Aside>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
